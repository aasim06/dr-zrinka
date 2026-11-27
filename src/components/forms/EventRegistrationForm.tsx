"use client";
import { useEffect, useState } from "react";
import { Input, Select } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Heading, Eyebrow } from "@/components/ui/Heading";
import { LanguageToggle } from "./LanguageToggle";
import { useLocale } from "@/components/providers/LocaleProvider";
import { localizePath } from "@/lib/i18n";

export function EventRegistrationForm({
  eventSlug,
  eventTitle,
  soldOut,
  showGuestCount,
}: {
  eventSlug: string;
  eventTitle: string;
  soldOut?: boolean;
  showGuestCount?: boolean;
}) {
  const { locale } = useLocale();
  const isDe = locale === "de";

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [guests, setGuests] = useState("1");
  const [language, setLanguage] = useState<"English" | "German">(isDe ? "German" : "English");
  const [confirmAttendance, setConfirmAttendance] = useState(false);
  const [consentData, setConsentData] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [confirmationCode, setConfirmationCode] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    setLanguage(locale === "de" ? "German" : "English");
  }, [locale]);

  if (soldOut) {
    return (
      <div className="border border-line border-t-[3px] border-t-ink bg-white p-8 md:p-10">
        <Eyebrow tone="muted" className="mb-3">{isDe ? "Anmeldung geschlossen" : "Registration Closed"}</Eyebrow>
        <Heading level={3} className="mb-3">{isDe ? "Diese Veranstaltung ist ausgebucht." : "This event is sold out."}</Heading>
        <p className="mb-6 text-muted">
          {isDe
            ? `Alle Plätze für ${eventTitle} sind vergeben. Abonnieren Sie The Journal oder entdecken Sie kommende Termine.`
            : `Places for ${eventTitle} have been filled. Subscribe to The Journal or explore upcoming gatherings for future dates.`}
        </p>
        <Button href={localizePath("/events", locale)} variant="outline">
          {isDe ? "Kommende Termine ansehen" : "View Upcoming Events"}
        </Button>
      </div>
    );
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!firstName.trim() || !lastName.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError(
        isDe
          ? "Bitte geben Sie Vorname, Nachname und eine gültige E-Mail-Adresse an."
          : "Please enter your first name, last name, and a valid email address."
      );
      return;
    }
    if (!confirmAttendance || !consentData) {
      setError(
        isDe
          ? "Bitte bestätigen Sie beide Einwilligungsfelder für Ihre Anmeldung."
          : "Please check both confirmation boxes to complete your registration."
      );
      return;
    }
    setError("");
    setStatus("loading");
    try {
      const res = await fetch("/api/events/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          eventSlug,
          firstName,
          lastName,
          email,
          phone,
          guests,
          language,
          confirmAttendance,
          consentData,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed");
      setConfirmationCode(data.confirmationCode || "CONFIRMED");
      setStatus("ok");
    } catch {
      setStatus("error");
      setError(
        isDe
          ? "Die Anmeldung konnte nicht abgeschlossen werden. Bitte versuchen Sie es erneut."
          : "Registration could not be completed. Please try again."
      );
    }
  }

  if (status === "ok") {
    return (
      <div className="border border-line border-t-[3px] border-t-gold bg-white p-8 md:p-10">
        <Eyebrow tone="red" className="mb-3">{isDe ? "Bestätigt" : "Confirmed"}</Eyebrow>
        <Heading level={3} className="mb-3">{isDe ? "Ihr Platz ist reserviert." : "Your seat is reserved."}</Heading>
        <p className="text-muted">
          {isDe ? (
            <>
              Vielen Dank, {firstName} {lastName}. Ihre Anmeldung für <strong>{eventTitle}</strong> wurde erfasst
              (Referenz: <span className="font-medium text-ink">{confirmationCode}</span>). Falls Sie verhindert sind,
              sagen Sie bitte mindestens 24 Stunden vorab ab.
            </>
          ) : (
            <>
              Thank you, {firstName} {lastName}. Your registration for <strong>{eventTitle}</strong> has been recorded
              (Reference: <span className="font-medium text-ink">{confirmationCode}</span>). If you are unable to attend,
              please cancel at least 24 hours before the event.
            </>
          )}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="border border-line border-t-[3px] border-t-gold bg-white p-8 md:p-10">
      <Eyebrow tone="red" className="mb-3">{isDe ? "Anmeldung" : "Registration"}</Eyebrow>
      <Heading level={3} className="mb-2">{isDe ? "Für die Veranstaltung anmelden" : "Register for the Event"}</Heading>
      <p className="mb-7 text-sm text-muted">
        {isDe
          ? "Der Eintritt ist frei. Eine Anmeldung ist erforderlich. Die Plätze sind begrenzt."
          : "Admission is free. Registration is required. Places are limited."}
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <Input label={isDe ? "Vorname" : "First name"} value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
        <Input label={isDe ? "Nachname" : "Last name"} value={lastName} onChange={(e) => setLastName(e.target.value)} required />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Input label={isDe ? "E-Mail" : "E-Mail"} type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <Input
          label={isDe ? "Mobiltelefon (inkl. Ländervorwahl)" : "Mobile phone (incl. country code)"}
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      {showGuestCount && (
        <Select label={isDe ? "Anzahl Personen" : "Number of attendees"} value={guests} onChange={(e) => setGuests(e.target.value)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </Select>
      )}
      <LanguageToggle
        value={language}
        onChange={setLanguage}
        label={isDe ? "Bevorzugte Sprache" : "Preferred Language"}
      />

      <div className="my-5 space-y-3 text-xs leading-relaxed text-muted">
        <label className="flex cursor-pointer items-start gap-2.5">
          <input
            type="checkbox"
            checked={confirmAttendance}
            onChange={(e) => setConfirmAttendance(e.target.checked)}
            className="mt-1 accent-red"
          />
          <span>
            {isDe
              ? "Ich bestätige meine verbindliche Anmeldung zu dieser Veranstaltung."
              : "I confirm my registration for this event."}
          </span>
        </label>
        <label className="flex cursor-pointer items-start gap-2.5">
          <input
            type="checkbox"
            checked={consentData}
            onChange={(e) => setConsentData(e.target.checked)}
            className="mt-1 accent-red"
          />
          <span>
            {isDe
              ? "Ich bin damit einverstanden, dass meine Daten zur Organisation dieser Veranstaltung und für Informationen zu weiteren Terminen rund um das Buch verwendet werden. Ein Widerruf ist jederzeit möglich."
              : "I agree that my data may be used to organise this event and to send me information about this and future events related to the book and related topics. I may withdraw my consent at any time."}
          </span>
        </label>
      </div>

      {error && <p className="mb-4 text-xs text-red">{error}</p>}
      <Button type="submit" variant="secondary" disabled={status === "loading"}>
        {status === "loading" ? (isDe ? "Wird übermittelt…" : "Submitting…") : isDe ? "→ Jetzt anmelden" : "→ Register now"}
      </Button>
    </form>
  );
}
