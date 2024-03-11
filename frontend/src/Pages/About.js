import React from 'react';

function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[40rem] bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">About HotDrop</h1>
        <p className="text-gray-700 text-base text-center mb-8">
          HotDrop is a platform where you can connect with friends and family, share your moments, and join the conversation. With features like messaging, photo and video sharing, and groups, you can stay connected with the people who matter to you.
        </p>
        <p className="text-gray-700 text-base text-center mb-8">
          Our mission is to make it easy for you to stay in touch with the people you care about, no matter where you are in the world. We believe that social media should be a positive force in people's lives, and we're committed to building a platform that fosters connection, community, and positivity.
        </p>
        <p className="text-gray-700 text-base text-center">
          Thank you for choosing HotDrop. We're excited to have you as part of our community!
        </p>
      </div>
    </div>
  );
}

export default About;