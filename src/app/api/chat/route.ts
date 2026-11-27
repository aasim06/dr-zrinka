import { streamText } from "ai";
import { createOpenAI } from "@ai-sdk/openai";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { getFirestoreDb } from "@/lib/firebase";
import { AiChatLogRepo } from "@/models/AiChatLog";
import { getActiveAiKnowledge, getPublicSiteSettings } from "@/lib/public-data";

type ClientMessage = {
  role: "user" | "assistant";
  content: string;
};

function selectLanguageModel() {
  const openaiKey = process.env.OPENAI_API_KEY?.trim();
  if (openaiKey) {
    const provider = createOpenAI({ apiKey: openaiKey });
    return provider("gpt-4o-mini");
  }
  const geminiKey = (process.env.GEMINI_API_KEY || process.env.GOOGLE_GENERATIVE_AI_API_KEY)?.trim();
  if (geminiKey) {
    const provider = createGoogleGenerativeAI({ apiKey: geminiKey });
    return provider("gemini-2.5-flash");
  }
  return null;
}

function detectBookingIntent(text: string): boolean {
  return /\b(book|booking|schedule|consult|advisory|strategic conversation|keynote|speak|speaking|fee|fees|price|pricing|cost|engage|work together|contact|beratung|gespräch|vortrag|honorar|preis|kosten|kontakt|termin|zusammenarbeit)\b/i.test(
    text
  );
}

async function saveChatTurn(sessionId: string, userMessage: string, assistantMessage: string, leadCaptured: boolean) {
  try {
    const db = getFirestoreDb();
    if (!db || !sessionId) return;
    await AiChatLogRepo.appendTurn(db, sessionId, userMessage, assistantMessage, leadCaptured);
  } catch (err) {
    console.error("[/api/chat] Failed to save AiChatLog:", err);
  }
}

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const rawMessages = Array.isArray(body?.messages) ? body.messages : [];
  const sessionId = typeof body?.sessionId === "string" && body.sessionId.trim() ? body.sessionId.trim() : "anonymous";
  const reqLocale = body?.locale === "de" ? "de" : "en";

  const messages: ClientMessage[] = rawMessages
    .filter(
      (m: unknown): m is ClientMessage =>
        Boolean(m) &&
        typeof m === "object" &&
        ((m as ClientMessage).role === "user" || (m as ClientMessage).role === "assistant") &&
        typeof (m as ClientMessage).content === "string" &&
        (m as ClientMessage).content.trim().length > 0
    )
    .slice(-16);

  if (messages.length === 0) {
    return new Response(reqLocale === "de" ? "Bitte geben Sie eine Frage ein." : "Please enter a question to begin.", {
      status: 400,
    });
  }

  const lastUserMessage = [...messages].reverse().find((m) => m.role === "user")?.content ?? "";
  const [knowledgeBlocks, settings] = await Promise.all([getActiveAiKnowledge(), getPublicSiteSettings()]);

  const knowledgeText = knowledgeBlocks.map((k) => `### ${k.topic}\n${k.content}`).join("\n\n");
  const conversationPath = reqLocale === "de" ? "/de/strategic-conversation" : "/strategic-conversation";

  const systemPrompt = `You are the Executive Concierge for Dr. Zrinka K. Fidermuc Maler (Executive & Leadership Advisor, Author of "The Hat and the Hill", and Keynote Speaker based in Frankfurt am Main and Zagreb, working internationally).

TONE & VOICE:
- Calm, precise, intellectually rigorous, authoritative, and concise.
- Never use bubbly chatbot clichés, emojis, hollow hype, or comfort-coaching language.
- Reflect Dr. Zrinka's philosophy: clarity over motivation, precision over positivity, structural thinking over quick formulas.

STRICT RULES:
1. Answer strictly using the verified knowledge below. Never invent credentials, past clients, advisory fees, dates, or promises.
2. If asked about working together, advisory availability, fees, or keynote bookings, explain the structured entry point (Private Advisory Diagnostic or Six-Week Organizational Diagnostic) and invite them to Request a Strategic Conversation (${settings.bookingCalendarUrl || conversationPath}) or reach out via ${reqLocale === "de" ? "/de/contact" : "/contact"}.
3. Keep responses concise (typically 2–4 crisp paragraphs or short structured bullet points).
4. Active website locale is ${reqLocale === "de" ? "German (Deutsch): reply in refined, formal German ('Sie') unless the visitor explicitly writes in English." : "English: reply in the language of the visitor (English or German)."}

VERIFIED KNOWLEDGE BASE:
${knowledgeText}`;

  const model = selectLanguageModel();
  if (!model) {
    const fallbackReply =
      reqLocale === "de"
        ? `Der Executive Concierge benötigt einen konfigurierten OPENAI_API_KEY oder GEMINI_API_KEY. In der Zwischenzeit können Sie Private & Executive Advisory, Keynotes oder ein Strategisches Gespräch direkt über ${conversationPath} anfragen.`
        : "The Executive Concierge requires an OPENAI_API_KEY or GEMINI_API_KEY configured in the environment. In the meantime, you may explore Private & Executive Advisory, Keynote Speaking, or request a Strategic Conversation directly via /strategic-conversation.";
    await saveChatTurn(sessionId, lastUserMessage, fallbackReply, detectBookingIntent(lastUserMessage));
    return new Response(fallbackReply, {
      status: 200,
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  }

  const result = streamText({
    model,
    system: systemPrompt,
    messages,
    onFinish: async ({ text }) => {
      const leadFlag = detectBookingIntent(lastUserMessage) || /@/.test(lastUserMessage);
      await saveChatTurn(sessionId, lastUserMessage, text, leadFlag);
    },
  });

  return result.toTextStreamResponse();
}
