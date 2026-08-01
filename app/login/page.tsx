"use client";

import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Login Clicked");
    console.log(email, password);
  };

  return (
    <main className="min-h-screen bg-pink-50 flex items-center justify-center p-6">

      <div className="w-full max-w-md rounded-3xl bg-white shadow-2xl p-8">

        <div className="text-center">

          <h1 className="text-4xl font-bold text-pink-600">
            🍦 Cream Bite
          </h1>

          <p className="mt-3 text-gray-600">
            Welcome Back
          </p>

        </div>

        <div className="mt-8 space-y-5">

          <div>

            <label className="block text-sm font-semibold mb-2">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border p-3 outline-none focus:border-pink-500"
            />

          </div>

          <div>

            <label className="block text-sm font-semibold mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border p-3 outline-none focus:border-pink-500"
            />

          </div>

          <div className="text-right">

            <Link
              href="/forgot-password"
              className="text-pink-600 hover:underline text-sm"
            >
              Forgot Password?
            </Link>

          </div>

          <button
            onClick={handleLogin}
            className="w-full rounded-xl bg-pink-600 py-3 text-lg font-semibold text-white hover:bg-pink-700"
          >
            Login
          </button>

        </div>

        <div className="my-8 flex items-center">

          <div className="h-px flex-1 bg-gray-300" />

          <span className="px-4 text-gray-500 text-sm">
            OR
          </span>

          <div className="h-px flex-1 bg-gray-300" />

        </div>

        <Link
          href="/register"
          className="block w-full rounded-xl border border-pink-600 py-3 text-center font-semibold text-pink-600 hover:bg-pink-50"
        >
          Create New Account
        </Link>

        <Link
          href="/"
          className="mt-4 block text-center text-gray-600 hover:text-pink-600"
        >
          ← Back to Shopping
        </Link>

      </div>

    </main>
  );
}