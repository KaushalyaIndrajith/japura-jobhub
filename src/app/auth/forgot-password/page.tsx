"use client";

import { useState } from "react";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setMessage("Password reset link sent to your email.");
      } else {
        const data = await res.json();
        setMessage(data.error || "Failed to send reset link.");
      }
    } catch {
      setMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="mt-20 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-red-900 text-center mb-6">Forgot Password</h2>

        {message && (
          <p className={`mb-4 ${message.includes("sent") ? "text-green-500" : "text-red-500"}`}>
            {message}
          </p>
        )}

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-style text-black"
            required
          />
          <button type="submit" className="btn-submit">Send Reset Link</button>
        </form>

        <p className="mt-4 text-slate-700 text-center">
          Remember your password?{" "}
          <a href="/auth/login" className="text-red-800">Login here</a>.
        </p>
      </div>

      {/* CSS */}
      <style jsx>{`
        .input-style {
          width: 100%;
          padding: 10px;
          margin-bottom: 16px;
          border: 1px solid #a3a3a3;
          border-radius: 4px;
        }

        .btn-submit {
          width: 100%;
          background-color: #7f1d1d;
          color: white;
          padding: 12px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-weight: normal;
        }

        .btn-submit:hover {
          background-color: #742a2a;
        }
      `}</style>
    </div>
  );
};

export default ForgotPasswordPage;
