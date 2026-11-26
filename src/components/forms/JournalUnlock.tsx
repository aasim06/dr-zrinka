"use client";
import { useState } from "react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Heading, Eyebrow } from "@/components/ui/Heading";
import { NewsletterForm } from "@/components/sections/NewsletterForm";
import { sampleChapterParagraphs } from "@/data/book";

export function JournalUnlock() {
  const [password, setPassword] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState("");

  function handleUnlock(e: React.FormEvent) {
    e.preventDefault();
    if (password.trim().toLowerCase() === "journal2026") {
      setError("");
      setUnlocked(true);
    } else {
      setError("Incorrect subscriber password. Subscribe below to receive access (current code: journal2026).");
    }
  }

  if (unlocked) {
    return (
      <article className="space-y-6 border-t border-ink pt-10">
        <Eyebrow tone="red">The Journal · Subscriber Edition</Eyebrow>
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
          <Button href="/book" variant="secondary">
            Explore The Hat &amp; The Hill
          </Button>
        </div>
      </article>
    );
  }

  return (
    <div className="grid gap-12 md:grid-cols-2">
      <form onSubmit={handleUnlock} className="border border-line border-t-[3px] border-t-gold bg-white p-8">
        <Eyebrow tone="red" className="mb-3">Subscriber Access</Eyebrow>
        <Heading level={3} className="mb-3">Enter Journal Password</Heading>
        <p className="mb-6 text-sm text-muted">
          Subscribers to The Journal receive the access code upon confirming their email.
        </p>
        <Input
          type="password"
          label="Access password"
          placeholder="Enter password (e.g. journal2026)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={error}
          required
        />
        <Button type="submit" variant="secondary" className="mt-2">
          → Unlock Journal Entry
        </Button>
      </form>

      <div className="border border-line border-t-[3px] border-t-ink bg-white p-8">
        <Eyebrow tone="red" className="mb-3">New Readers</Eyebrow>
        <Heading level={3} className="mb-3">Subscribe to The Journal</Heading>
        <p className="mb-6 text-sm text-muted">
          Essays and field notes on strategic narrative, sovereign leadership, and the art of holding ground in
          high-stakes positions.
        </p>
        <NewsletterForm />
      </div>
    </div>
  );
}
