"use client";
import { useState } from "react";
import { Input, Textarea } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Heading, Eyebrow } from "@/components/ui/Heading";
import { LanguageToggle } from "./LanguageToggle";

export function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [language, setLanguage] = useState<"English" | "German">("English");
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!firstName.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !message.trim()) {
      setError("Please fill in your first name, a valid email address, and your message.");
      return;
    }
    setError("");
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ kind: "contact", firstName, lastName, email, phone, message, language }),
      });
      if (!res.ok) throw new Error();
      setStatus("ok");
    } catch {
      setStatus("error");
      setError("Your message could not be sent right now. Please try again or email assistenz@dr-zrinka.com.");
    }
  }

  if (status === "ok") {
    return (
      <div className="border border-line border-t-[3px] border-t-gold bg-white p-8 md:p-10">
        <Eyebrow tone="red" className="mb-3">Message Received</Eyebrow>
        <Heading level={3} className="mb-3">Thank you for reaching out.</Heading>
        <p className="text-muted">
          Requests are reviewed personally. If your inquiry aligns with current advisory or speaking capacities, Dr.
          Zrinka’s office will respond directly.
        </p>
        <Button
          type="button"
          variant="outline"
          size="sm"
          className="mt-6"
          onClick={() => {
            setFirstName("");
            setLastName("");
            setEmail("");
            setPhone("");
            setMessage("");
            setStatus("idle");
          }}
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="border border-line border-t-[3px] border-t-gold bg-white p-8 md:p-10">
      <Eyebrow tone="red" className="mb-3">Message</Eyebrow>
      <Heading level={3} className="mb-2">Send a message</Heading>
      <p className="mb-7 text-sm text-muted">Please share your request with clarity and context.</p>

      <div className="grid gap-4 sm:grid-cols-2">
        <Input label="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
        <Input label="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Input label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <Input label="Phone (incl. country & area code)" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </div>
      <LanguageToggle value={language} onChange={setLanguage} />
      <Textarea
        label="Message"
        placeholder="Share your request, context, or desired timeline…"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />
      {error && <p className="mb-4 text-xs text-red">{error}</p>}
      <Button type="submit" variant="secondary" disabled={status === "loading"} className="mt-2">
        {status === "loading" ? "Sending…" : "→ Request a conversation"}
      </Button>
    </form>
  );
}
