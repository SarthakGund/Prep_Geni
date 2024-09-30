'use client'

import { signInWithEmailAndPassword } from "firebase/auth";
import Link from "next/link";
import React, { useState } from "react";
import { auth } from "../firebase"
import {toast } from "react-toastify"

export default function Page() {
  const [email, setEmail] = useState(""); // State for email
  const [password, setPassword] = useState(""); // State for password

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Logged in");
      window.location.href = "/interview";
      toast.success("User logged in succesfully", {
        position: top-center,
      })

    } catch (error) {
      console.log(error.message);
    }
    // console.log("Email:", email);
    // console.log("Password:", password);
  };

  return (
    <div className="bg-black p-8 text-center text-white h-screen flex flex-col justify-center items-center w-screen">
      <div className="w-full max-w-[600px]">
        <h2 className="mb-6 text-3xl font-bold">Welcome Back</h2>
        <form className="w-[600px] flex items-center flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-300"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update email state
              className="w-[300px] px-4 py-3 border border-gray-500 bg-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-300"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-300"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Update password state
              className="w-[300px] px-4 py-3 border border-gray-500 bg-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-300"
              required
            />
          </div>
          <button
            type="submit"
            className="w-[300px] py-3 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 font-semibold"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-sm text-gray-400">
          Don't have an account?{" "}
          <Link href="/signup" className="text-blue-400 hover:underline">
            Sign up
          </Link>
        </p>

        <div className="flex flex-col items-center gap-[16px] my-[10px]">
          <button
            className="w-[300px] py-3 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 font-semibold"
          >
            Login using Google
          </button>
          <button
            className="w-[300px] py-3 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 font-semibold"
          >
            Login with something else
          </button>
        </div>
      </div>
    </div>
  );
}
