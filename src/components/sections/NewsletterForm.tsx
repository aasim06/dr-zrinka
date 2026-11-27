"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { LanguageToggle } from "@/components/forms/LanguageToggle";
import { GoogleSignInButton } from "@/components/forms/GoogleSignInButton";
import { useLocale } from "@/components/providers/LocaleProvider";
import { getUiCopy } from "@/data/translations";
import { localizePath } from "@/lib/i18n";
import { isFirebaseClientConfigured, signInWithGoogleForIdToken } from "@/lib/firebase-client";

export function NewsletterForm({ onDone, compact }: { onDone?: () => void; compact?: boolean }) {
  const { locale } = useLocale();
  const copy = getUiCopy(locale);

  const [email, setEmail] = useState("");
  const [language, setLanguage] = useState<"English" | "German">(locale === "de" ? "German" : "English");
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "google_ok" | "error">("idle");
  const [googleLoading, setGoogleLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLanguage(locale === "de" ? "German" : "English");
  }, [locale]);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const cleanEmail = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
      setError(copy.newsletter.invalidEmail);
      return;
    }
    setError("");
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: cleanEmail, language }),
      });
      if (!res.ok) throw new Error();
      setStatus("ok");
      if (onDone) setTimeout(onDone, 3500);
    } catch {
      setStatus("error");
      setError(copy.newsletter.error);
    }
  }

  async function handleGoogleSubscribe() {
    setError("");
    setGoogleLoading(true);
    try {
      const { idToken } = await signInWithGoogleForIdToken();
      const res = await fetch("/api/auth/subscriber", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          idToken,
          language,
          subscribeToKlicktipp: true,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data.error || copy.newsletter.error);
      }
      setStatus("google_ok");
      if (onDone) setTimeout(onDone, 3500);
    } catch (err) {
      setError(err instanceof Error ? err.message : copy.newsletter.error);
    } finally {
      setGoogleLoading(false);
    }
  }

  if (status === "ok") {
    return <p className="text-sm">{copy.newsletter.success}</p>;
  }

  if (status === "google_ok") {
    return <p className="text-sm">{copy.newsletter.googleSuccess}</p>;
  }

  return (
    <form onSubmit={submit} noValidate>
      <Input
        type="email"
        label={copy.newsletter.emailPlaceholder}
        hideLabel
        placeholder={copy.newsletter.emailPlaceholder}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={error}
        required
      />
      <LanguageToggle
        value={language}
        onChange={setLanguage}
        label={copy.newsletter.languageLabel}
        compact={compact}
      />
      <Button type="submit" variant="secondary" className="w-full" disabled={status === "loading" || googleLoading}>
        {status === "loading" ? copy.newsletter.sendingBtn : copy.newsletter.subscribeBtn}
      </Button>

      {isFirebaseClientConfigured() && (
        <div className="mt-3">
          <p className="mb-2 text-center text-[10px] tracking-[0.12em] text-muted uppercase">
            {copy.newsletter.googleOr}
          </p>
          <GoogleSignInButton
            label={copy.newsletter.googleBtn}
            loading={googleLoading}
            disabled={status === "loading"}
            onClick={handleGoogleSubscribe}
            compact
          />
        </div>
      )}

      <p className="mt-3 text-[11px] leading-snug text-muted">
        {copy.newsletter.privacyPrefix}{" "}
        <Link href={localizePath("/datenschutz", locale)} className="underline hover:text-red">
          {copy.newsletter.privacyLink}
        </Link>
        .
      </p>
    </form>
  );
}
