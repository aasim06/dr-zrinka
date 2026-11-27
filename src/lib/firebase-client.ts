"use client";
import { getApps, initializeApp, type FirebaseApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

function getFirebaseClientConfig() {
  const apiKey = process.env.NEXT_PUBLIC_FIREBASE_API_KEY?.trim();
  const authDomain = process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN?.trim();
  const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID?.trim();
  const appId = process.env.NEXT_PUBLIC_FIREBASE_APP_ID?.trim();
  if (!apiKey || !authDomain || !projectId) return null;
  return { apiKey, authDomain, projectId, ...(appId ? { appId } : {}) };
}

export function isFirebaseClientConfigured(): boolean {
  return Boolean(getFirebaseClientConfig());
}

function getClientApp(): FirebaseApp {
  const config = getFirebaseClientConfig();
  if (!config) {
    throw new Error("Firebase Web App config (NEXT_PUBLIC_FIREBASE_*) is not configured.");
  }
  return getApps().length > 0 ? getApps()[0] : initializeApp(config);
}

export async function signInWithGoogleForIdToken(): Promise<{
  idToken: string;
  email: string;
  name: string;
}> {
  const app = getClientApp();
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({ prompt: "select_account" });
  const cred = await signInWithPopup(auth, provider);
  const idToken = await cred.user.getIdToken();
  return {
    idToken,
    email: cred.user.email || "",
    name: cred.user.displayName || "",
  };
}

export async function signOutFirebaseClient(): Promise<void> {
  if (!isFirebaseClientConfigured()) return;
  const app = getClientApp();
  await signOut(getAuth(app));
}
