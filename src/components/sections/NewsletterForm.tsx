"use client";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { LanguageToggle } from "@/components/forms/LanguageToggle";

export function NewsletterForm({ onDone, compact }: { onDone?: () => void; compact?: boolean }) {
  const [email, setEmail] = useState("");
  const [language, setLanguage] = useState<"English" | "German">("English");
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [error, setError] = useState("");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const cleanEmail = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
      setError("Please enter a valid email address.");
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
      setError("Something went wrong. Please try again.");
    }
  }

  if (status === "ok") {
    return <p className="text-sm">Thank you. Please check your inbox and confirm your subscription.</p>;
  }

  return (
    <form onSubmit={submit} noValidate>
      <Input
        type="email"
        label="Email address"
        hideLabel
        placeholder="Your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={error}
        required
      />
      <LanguageToggle value={language} onChange={setLanguage} label="Language" compact={compact} />
      <Button type="submit" variant="secondary" className="w-full" disabled={status === "loading"}>
        {status === "loading" ? "Sending…" : "Subscribe"}
      </Button>
      <p className="mt-3 text-[11px] leading-snug text-muted">
        By subscribing you agree to receive The Journal by email. You will receive a confirmation email (double
        opt-in). You can unsubscribe at any time. See our{" "}
        <Link href="/datenschutz" className="underline hover:text-red">
          Privacy Policy
        </Link>
        .
      </p>
    </form>
  );
}
