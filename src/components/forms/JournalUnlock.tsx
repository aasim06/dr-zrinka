"use client";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Heading, Eyebrow } from "@/components/ui/Heading";
import { NewsletterForm } from "@/components/sections/NewsletterForm";
import { GoogleSignInButton } from "@/components/forms/GoogleSignInButton";
import { LanguageToggle } from "@/components/forms/LanguageToggle";
import { useLocale } from "@/components/providers/LocaleProvider";
import { getUiCopy } from "@/data/translations";
import { localizePath } from "@/lib/i18n";
import { signInWithGoogleForIdToken, signOutFirebaseClient } from "@/lib/firebase-client";
import { sampleChapterParagraphs } from "@/data/book";

export function JournalUnlock() {
  const { locale } = useLocale();
  const copy = getUiCopy(locale);

  const [password, setPassword] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [readerEmail, setReaderEmail] = useState<string | null>(null);
  const [language, setLanguage] = useState<"English" | "German">(locale === "de" ? "German" : "English");
  const [consentKlickTipp, setConsentKlickTipp] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [error, setError] = useState("");
  const [googleError, setGoogleError] = useState("");

  useEffect(() => {
    setLanguage(locale === "de" ? "German" : "English");
  }, [locale]);

  useEffect(() => {
    let active = true;
    fetch("/api/auth/subscriber")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (!active || !data?.authenticated) return;
        setReaderEmail(data.email || null);
        setUnlocked(true);
      })
      .catch(() => {});
    return () => {
      active = false;
    };
  }, []);

  function handleUnlock(e: React.FormEvent) {
    e.preventDefault();
    if (password.trim().toLowerCase() === "journal2026") {
      setError("");
      setUnlocked(true);
    } else {
      setError(copy.journalUnlock.wrongPassword);
    }
  }

  async function handleGoogleUnlock() {
    setGoogleError("");
    setGoogleLoading(true);
    try {
      const { idToken } = await signInWithGoogleForIdToken();
      const res = await fetch("/api/auth/subscriber", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          idToken,
          language,
          subscribeToKlicktipp: consentKlickTipp,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data.error || copy.newsletter.error);
      }
      setReaderEmail(data.email || null);
      setUnlocked(true);
    } catch (err) {
      setGoogleError(err instanceof Error ? err.message : copy.newsletter.error);
    } finally {
      setGoogleLoading(false);
    }
  }

  async function handleReaderLogout() {
    await fetch("/api/auth/subscriber", { method: "DELETE" }).catch(() => {});
    await signOutFirebaseClient().catch(() => {});
    setReaderEmail(null);
    setUnlocked(false);
  }

  if (unlocked) {
    return (
      <article className="space-y-6 border-t border-ink pt-10">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Eyebrow tone="red">The Journal · Subscriber Edition</Eyebrow>
          {readerEmail && (
            <div className="flex items-center gap-3 text-xs text-muted">
              <span>
                {locale === "de" ? "Angemeldet als" : "Signed in as"}{" "}
                <strong className="font-medium text-ink">{readerEmail}</strong>
              </span>
              <button
                type="button"
                onClick={handleReaderLogout}
                className="border-b border-line text-ink hover:border-red hover:text-red"
              >
                {locale === "de" ? "Abmelden" : "Sign out"}
              </button>
            </div>
          )}
        </div>
        <Heading level={2} className="!text-[clamp(32px,4vw,48px)]">
          Before the Climb, in the Valley of Tears
        </Heading>
        <p className="font-serif text-2xl italic text-red">
          “A woman hit rock bottom… and politely apologized to the rock.”
        </p>
        <div className="space-y-5 text-[16.5px] leading-[1.85] text-ink/90">
          {sampleChapterParagraphs.slice(1).map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>
        <div className="border-t border-line pt-8">
          <Button href={localizePath("/book", locale)} variant="secondary">
            {locale === "de" ? "„The Hat & The Hill“ entdecken" : "Explore The Hat & The Hill"}
          </Button>
        </div>
      </article>
    );
  }

  return (
    <div className="grid gap-12 md:grid-cols-2">
      <div className="border border-line border-t-[3px] border-t-gold bg-white p-8">
        <Eyebrow tone="red" className="mb-3">{copy.journalUnlock.memberEyebrow}</Eyebrow>
        <Heading level={3} className="mb-3">{copy.journalUnlock.memberTitle}</Heading>
        <p className="mb-5 text-sm text-muted">{copy.journalUnlock.googlePrompt}</p>

        <div className="border border-line bg-paper/60 p-4">
          <LanguageToggle
            value={language}
            onChange={setLanguage}
            label={copy.forms.preferredLanguage}
            compact
          />
          <label className="mb-4 flex cursor-pointer items-start gap-2.5 text-xs leading-relaxed text-muted">
            <input
              type="checkbox"
              checked={consentKlickTipp}
              onChange={(e) => setConsentKlickTipp(e.target.checked)}
              className="mt-0.5 accent-red"
            />
            <span>{copy.journalUnlock.consentLabel}</span>
          </label>
          <GoogleSignInButton
            label={copy.journalUnlock.googleBtn}
            loading={googleLoading}
            onClick={handleGoogleUnlock}
          />
          {googleError && <p className="mt-3 text-xs text-red">{googleError}</p>}
        </div>

        <form onSubmit={handleUnlock} className="mt-7 border-t border-line pt-6">
          <p className="mb-4 text-xs tracking-[0.1em] text-muted uppercase">{copy.journalUnlock.orPassword}</p>
          <Input
            type="password"
            label={copy.journalUnlock.passwordLabel}
            placeholder={copy.journalUnlock.passwordPlaceholder}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={error}
            required
          />
          <Button type="submit" variant="secondary" className="mt-2">
            {copy.journalUnlock.unlockBtn}
          </Button>
        </form>
      </div>

      <div className="border border-line border-t-[3px] border-t-ink bg-white p-8">
        <Eyebrow tone="red" className="mb-3">{copy.journalUnlock.newReadersEyebrow}</Eyebrow>
        <Heading level={3} className="mb-3">{copy.journalUnlock.newReadersTitle}</Heading>
        <p className="mb-6 text-sm text-muted">{copy.journalUnlock.newReadersBody}</p>
        <NewsletterForm />
      </div>
    </div>
  );
}
