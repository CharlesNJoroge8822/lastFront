import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../App.css"

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
            // alert('Login successful! Redirecting to home...');
            navigate('/home');
        } else {
            const errorData = await response.json();
            alert(errorData.message);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl shadow-md bg-white">
                <h2 className="text-center text-2xl font-bold text-purple-600">Welcome Back</h2>
                <form onSubmit={handleLogin} className="space-y-5">
                    <div>
                        <input 
                            type="email" 
                            placeholder="Email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-purple-500" 
                        />
                    </div>
                    <div>
                        <input 
                            type="password" 
                            placeholder="Password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            required 
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-purple-500" 
                        />
                    </div>
                    <button type="submit" className="w-full p-3 text-white bg-purple-600 rounded-md hover:bg-purple-700 transition duration-200">Login</button>
                </form>
                <p className="text-sm text-center">Don't have an account? <a href="/register" className="text-purple-600 hover:underline">Register here</a></p>
            </div>
        </div>
    );
};

export default Login;
