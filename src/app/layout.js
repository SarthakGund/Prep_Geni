import React from "react";
import { Inter } from "next/font/google"; // Assuming you need this font
import "./globals.css";
import Image from "next/image";
import Link from "next/link";

// HOme Interview grp disc user feed

const Layout = (props) => {
  return (
    <html>
      <body>
        <nav className="bg-black flex items-center justify-between px-4 py-2 shadow-lg">
          {/* Left side: Logo */}
          <div className="flex items-center">
            <Image src="/assets/logo.png" alt="Logo" width={150} height={50} />{" "}
            {/* Add your logo path */}
            <div className="ml-10 space-x-8 hidden md:flex">
              <Link href="/" className="text-gray-400 hover:text-white">
                Home
              </Link>
              <Link
                href="/interview"
                className="text-gray-400 hover:text-white"
              >
                Interview
              </Link>
              {/* <Link
                href="/discussion"
                className="text-gray-400 hover:text-white"
              >
                Discussion
              </Link> */}
              <Link href="/feedback" className="text-gray-400 hover:text-xhite">
                Feedback
              </Link>
            </div>
          </div>

          {/* Center: Search bar */}
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search"
              className="bg-black rounded-full px-4 py-2 text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <span className="absolute inset-y-0 right-0 flex items-center pr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.8 3.902l4.3 4.3a1 1 0 01-1.415 1.415l-4.3-4.3A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </div>

          {/* Right side: Notification icons and profile */}
          <div className="flex items-center space-x-6">
            <button className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" />
              </svg>
              {/* Notification dot */}
              <span className="absolute top-0 right-0 block h-2 w-2 rounded-full ring-2 ring-white bg-red-500"></span>
            </button>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2m-4 0H7a2 2 0 01-2-2V10a2 2 0 012-2h6m4 0V6a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m0 0h4"
                />
              </svg>
            </button>
            {/* Profile dropdown */}
            <div className="relative">
              <button className="flex items-center space-x-2">
                <img
                  src="/assets/profile-pic.jpg"
                  alt="Profile"
                  className="h-8 w-8 rounded-full"
                />
                <span className="text-gray-400">My Account</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
            </div>
          </div>
        </nav>

        {props.children}
      </body>
    </html>
  );
};

export default Layout;
