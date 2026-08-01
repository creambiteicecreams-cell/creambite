"use client";

import Link from "next/link";
import { useState } from "react";
import { supabase } from "@/lib/supabase/client";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = async () => {
  if (!name.trim()) {
    alert("Please enter your full name.");
    return;
  }

  if (!email.trim()) {
    alert("Please enter your email.");
    return;
  }

  if (!password) {
    alert("Please enter a password.");
    return;
  }

  if (password.length < 8) {
    alert("Password must be at least 8 characters.");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return;
  }

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: name,
      },
    },
  });

  if (error) {
    alert(error.message);
    return;
  }

  alert("🎉 Account created successfully!");

  window.location.href = "/";
};

  return (
    <main className="min-h-screen bg-pink-50 flex items-center justify-center p-6">

      <div className="w-full max-w-md rounded-3xl bg-white shadow-2xl p-8">

        <div className="text-center">

          <h1 className="text-4xl font-bold text-pink-600">
            🍦 Cream Bite
          </h1>

          <p className="mt-3 text-gray-600">
            Create Your Account
          </p>

        </div>

        <div className="mt-8 space-y-5">

          <div>

            <label className="block text-sm font-semibold mb-2">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-xl border p-3 outline-none focus:border-pink-500"
            />

          </div>

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
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border p-3 outline-none focus:border-pink-500"
            />

          </div>

          <div>

            <label className="block text-sm font-semibold mb-2">
              Confirm Password
            </label>

            <input
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full rounded-xl border p-3 outline-none focus:border-pink-500"
            />

          </div>

          <button
            onClick={handleRegister}
            className="w-full rounded-xl bg-pink-600 py-3 text-lg font-semibold text-white hover:bg-pink-700"
          >
            Create Account
          </button>

        </div>

        <div className="mt-8 text-center">

          <p className="text-gray-600">
            Already have an account?
          </p>

          <Link
            href="/login"
            className="mt-3 inline-block text-pink-600 font-semibold hover:underline"
          >
            Login
          </Link>

        </div>

        <Link
          href="/"
          className="mt-6 block text-center text-gray-600 hover:text-pink-600"
        >
          ← Back to Shopping
        </Link>

      </div>

    </main>
  );
}