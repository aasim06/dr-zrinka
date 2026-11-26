const KLICKTIPP_BASE = "https://api.klicktipp.com";
const TIMEOUT_MS = 15000;

export type LanguageOption = "English" | "German" | string;

export function getLanguageTagId(language?: LanguageOption): number | null {
  const value = (language ?? "").trim();
  if (value === "English") return 14949948; // EN_recipient_language
  if (value === "German") return 14949929; // DE_Sprache_Empfänger
  return null;
}

export async function klicktippSignin(params: {
  apiKey?: string;
  email: string;
  fields?: Record<string, string>;
}): Promise<{ ok: boolean; skipped?: boolean; status?: number; body?: string }> {
  const apiKey = params.apiKey?.trim();
  if (!apiKey) {
    console.warn("[KlickTipp] Missing API key for /subscriber/signin – skipped:", params.email);
    return { ok: true, skipped: true };
  }

  const payload: { apikey: string; email: string; fields?: Record<string, string> } = {
    apikey: apiKey,
    email: params.email.trim(),
  };
  if (params.fields && Object.keys(params.fields).length > 0) {
    payload.fields = params.fields;
  }

  const res = await fetch(`${KLICKTIPP_BASE}/subscriber/signin`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    signal: AbortSignal.timeout(TIMEOUT_MS),
  });

  const body = await res.text().catch(() => "");
  if (!res.ok) {
    console.error(`[KlickTipp] /subscriber/signin failed (${res.status}):`, body);
    return { ok: false, status: res.status, body };
  }

  return { ok: true, status: res.status, body };
}

async function getManagementCookies(): Promise<string | null> {
  const username = process.env.KLICKTIPP_USERNAME?.trim();
  const password = process.env.KLICKTIPP_PASSWORD;
  if (!username || !password) {
    console.warn("[KlickTipp] KLICKTIPP_USERNAME or KLICKTIPP_PASSWORD missing – tag skipped");
    return null;
  }

  const res = await fetch(`${KLICKTIPP_BASE}/account/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
    signal: AbortSignal.timeout(TIMEOUT_MS),
  });

  if (!res.ok) {
    const errText = await res.text().catch(() => "");
    console.error(`[KlickTipp] /account/login failed (${res.status}):`, errText);
    return null;
  }

  // Extract Set-Cookie pairs (matching PHP wp_remote_retrieve_cookies), falling back to JSON session fields
  const setCookies = typeof res.headers.getSetCookie === "function" ? res.headers.getSetCookie() : [];
  const cookiePairs = setCookies
    .map((c) => c.split(";")[0]?.trim())
    .filter((pair): pair is string => Boolean(pair));

  if (cookiePairs.length > 0) {
    return cookiePairs.join("; ");
  }

  const json = (await res.json().catch(() => null)) as
    | { session_name?: string; sessid?: string; sessionid?: string }
    | null;
  const sid = json?.sessid ?? json?.sessionid;
  if (json?.session_name && sid) {
    return `${json.session_name}=${sid}`;
  }

  console.warn("[KlickTipp] No session cookies returned from /account/login");
  return null;
}

export async function assignLanguageTag(email: string, language?: LanguageOption): Promise<void> {
  const tagId = getLanguageTagId(language);
  const cleanEmail = email.trim();
  if (!cleanEmail || !tagId) return;

  try {
    const cookieHeader = await getManagementCookies();
    if (!cookieHeader) return;

    const res = await fetch(`${KLICKTIPP_BASE}/subscriber/tag`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Cookie: cookieHeader,
      },
      body: JSON.stringify({ email: cleanEmail, tagids: [tagId] }),
      signal: AbortSignal.timeout(TIMEOUT_MS),
    });

    const body = await res.text().catch(() => "");
    if (!res.ok) {
      console.warn(`[KlickTipp] /subscriber/tag (${tagId}) returned ${res.status}:`, body);
    }
  } catch (err) {
    console.error("[KlickTipp] assignLanguageTag error:", err);
  }
}

export function getEventApiKey(eventSlug?: string): string | undefined {
  const slug = (eventSlug ?? "").trim();
  const map: Record<string, string | undefined> = {
    "zagreb-8-december-2026": process.env.KLICKTIPP_APIKEY_EVENT_ZAGREB_DEC_2026,
    "zagreb-7-october-2026": process.env.KLICKTIPP_APIKEY_EVENT_ZAGREB_OCT_2026,
  };
  return map[slug]?.trim() || process.env.KLICKTIPP_APIKEY_EVENT_DEFAULT?.trim() || undefined;
}
