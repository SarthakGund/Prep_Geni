'use client';

import React, { useEffect, useState } from 'react';
import { auth, db } from "../firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";

const Page = () => {
  const [role, setRole] = useState('');
  const [domain, setDomain] = useState('');
  const [experience, setExperience] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;
      if (user) {
        const userDoc = await getDoc(doc(db, "Users", user.uid));
        if (userDoc.exists()) {
          const userData = userDoc.data();
          setRole(userData.role || '');
          setDomain(userData.domain || '');
          setExperience(userData.experience || '');
        }
      }
    };

    fetchUserData();
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();  // Prevent the default form submission
    const user = auth.currentUser;
    if (user) {
      try {
        // Update Firestore document with current state values
        await setDoc(doc(db, "UserData", user.uid), {
          role: role,  // Current state value for role
          domain: domain,  // Current state value for domain
          experience: experience,  // Current state value for experience
        }, { merge: true });  // Merge with existing data

        window.location.href = "/interview";

        toast.success("User information updated successfully", { position: "top-center" });
      } catch (error) {
        console.error(error);
        toast.error(error.message, { position: "top-center" });
      }
    }
  };

  return (
    <div className="bg-black flex items-center justify-center h-screen">
      <div className="bg-black p-8 rounded-xl shadow-xl w-full max-w-md text-center text-white">
        <h2 className="mb-6 text-3xl font-bold">Update User Info</h2>
        <form onSubmit={handleUpdate}>  {/* Form submit event */}
          {/* Dropdown for Role */}
          <div className="mb-6">
            <label htmlFor="role" className="block mb-2 text-sm font-medium text-gray-300">
              Role
            </label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full px-4 py-3 border border-gray-500 bg-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-300"
              required
            >
              <option value="">Select Role</option>
              <option value="admin">Admin</option>
              <option value="user">User</option>
              <option value="moderator">Moderator</option>
            </select>
          </div>

          {/* Dropdown for Domain */}
          <div className="mb-6">
            <label htmlFor="domain" className="block mb-2 text-sm font-medium text-gray-300">
              Domain
            </label>
            <select
              id="domain"
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
              className="w-full px-4 py-3 border border-gray-500 bg-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-300"
              required
            >
              <option value="">Select Domain</option>
              <option value="web">Web Development</option>
              <option value="mobile">Mobile Development</option>
              <option value="data">Data Science</option>
            </select>
          </div>

          {/* Dropdown for Experience */}
          <div className="mb-6">
            <label htmlFor="experience" className="block mb-2 text-sm font-medium text-gray-300">
              Experience
            </label>
            <select
              id="experience"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              className="w-full px-4 py-3 border border-gray-500 bg-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-300"
              required
            >
              <option value="">Select Experience Level</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="expert">Expert</option>
            </select>
          </div>

          <button
            type="submit"  // Button to submit the form
            className="w-full py-3 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 font-semibold"
          >
            Update Info
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;
