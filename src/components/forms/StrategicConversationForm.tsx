"use client";
import { useState } from "react";
import { Input, Textarea } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Heading, Eyebrow } from "@/components/ui/Heading";
import { LanguageToggle } from "./LanguageToggle";

export function StrategicConversationForm() {
  const [name, setName] = useState("");
  const [organization, setOrganization] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [situation, setSituation] = useState("");
  const [desiredChange, setDesiredChange] = useState("");
  const [language, setLanguage] = useState<"English" | "German">("English");
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !situation.trim()) {
      setError("Please provide your name, a valid email address, and the situation you are dealing with.");
      return;
    }
    setError("");
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          kind: "strategic-conversation",
          name,
          organization,
          role,
          email,
          phone,
          situation,
          desiredChange,
          language,
        }),
      });
      if (!res.ok) throw new Error();
      setStatus("ok");
    } catch {
      setStatus("error");
      setError("Submission failed. Please try again or reach out directly to assistenz@dr-zrinka.com.");
    }
  }

  if (status === "ok") {
    return (
      <div className="border border-line border-t-[3px] border-t-gold bg-white p-8 md:p-10">
        <Eyebrow tone="red" className="mb-3">Inquiry Received</Eyebrow>
        <Heading level={3} className="mb-3">Your request is under personal review.</Heading>
        <p className="text-muted">
          Thank you, {name}. Conversations are selective and reviewed personally by Dr. Zrinka K. Fidermuc Maler. We
          will follow up regarding next steps if there is mutual fit.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="border border-line border-t-[3px] border-t-gold bg-white p-8 md:p-10">
      <Eyebrow tone="red" className="mb-3">Strategic Conversation</Eyebrow>
      <Heading level={3} className="mb-2">Application &amp; Context</Heading>
      <p className="mb-7 text-sm text-muted">
        Requests are reviewed personally. Conversations are selective and based on current relevance.
      </p>

      <Input label="Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <div className="grid gap-4 sm:grid-cols-2">
        <Input label="Organization" value={organization} onChange={(e) => setOrganization(e.target.value)} />
        <Input label="Role" value={role} onChange={(e) => setRole(e.target.value)} />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Input label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <Input label="Phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </div>
      <Textarea
        label="What is the situation you are currently dealing with?"
        value={situation}
        onChange={(e) => setSituation(e.target.value)}
        required
      />
      <Textarea
        label="What would need to change for this conversation to be valuable for you?"
        value={desiredChange}
        onChange={(e) => setDesiredChange(e.target.value)}
      />
      <LanguageToggle value={language} onChange={setLanguage} />
      {error && <p className="mb-4 text-xs text-red">{error}</p>}
      <Button type="submit" variant="secondary" disabled={status === "loading"} className="mt-2">
        {status === "loading" ? "Submitting…" : "→ Submit Request"}
      </Button>
    </form>
  );
}
