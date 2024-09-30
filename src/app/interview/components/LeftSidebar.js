'use client'

import React, { useState } from 'react';
import { FaHome, FaInbox, FaUserAlt, FaChartBar, FaCogs, FaQuestionCircle } from 'react-icons/fa';
import { IoMdClose, IoMdMenu } from 'react-icons/io';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`${
          isOpen ? 'w-64' : 'w-16'
        } bg-gray-900 h-screen p-4 duration-300 relative`}
      >
        <button
          onClick={toggleSidebar}
          className="absolute top-4 right-4 text-gray-300 focus:outline-none"
        >
          {isOpen ? <IoMdClose size={24} /> : <IoMdMenu size={24} />}
        </button>

        <div className="mt-12">
          <h1 className={`text-gray-400 uppercase tracking-wide ${!isOpen && 'hidden'}`}>Analytics</h1>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center text-gray-200 hover:bg-gray-700 p-2 rounded-lg cursor-pointer">
              <FaHome size={20} />
              <span className={`${!isOpen && 'hidden'} ml-4`}>Home</span>
            </li>
            <li className="flex items-center text-gray-200 hover:bg-gray-700 p-2 rounded-lg cursor-pointer">
              <FaInbox size={20} />
              <span className={`${!isOpen && 'hidden'} ml-4`}>Inbox</span>
            </li>
            <li className="flex items-center text-gray-200 hover:bg-gray-700 p-2 rounded-lg cursor-pointer">
              <FaChartBar size={20} />
              <span className={`${!isOpen && 'hidden'} ml-4`}>Analytics</span>
            </li>
            <li className="flex items-center text-gray-200 hover:bg-gray-700 p-2 rounded-lg cursor-pointer">
              <FaUserAlt size={20} />
              <span className={`${!isOpen && 'hidden'} ml-4`}>My Account</span>
            </li>
          </ul>

          <h1 className={`text-gray-400 uppercase tracking-wide mt-8 ${!isOpen && 'hidden'}`}>Customization</h1>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center text-gray-200 hover:bg-gray-700 p-2 rounded-lg cursor-pointer">
              <FaCogs size={20} />
              <span className={`${!isOpen && 'hidden'} ml-4`}>Settings</span>
            </li>
            <li className="flex items-center text-gray-200 hover:bg-gray-700 p-2 rounded-lg cursor-pointer">
              <FaQuestionCircle size={20} />
              <span className={`${!isOpen && 'hidden'} ml-4`}>Help</span>
            </li>
          </ul>
        </div>
      </div>

    </div>
  );
};

export default Sidebar;
