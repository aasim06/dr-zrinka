"use client";
import { useEffect, useState } from "react";
import { Input, Select, Textarea } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Heading, Eyebrow } from "@/components/ui/Heading";
import { LanguageToggle } from "./LanguageToggle";
import { INQUIRY_TYPES } from "@/lib/constants";
import { useLocale } from "@/components/providers/LocaleProvider";
import { getUiCopy } from "@/data/translations";

export function ContactForm() {
  const { locale } = useLocale();
  const copy = getUiCopy(locale);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [inquiryType, setInquiryType] = useState<(typeof INQUIRY_TYPES)[number]>("General");
  const [message, setMessage] = useState("");
  const [language, setLanguage] = useState<"English" | "German">(locale === "de" ? "German" : "English");
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [error, setError] = useState("");

  useEffect(() => {
    setLanguage(locale === "de" ? "German" : "English");
  }, [locale]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!firstName.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !message.trim()) {
      setError(
        locale === "de"
          ? "Bitte geben Sie Ihren Vornamen, eine gültige E-Mail-Adresse und Ihre Nachricht an."
          : "Please fill in your first name, a valid email address, and your message."
      );
      return;
    }
    setError("");
    setStatus("loading");
    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          kind: "contact",
          firstName,
          lastName,
          email,
          phone,
          inquiryType,
          message,
          language,
        }),
      });
      if (!res.ok) throw new Error();
      setStatus("ok");
    } catch {
      setStatus("error");
      setError(
        locale === "de"
          ? "Ihre Nachricht konnte derzeit nicht gesendet werden. Bitte versuchen Sie es erneut oder schreiben Sie an assistenz@dr-zrinka.com."
          : "Your message could not be sent right now. Please try again or email assistenz@dr-zrinka.com."
      );
    }
  }

  if (status === "ok") {
    return (
      <div className="border border-line border-t-[3px] border-t-gold bg-white p-8 md:p-10">
        <Eyebrow tone="red" className="mb-3">{copy.forms.contactDoneEyebrow}</Eyebrow>
        <Heading level={3} className="mb-3">{copy.forms.contactDoneTitle}</Heading>
        <p className="text-muted">{copy.forms.contactDoneBody}</p>
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
          {copy.forms.sendAnother}
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="border border-line border-t-[3px] border-t-gold bg-white p-8 md:p-10">
      <Eyebrow tone="red" className="mb-3">{copy.forms.contactEyebrow}</Eyebrow>
      <Heading level={3} className="mb-2">{copy.forms.contactTitle}</Heading>
      <p className="mb-7 text-sm text-muted">{copy.forms.contactLead}</p>

      <div className="grid gap-4 sm:grid-cols-2">
        <Input label={copy.forms.firstName} value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
        <Input label={copy.forms.lastName} value={lastName} onChange={(e) => setLastName(e.target.value)} />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Input label={copy.forms.email} type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <Input label={copy.forms.phone} type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </div>
      <Select
        label={copy.forms.topic}
        value={inquiryType}
        onChange={(e) => setInquiryType(e.target.value as (typeof INQUIRY_TYPES)[number])}
      >
        {INQUIRY_TYPES.map((t) => (
          <option key={t} value={t}>
            {t}
          </option>
        ))}
      </Select>
      <LanguageToggle value={language} onChange={setLanguage} label={copy.forms.preferredLanguage} />
      <Textarea
        label={copy.forms.message}
        placeholder={copy.forms.messagePlaceholder}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />
      {error && <p className="mb-4 text-xs text-red">{error}</p>}
      <Button type="submit" variant="secondary" disabled={status === "loading"} className="mt-2">
        {status === "loading" ? copy.forms.sending : copy.forms.contactSubmit}
      </Button>
    </form>
  );
}
