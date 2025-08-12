"use client";
import { signIn } from "next-auth/react";

export default function SignIn() {
  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-sm w-full space-y-4">
        <h1 className="text-2xl font-semibold">Sign in to Discourse</h1>
        <button onClick={() => signIn("google")} className="w-full border px-4 py-2 rounded">
          Continue with Google
        </button>
        <button onClick={() => signIn("azure-ad")} className="w-full border px-4 py-2 rounded">
          Continue with Microsoft
        </button>
      </div>
    </main>
  );
}
