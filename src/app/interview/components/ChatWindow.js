import React from "react";
import Image from "next/image";
import { Video, PhoneOff } from "lucide-react";
import Link from "next/link";

const Button = ({ children, className, ...props }) => (
  <button
    className={`px-4 py-2 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 ${className}`}
    {...props}
  >
    {children}
  </button>
);

export default function ChatWindow() {
  return (
    <div className="w-3/4 flex flex-col">
      <div className="border-b p-4 flex items-center justify-between bg-black border-gray-700">
        <div className="flex items-center">
          <img
            className="h-10 w-10 rounded-full"
            src="https://randomuser.me/api/portraits/men/41.jpg"
            alt="Glenn Fisher"
          />
          <div className="ml-3">
            <p className="font-semibold text-white">Glenn Fisher</p>
            <span className="text-sm text-green-500">Online</span>
          </div>
        </div>
        {/* Icons */}
        <div className="flex space-x-3 text-gray-400">
          <button>
            <i className="fas fa-phone"></i>
          </button>
          <button>
            <i className="fas fa-video"></i>
          </button>
          <button>
            <i className="fas fa-ellipsis-v"></i>
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-grow p-4 space-y-4 overflow-y-auto bg-black">
        <div className="flex items-start">
          <img
            className="h-8 w-8 rounded-full"
            src="https://randomuser.me/api/portraits/men/41.jpg"
            alt="Glenn Fisher"
          />
          <div className="ml-3 bg-gray-700 p-2 rounded-lg max-w-xs">
            <p className="text-white">Hey, Devon, can we get on a quick call?</p>
            <span className="text-xs text-gray-400">02:16</span>
          </div>
        </div>
        <div className="flex items-start justify-end">
          <div className="ml-3 bg-blue-500 text-white p-2 rounded-lg max-w-xs">
            <p>Hi, Glenn, sure but now I'm busy now</p>
            <span className="text-xs text-gray-200">02:16</span>
          </div>
        </div>

        <div className="flex items-start">
          <img
            className="h-8 w-8 rounded-full"
            src="https://randomuser.me/api/portraits/men/41.jpg"
            alt="Glenn Fisher"
          />

          <div className="ml-3 bg-gray-700 p-2 rounded-lg max-w-xs">
            <p className="text-white">
              Hey, Devon,can we get on a quick call?
            </p>

            <div className="flex space-x-2 m-2">
              <Link href="/call">
                <Button className="flex-1 bg-green-500 hover:bg-blue-600 text-white">
                  <Video className="mr-2 h-4 w-4" />
                  Accept
                </Button>
              </Link>
              <Link href="/interview">
                <Button
                  variant="outline"
                  className="flex-1 bg-red-500 border-gray-600 text-gray-300 hover:bg-blue-600"
                >
                  <PhoneOff className="mr-2 h-4 w-4" />
                  Decline
                </Button>
              </Link>
            </div>
            <span className="text-xs text-gray-400">02:16</span>
          </div>
        </div>

        {/* Add more messages here */}
      </div>

      {/* Input box */}
      <div className="border-t p-4 bg-gray-800 border-gray-700 flex items-center border-gray-600">
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-grow px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white placeholder-gray-400"
        />
        <button className="ml-3 text-white bg-blue-500 h-[38px] w-[38px] flex justify-center items-center rounded-[19px]">
          <Image src="/assets/send_msg.svg" alt="" width={26} height={26} />
        </button>
      </div>
    </div>
  );
}
