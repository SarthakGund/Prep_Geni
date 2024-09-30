'use client'

import Link from 'next/link';
import React, { useState } from 'react';
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify"; // Import toast

export default function Page() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          username: username,
          id: user.uid,
        });
        await setDoc(doc(db, "UserData", user.uid), {
          role: '',
          domain: '',
          experience: '',
        });
        console.log("registered")
        // toast.success("User registered successfully", { position: "top-center" }); // Success toast
      }
    } catch (error) {
      console.log(error.message);
      // toast.error(error.message, { position: 'top-center' }); // Error toast
      console.log(error.message);
    }
  };

  return (
    <div className="bg-black flex items-center justify-center h-screen">
      <div className="bg-black p-8 rounded-xl shadow-xl w-full max-w-md text-center text-white">
        <h2 className="mb-6 text-3xl font-bold">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-300">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 border border-gray-500 bg-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-300"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-500 bg-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-300"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-300">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-500 bg-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-300"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 font-semibold"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-sm text-gray-400">
          Already have an account?{' '}
          <Link href="/login" className="text-blue-400 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
