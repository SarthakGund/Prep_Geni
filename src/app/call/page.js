import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function page() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Head>
        <title>Video Call</title>
      </Head>

      {/* Main content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left section - video grid */}
        <div className="flex-1 p-4 grid grid-cols-2 gap-4 overflow-auto items-center">
          {/* Video panel for Mike Jefferson */}
          <div className="relative bg-gray-800 rounded-lg aspect-video">
            <img
              className="rounded-lg object-cover w-full h-full"
              src="/api/placeholder/400/300"
              alt="Mike Jefferson"
            />
            <div className="absolute bottom-2 left-2 text-sm flex items-center">
              <span>Mike Jefferson</span>
              <span className="ml-2 w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center">
                {/* Mic icon */}
                <svg
                  className="w-2.5 h-2.5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10 2a2 2 0 00-2 2v6a2 2 0 104 0V4a2 2 0 00-2-2zM5 8a1 1 0 00-1 1v2a4 4 0 008 0V9a1 1 0 10-2 0v2a2 2 0 11-4 0V9a1 1 0 00-1-1z" />
                </svg>
              </span>
            </div>
          </div>

          {/* Video panel for Kate Perry */}
          <div className="relative bg-gray-800 rounded-lg aspect-video">
            <img
              className="rounded-lg object-cover w-full h-full"
              src="/api/placeholder/400/300"
              alt="Kate Perry"
            />
            <div className="absolute bottom-2 left-2 text-sm flex items-center">
              <span>Kate Perry</span>
              <span className="ml-2 w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center">
                {/* Mic icon */}
                <svg
                  className="w-2.5 h-2.5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10 2a2 2 0 00-2 2v6a2 2 0 104 0V4a2 2 0 00-2-2zM5 8a1 1 0 00-1 1v2a4 4 0 008 0V9a1 1 0 10-2 0v2a2 2 0 11-4 0V9a1 1 0 00-1-1z" />
                </svg>
              </span>
            </div>
          </div>

          {/* Repeat for other participants if needed */}
        </div>

        {/* Right section - chat box */}
        <div className="w-80 bg-gray-900 p-4 flex flex-col">
          <div className="flex items-center justify-between border-b border-gray-700 pb-2 mb-2">
            <div className="text-lg font-semibold">Chat</div>
            <div className="flex">
              <div className="px-4 py-2 cursor-pointer text-blue-500">Chat</div>
              <div className="px-4 py-2 cursor-pointer">Participants</div>
            </div>
          </div>

          {/* Chat content */}
          <div className="flex-1 overflow-y-auto">
            {/* ... (chat messages) ... */}
          </div>

          {/* Message input */}
          <div className="mt-4 flex items-center border-t border-gray-700 pt-2">
            <input
              type="text"
              className="flex-1 bg-gray-800 p-2 rounded-lg outline-none"
              placeholder="Type a message"
            />
            <button className="ml-2 bg-blue-600 p-2 rounded-lg">
              <Image src="/assets/send_msg.svg" alt="" width={26} height={26} />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-gray-900 p-4 flex justify-center items-center space-x-4">
        <button className="p-2 bg-gray-800 rounded-full">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        </button>
        <button className="p-2 bg-gray-800 rounded-full mic">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
          </svg>
        </button>
        <button className="p-2 bg-gray-800 rounded-full">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
          </svg>
        </button>
        <Link href="/interview">
        <button className="p-2 bg-red-600 rounded-full">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        </Link> 
      </div>
    </div>
  );
}
