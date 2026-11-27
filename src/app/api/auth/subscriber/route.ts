import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { getFirestoreDb } from "@/lib/firebase";
import { SubscriberRepo } from "@/models/Subscriber";
import { assignLanguageTag, klicktippSignin } from "@/lib/klicktipp";
import {
  READER_COOKIE_NAME,
  signReaderToken,
  verifyFirebaseIdToken,
  verifyReaderToken,
} from "@/lib/firebase-auth-server";

export async function GET() {
  const token = cookies().get(READER_COOKIE_NAME)?.value;
  const session = await verifyReaderToken(token);
  if (!session) {
    return NextResponse.json({ authenticated: false }, { status: 200 });
  }
  return NextResponse.json({
    authenticated: true,
    email: session.email,
    name: session.name,
  });
}

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const idToken = typeof body?.idToken === "string" ? body.idToken : "";
  const rawLang = typeof body?.language === "string" ? body.language.trim() : "";
  const cleanLanguage = rawLang === "German" ? "German" : "English";
  const subscribeToKlicktipp = Boolean(body?.subscribeToKlicktipp);

  const verified = await verifyFirebaseIdToken(idToken);
  if (!verified.ok) {
    return NextResponse.json({ error: verified.error }, { status: verified.status });
  }

  let savedToFirestore = false;
  const db = getFirestoreDb();
  if (db) {
    try {
      await SubscriberRepo.upsert(
        {
          uid: verified.user.uid,
          email: verified.user.email,
          name: verified.user.name,
          picture: verified.user.picture,
          language: cleanLanguage,
          subscribedToJournal: subscribeToKlicktipp,
        },
        db
      );
      savedToFirestore = true;
    } catch (err) {
      console.error("[/api/auth/subscriber] Firestore upsert failed:", err);
    }
  }

  let klicktippSubscribed = false;
  if (subscribeToKlicktipp) {
    const journalKey = process.env.KLICKTIPP_APIKEY_JOURNAL?.trim();
    if (journalKey) {
      try {
        const result = await klicktippSignin({
          apiKey: journalKey,
          email: verified.user.email,
        });
        if (result.ok) {
          await assignLanguageTag(verified.user.email, cleanLanguage);
          klicktippSubscribed = !result.skipped;
        }
      } catch (err) {
        console.error("[/api/auth/subscriber] KlickTipp sync failed:", err);
      }
    }
  }

  const res = NextResponse.json({
    ok: true,
    email: verified.user.email,
    name: verified.user.name,
    picture: verified.user.picture,
    language: cleanLanguage,
    savedToFirestore,
    klicktippSubscribed,
  });

  try {
    const readerToken = await signReaderToken({
      uid: verified.user.uid,
      email: verified.user.email,
      name: verified.user.name,
    });
    res.cookies.set(READER_COOKIE_NAME, readerToken, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24 * 30,
    });
  } catch {
    // Graceful when signing secret isn't present in local dev
  }

  return res;
}

export async function DELETE() {
  const res = NextResponse.json({ ok: true });
  res.cookies.set(READER_COOKIE_NAME, "", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 0,
  });
  return res;
}
