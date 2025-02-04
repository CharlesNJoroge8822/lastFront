import { Link } from "react-router-dom";
import React from 'react';
import "/show.css"

const Inlogged = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-r from-blue-400 to-purple-500 text-white">
      {/* Main content container */}
      <div className="flex flex-col justify-center items-center bg-white p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-4">You're Logged In! 🎉</h1>
        <p className="text-xl text-gray-700 mb-6">Welcome back! You've got access to all the cool stuff now! 🕺💃</p>

        <Link 
          to="/loggedin" 
          className="text-2xl font-semibold text-purple-700 hover:text-purple-500 transition duration-300 mb-4"
        >
          Go to Your Dashboard 🔥
        </Link>

        <p className="text-lg text-gray-600">Enjoy your time and explore all the features at your fingertips! 😎</p>

        <div className="mt-6">
          <p className="text-sm text-gray-500">You're one step away from a great experience.</p>
        </div>
      </div>
    </div>
  );
};

export default Inlogged;
