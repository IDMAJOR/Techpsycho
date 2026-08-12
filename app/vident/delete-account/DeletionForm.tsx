"use client";

import { FormEvent, useState } from "react";

const API_BASE_URL = (process.env.NEXT_PUBLIC_VIDENT_API_URL || "https://vident.onrender.com").replace(/\/+$/, "");
const PLAY_SUBSCRIPTION_URL = "https://play.google.com/store/account/subscriptions?package=com.vident.app&sku=vident_premium_monthly_start";

type Mode = "signed-in" | "request";
type Status = "idle" | "working" | "success" | "error";

export function DeletionForm() {
  const [mode, setMode] = useState<Mode>("signed-in");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  function changeMode(next: Mode) {
    setMode(next);
    setStatus("idle");
    setMessage("");
  }

  async function deleteWithPassword(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("working");
    setMessage("");
    const form = event.currentTarget;
    const data = new FormData(form);
    const confirmation = String(data.get("confirmation") || "").trim().toUpperCase();
    if (confirmation !== "DELETE") {
      setStatus("error");
      setMessage("Type DELETE exactly to confirm permanent deletion.");
      return;
    }
    try {
      const login = await request("/api/auth/login", {
        method: "POST",
        body: JSON.stringify({ email: data.get("email"), password: data.get("password"), viewerId: createViewerId() }),
      });
      const token = String(login.accessToken || "");
      if (!token) throw new Error("Vident could not verify this account.");
      await request("/api/account", { method: "DELETE", headers: { Authorization: `Bearer ${token}` } });
      form.reset();
      setStatus("success");
      setMessage("Your Vident account and associated Vident data have been permanently deleted.");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "We could not delete your account. Your account has not been deleted.");
    }
  }

  async function submitRequest(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("working");
    setMessage("");
    const form = event.currentTarget;
    const data = new FormData(form);
    try {
      const result = await request("/api/account/deletion-requests", {
        method: "POST",
        body: JSON.stringify({ email: data.get("requestEmail"), reason: data.get("reason") }),
      });
      form.reset();
      setStatus("success");
      setMessage(String(result.message || "If a Vident account exists for that email, verification instructions will be provided."));
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "The request could not be submitted. Please try again.");
    }
  }

  return <section className="deletion-panel" aria-labelledby="deletion-form-title">
    <div className="deletion-tabs" role="tablist" aria-label="Account deletion options">
      <button type="button" role="tab" aria-selected={mode === "signed-in"} onClick={() => changeMode("signed-in")}>Email account</button>
      <button type="button" role="tab" aria-selected={mode === "request"} onClick={() => changeMode("request")}>Request verification</button>
    </div>
    {mode === "signed-in" ? <form onSubmit={deleteWithPassword}>
      <p className="eyebrow">Delete now</p><h2 id="deletion-form-title">Verify your Vident email account</h2>
      <p>For password accounts, sign in again and type DELETE. Credentials go directly to Vident over HTTPS and are not stored by this website.</p>
      <label htmlFor="delete-email">Account email</label><input id="delete-email" name="email" type="email" required autoComplete="email" maxLength={254} />
      <label htmlFor="delete-password">Password</label><input id="delete-password" name="password" type="password" required autoComplete="current-password" maxLength={128} />
      <label htmlFor="delete-confirmation">Type DELETE to confirm</label><input id="delete-confirmation" name="confirmation" required autoComplete="off" maxLength={6} />
      <button className="danger-button" disabled={status === "working"} type="submit">{status === "working" ? "Deleting securely…" : "Permanently delete account"}</button>
      <p className="form-note">Google sign-in account? Delete from Vident’s Profile screen, or use Request verification.</p>
    </form> : <form onSubmit={submitRequest}>
      <p className="eyebrow">No app access</p><h2 id="deletion-form-title">Request account verification</h2>
      <p>Submit the email associated with Vident. We verify ownership before deletion and never reveal whether an account exists.</p>
      <label htmlFor="request-email">Account email</label><input id="request-email" name="requestEmail" type="email" required autoComplete="email" maxLength={254} />
      <label htmlFor="request-reason">Reason (optional)</label><textarea id="request-reason" name="reason" maxLength={500} rows={4} />
      <button className="button" disabled={status === "working"} type="submit">{status === "working" ? "Submitting…" : "Request account deletion"}</button>
    </form>}
    {message ? <p className={`form-status ${status}`} role="status">{message}</p> : null}
    <a className="play-manage-link" href={PLAY_SUBSCRIPTION_URL} target="_blank" rel="noreferrer">Manage Google Play subscription <span aria-hidden="true">↗</span></a>
  </section>;
}

async function request(path: string, init: RequestInit) {
  const response = await fetch(`${API_BASE_URL}${path}`, { ...init, headers: { "Content-Type": "application/json", ...(init.headers || {}) } });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(String(payload.detail || payload.message || payload.error || "The request could not be completed."));
  return payload as Record<string, unknown>;
}

function createViewerId() {
  const suffix = typeof crypto !== "undefined" && "randomUUID" in crypto ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(36).slice(2)}`;
  return `web-deletion-${suffix}`;
}
