// app/auth/login/page.tsx

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();

  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });

    if (res.ok) {
      router.push("/dashboard/students"); // Redirect to the dashboard on success
    } else {
      const data = await res.json();
      setError(data.error || "Invalid username or password");
    }
  };

  return (
    <div className="mt-20 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center text-red-900 mb-6">Login</h2>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username (Email)"
            value={credentials.username}
            onChange={handleChange}
            className="input-style text-black"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={credentials.password}
            onChange={handleChange}
            className="input-style text-black"
            required
          />
          <button type="submit" className="btn-submit">Login</button>
        </form>

        <div className="mt-4 flex justify-between items-center">
          <a href="/auth/forgot-password" className="text-red-800 text-sm">
            Forgot Password?
          </a>
          <a href="/candidate-employer" className="text-red-800 text-sm">
            Create New Account
          </a>
        </div>
      </div>

      {/* CSS */}
      <style jsx>{`
        .input-style {
          width: 100%;
          padding: 8px;
          margin-bottom: 12px;
          border: 1px solid #a3a3a3;
          border-radius: 4px;
        }

        .btn-submit {
          width: 100%;
          background-color: #7f1d1d;
          color: white;
          padding: 10px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }

        .btn-submit:hover {
          background-color: #742a2a;
        }
      `}</style>
    </div>
  );
};

export default LoginPage;
