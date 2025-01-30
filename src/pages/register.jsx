import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'; // Import your custom CSS styles

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, password }),
        });

        if (response.ok) {
            // alert('Registration successful! Redirecting to login...');
            navigate('/login');
        } else {
            const errorData = await response.json();
            alert(errorData.message);
        }
    };

    return (
        <div className="register-container flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-600 to-pink-600">
            <div className="register-form w-full max-w-md p-8 space-y-8 rounded-xl shadow-xl bg-white">
                <h2 className="text-center text-3xl font-bold text-purple-800">Create an Account</h2>
                <form onSubmit={handleRegister} className="space-y-5">
                    <div>
                        <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} required className="input-field" />
                    </div>
                    <div>
                        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required className="input-field" />
                    </div>
                    <div>
                        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required className="input-field" />
                    </div>
                    <button type="submit" className="submit-button">Register</button>
                </form>
                <p className="text-sm text-center">Already have an account? <a href="/login" className="text-purple-600 hover:underline">Login here</a></p>
            </div>
        </div>
    );
};

export default Register;
