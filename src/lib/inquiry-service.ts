import { getFirestoreDb } from "@/lib/firebase";
import { InquiryRepo, INQUIRY_TYPES } from "@/models/Inquiry";
import type { InquiryType } from "@/lib/constants";
import { assignLanguageTag, klicktippSignin } from "@/lib/klicktipp";

const str = (v: unknown) => (typeof v === "string" ? v.trim() : "");

function normalizeInquiryType(raw: unknown, kind: string): InquiryType {
  const val = str(raw);
  if ((INQUIRY_TYPES as readonly string[]).includes(val)) {
    return val as InquiryType;
  }
  return kind === "strategic-conversation" ? "Private Advisory" : "General";
}

export async function processPublicInquiry(body: Record<string, unknown>) {
  const email = str(body.email);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { status: 400, error: "Please enter a valid email address." };
  }

  const kind = body.kind === "strategic-conversation" ? "strategic-conversation" : "contact";
  const language = str(body.language);
  const organization = str(body.organization);
  const role = str(body.role);
  const phone = str(body.phone);
  const inquiryType = normalizeInquiryType(body.inquiryType, kind);

  let fullName = str(body.name);
  let firstName = str(body.firstName);
  let lastName = str(body.lastName);
  if (!fullName && (firstName || lastName)) {
    fullName = `${firstName} ${lastName}`.trim();
  } else if (fullName && !firstName) {
    const parts = fullName.split(/\s+/);
    firstName = parts[0] || fullName;
    lastName = parts.slice(1).join(" ");
  }

  const situation = str(body.situation);
  const desiredChange = str(body.desiredChange);
  const directMessage = str(body.message);

  const combinedMessage =
    kind === "strategic-conversation"
      ? [
          role ? `Role: ${role}` : "",
          situation ? `Situation: ${situation}` : "",
          desiredChange ? `Desired Outcome: ${desiredChange}` : "",
          directMessage,
        ]
          .filter(Boolean)
          .join("\n\n")
      : directMessage || situation;

  if (!fullName || !combinedMessage) {
    return { status: 400, error: "Name and message/situation are required." };
  }

  // 1) Persist lead to Firestore inquiries collection when Firebase is configured
  let savedId: string | undefined;
  try {
    const db = getFirestoreDb();
    if (db) {
      const doc = await InquiryRepo.create(
        {
          name: fullName,
          email,
          organization,
          inquiryType,
          message: combinedMessage,
          status: "New",
        },
        db
      );
      savedId = doc._id;
    }
  } catch (dbErr) {
    console.error("[Inquiry] Firestore save error:", dbErr);
  }

  // 2) Send to KlickTipp (preserving existing WordPress PHP integration verbatim)
  try {
    if (kind === "strategic-conversation") {
      const result = await klicktippSignin({
        apiKey: process.env.KLICKTIPP_APIKEY_STRATEGIC,
        email,
        fields: {
          fieldFirstName: fullName,
          field1000682: organization,
          field1000681: role,
          fieldPhone: phone,
          field1000679: situation || combinedMessage,
          field1000680: desiredChange,
          field1000683: language,
        },
      });
      if (!result.ok) {
        return { status: 502, error: "Unable to submit request right now." };
      }
      await assignLanguageTag(email, language);
      return { status: 200, ok: true, id: savedId, skipped: result.skipped };
    }

    const result = await klicktippSignin({
      apiKey: process.env.KLICKTIPP_APIKEY_CONTACT,
      email,
      fields: {
        fieldFirstName: firstName || fullName,
        fieldLastName: lastName,
        fieldPhone: phone,
        field167961: combinedMessage,
        field1000683: language,
      },
    });
    if (!result.ok) {
      return { status: 502, error: "Unable to send inquiry right now." };
    }
    await assignLanguageTag(email, language);
    return { status: 200, ok: true, id: savedId, skipped: result.skipped };
  } catch (ktErr) {
    console.error("[Inquiry] KlickTipp error:", ktErr);
    if (savedId) {
      return { status: 200, ok: true, id: savedId, klicktippWarning: true };
    }
    return { status: 502, error: "Unable to send inquiry right now." };
  }
}
