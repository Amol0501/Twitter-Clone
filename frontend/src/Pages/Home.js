import React from 'react';
import { Link } from 'react-router-dom';
import './homePageCss.css';

function Home() {
  return (
    <div className="bg-gray-100">
      <header className="text-center py-16">
        <h1 className="text-5xl font-bold text-gray-800">Welcome to HotDrop!</h1>
        <p className="text-gray-600">Connect with friends and family, share your moments, and join the conversation.</p>
      </header>
      <section className="text-center py-16 bg-gray-200">
        <h2 className="text-4xl font-bold text-gray-800">Join the community today!</h2>
        <p className="text-gray-600">Sign up now to start connecting with people from all over the world.</p>
        <Link to="/register"><button className="btn btn-primary mt-4">Sign Up</button></Link>
      </section>
      <section className="flex flex-col lg:flex-row items-center justify-center p-16 ">
        <div className="w-full lg:w-1/3 text-center lg:text-left">
          <h3 className="text-2xl font-bold text-gray-800">Connect with Friends</h3>
          <p className="text-gray-600">Easily connect with your friends and family</p>
        </div>
        <div className="w-full lg:w-1/3 text-center lg:text-left">
          <h3 className="text-2xl font-bold text-gray-800">Share Moments</h3>
          <p className="text-gray-600">Share your photos, videos, and thoughts with your followers.</p>
        </div>
        <div className="w-full lg:w-1/3 text-center lg:text-left">
          <h3 className="text-2xl font-bold text-gray-800">Join the Conversation</h3>
          <p className="text-gray-600">Join in on discussions, and share your opinions with the world.</p>
        </div>
      </section>
      <footer className="text-center py-8 bg-gray-300">
        <p className="text-gray-600">&copy; 2024 HotDrop. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;