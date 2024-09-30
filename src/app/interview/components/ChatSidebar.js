import React from 'react'


export default function ChatSidebar() {
    return (
      <div className="w-1/4 bg-black border-r dark:border-gray-700">
        <div className="p-4 border-b dark:border-gray-700">
          <input 
            type="text" 
            placeholder="Search" 
            className="w-full px-4 py-2 rounded-md border bg-black text-white placeholder-gray-400 border-gray-600"
          />
        </div>
  
        <div className="p-4">
          <h2 className="font-semibold text-sm text-gray-400">Live Chat</h2>
          <ul className="mt-2 space-y-2">
            <li className="p-2 flex items-center bg-black rounded-lg">
              <img 
                className="h-10 w-10 rounded-full" 
                src="https://randomuser.me/api/portraits/men/32.jpg" 
                alt="User"
              />
              <div className="ml-3">
                <p className="font-medium text-white">Arthur Kulkov</p>
                <span className="text-sm text-gray-400">I am waiting...</span>
              </div>
              <span className="ml-auto text-sm text-gray-400">02:49</span>
            </li>
  
            {/* Add more users here */}
          </ul>
        </div>
      </div>
    );
  }
  