import React from 'react';
import { useNavigate } from 'react-router-dom';

function Logout () {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Here you can clear any user session or local storage if needed.
        alert('You have been logged out.');
        navigate('/login'); // Redirect to login page after logout
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl shadow-md bg-white text-center">
                <h2 className="text-lg font-bold">Are you sure you want to log out?</h2>
                <button onClick={handleLogout} className="mt-4 w-full p-3 text-white bg-red-600 rounded-md hover:bg-red-700">Logout</button>
            </div>
        </div>
    );
};

export default Logout;
