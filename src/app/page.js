import Link from 'next/link';
import React from 'react';

const page = () => {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col justify-center items-center text-white">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4 lg:px-8">
        <div className="lg:w-1/2">
          <h1 className="text-3xl lg:text-5xl font-bold mb-12">
            {/* Growing For a Better Tomorrow */}
            Ace Your Next Interview with Personalized Mock Sessions
          </h1>
          {/* <p className="text-lg lg:text-xl mb-6">
            Artist/illustrator specializing in illustration, icons, digital painting, and logo design.
          </p> */}
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300">
              <Link href='/login'>
              Get Started
              </Link>
            </button>
        </div>

        {/* Image section */}
        <div className="lg:w-1/2 mt-8 lg:mt-0 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src="/assets/image.png" // Replace with your actual image path
              alt="Illustration"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          {/* Add your custom floating UI or icons here */}
        </div>
      </div>
    </div>
  );
};

export default page;