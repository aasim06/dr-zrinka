"use client";
import { useEffect, useState } from "react";
import { Input, Select, Textarea } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Heading, Eyebrow } from "@/components/ui/Heading";
import { LanguageToggle } from "./LanguageToggle";
import { INQUIRY_TYPES } from "@/lib/constants";
import { useLocale } from "@/components/providers/LocaleProvider";
import { getUiCopy } from "@/data/translations";

export function StrategicConversationForm() {
  const { locale } = useLocale();
  const copy = getUiCopy(locale);

  const [name, setName] = useState("");
  const [organization, setOrganization] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [inquiryType, setInquiryType] = useState<(typeof INQUIRY_TYPES)[number]>("Private Advisory");
  const [situation, setSituation] = useState("");
  const [desiredChange, setDesiredChange] = useState("");
  const [language, setLanguage] = useState<"English" | "German">(locale === "de" ? "German" : "English");
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [error, setError] = useState("");

  useEffect(() => {
    setLanguage(locale === "de" ? "German" : "English");
  }, [locale]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !situation.trim()) {
      setError(
        locale === "de"
          ? "Bitte geben Sie Ihren Namen, eine gültige E-Mail-Adresse und Ihre aktuelle Situation an."
          : "Please provide your name, a valid email address, and the situation you are dealing with."
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
          kind: "strategic-conversation",
          name,
          organization,
          role,
          email,
          phone,
          inquiryType,
          situation,
          desiredChange,
          language,
        }),
      });
      if (!res.ok) throw new Error();
      setStatus("ok");
    } catch {
      setStatus("error");
      setError(
        locale === "de"
          ? "Übermittlung fehlgeschlagen. Bitte versuchen Sie es erneut oder schreiben Sie an assistenz@dr-zrinka.com."
          : "Submission failed. Please try again or reach out directly to assistenz@dr-zrinka.com."
      );
    }
  }

  if (status === "ok") {
    return (
      <div className="border border-line border-t-[3px] border-t-gold bg-white p-8 md:p-10">
        <Eyebrow tone="red" className="mb-3">{copy.forms.scDoneEyebrow}</Eyebrow>
        <Heading level={3} className="mb-3">{copy.forms.scDoneTitle}</Heading>
        <p className="text-muted">
          {locale === "de" ? `Vielen Dank, ${name}. ` : `Thank you, ${name}. `}
          {copy.forms.scDoneBody}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="border border-line border-t-[3px] border-t-gold bg-white p-8 md:p-10">
      <Eyebrow tone="red" className="mb-3">{copy.forms.scEyebrow}</Eyebrow>
      <Heading level={3} className="mb-2">{copy.forms.scTitle}</Heading>
      <p className="mb-7 text-sm text-muted">{copy.forms.scLead}</p>

      <Input label={copy.forms.name} value={name} onChange={(e) => setName(e.target.value)} required />
      <div className="grid gap-4 sm:grid-cols-2">
        <Input label={copy.forms.organization} value={organization} onChange={(e) => setOrganization(e.target.value)} />
        <Input label={copy.forms.role} value={role} onChange={(e) => setRole(e.target.value)} />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Input label={copy.forms.email} type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <Input label={copy.forms.phone} type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </div>
      <Select
        label={copy.forms.engagementArea}
        value={inquiryType}
        onChange={(e) => setInquiryType(e.target.value as (typeof INQUIRY_TYPES)[number])}
      >
        {INQUIRY_TYPES.map((t) => (
          <option key={t} value={t}>
            {t}
          </option>
        ))}
      </Select>
      <Textarea
        label={copy.forms.situation}
        value={situation}
        onChange={(e) => setSituation(e.target.value)}
        required
      />
      <Textarea
        label={copy.forms.desiredChange}
        value={desiredChange}
        onChange={(e) => setDesiredChange(e.target.value)}
      />
      <LanguageToggle value={language} onChange={setLanguage} label={copy.forms.preferredLanguage} />
      {error && <p className="mb-4 text-xs text-red">{error}</p>}
      <Button type="submit" variant="secondary" disabled={status === "loading"} className="mt-2">
        {status === "loading" ? copy.forms.submitting : copy.forms.scSubmit}
      </Button>
    </form>
  );
}
