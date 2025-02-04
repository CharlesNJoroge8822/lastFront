import React from 'react';
import '/show.css'; 
const loggedIn = () => {
  return (
    <div className="logged-in-container">
      <div className="text-center py-10 px-4 bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 text-white">
        <h1 className="text-4xl font-extrabold mb-4">Welcome Back!</h1>
        <p className="text-lg md:text-xl mb-8">You are now logged in and ready to explore all the amazing features of our platform.</p>
        
        <div className="welcome-card shadow-lg p-6 rounded-lg bg-white text-gray-800">
          <h2 className="text-2xl font-semibold mb-4">Get Started:</h2>
          <ul className="space-y-4">
            <li className="flex items-center space-x-3">
              <span className="text-blue-600">✅</span>
              <span>Explore the latest content</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-green-600">✅</span>
              <span>Join active discussions with the community</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-red-600">✅</span>
              <span>Manage your profile and settings</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default loggedIn;
