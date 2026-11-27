"use client";
import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Eyebrow, Heading } from "@/components/ui/Heading";
import { GoogleSignInButton } from "@/components/forms/GoogleSignInButton";
import { isFirebaseClientConfigured, signInWithGoogleForIdToken } from "@/lib/firebase-client";

function LoginCard() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const nextPath = searchParams.get("next") || "/admin";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [error, setError] = useState("");

  const firebaseClientReady = isFirebaseClientConfigured();

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(data.error || "Sign in failed.");
        setLoading(false);
        return;
      }
      router.push(nextPath.startsWith("/admin") ? nextPath : "/admin");
      router.refresh();
    } catch {
      setError("Network error while signing in.");
      setLoading(false);
    }
  }

  async function onGoogleSignIn() {
    setError("");
    setGoogleLoading(true);
    try {
      const { idToken } = await signInWithGoogleForIdToken();
      const res = await fetch("/api/auth/google", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idToken }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(data.error || "Google sign-in failed.");
        setGoogleLoading(false);
        return;
      }
      router.push(nextPath.startsWith("/admin") ? nextPath : "/admin");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Google sign-in failed.");
      setGoogleLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center px-5 py-12">
      <div className="w-full max-w-[420px] border border-line border-t-[3px] border-t-gold bg-white p-8 md:p-10">
        <Eyebrow tone="red" className="mb-3">Executive Console</Eyebrow>
        <Heading level={2} className="!text-[32px]">Dr. Zrinka K. Fidermuc Maler</Heading>
        <p className="mb-6 mt-2 text-sm text-muted">
          Sign in to manage Journal essays, events, inquiries, and the AI Concierge.
        </p>

        <div className="mb-6">
          <GoogleSignInButton
            label="Sign in with Google"
            loading={googleLoading}
            disabled={loading}
            onClick={onGoogleSignIn}
          />
          {!firebaseClientReady && (
            <p className="mt-2 text-[11px] leading-snug text-muted">
              Add <code className="text-ink">NEXT_PUBLIC_FIREBASE_*</code> Web App keys in{" "}
              <code className="text-ink">.env.local</code> and enable Google Sign-In in Firebase Console to activate.
            </p>
          )}
        </div>

        <div className="relative mb-6 flex items-center">
          <div className="flex-1 border-t border-line" />
          <span className="px-3 text-[10px] tracking-[0.16em] text-muted uppercase">or email sign-in</span>
          <div className="flex-1 border-t border-line" />
        </div>

        <form onSubmit={onSubmit} noValidate>
          <Input
            label="Admin Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p className="mb-4 text-xs text-red">{error}</p>}
          <Button type="submit" variant="secondary" className="mt-2 w-full" disabled={loading || googleLoading}>
            {loading ? "Signing in…" : "Sign In"}
          </Button>
        </form>

        <div className="mt-6 border-t border-line pt-4 text-center">
          <Link href="/" className="text-xs text-muted hover:text-red">
            ← Return to Public Site
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function AdminLoginPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-sm text-muted">Loading…</div>}>
      <LoginCard />
    </Suspense>
  );
}
