import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'; // Importing toastify
import 'react-toastify/dist/ReactToastify.css'; // Import the Toastify CSS
import "/Forms.css";

const Register = ({ onRegister }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [registrationStatus, setRegistrationStatus] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        const response = await fetch('https://lastback-6.onrender.com/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, password }),
        });

        if (response.ok) {
            setRegistrationStatus('User Registered');
            onRegister();
            toast.success('Registration successful! Redirecting to login...'); // Toastify success message
            setTimeout(() => {
                navigate('/login', { replace: true });
            }, 6000); // Redirect after 6 seconds
        } else {
            const errorData = await response.json();
            toast.error(`Error: ${errorData.message}`); // Toastify error message
        }
    };

    return (
        <div className="form-container">
            <h2 className="text-2xl font-semibold text-center text-gray-800">Register</h2>
            <form onSubmit={handleRegister} className="form">
                <input 
                    type="text" 
                    placeholder="Name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    required 
                    className="input-field"
                />
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                    className="input-field"
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                    className="input-field"
                />
                <button type="submit" className="submit-btn">Register</button>
            </form>

            {/* Display registration success message */}
            {registrationStatus && (
                <p className="registration-status">{registrationStatus}</p>
            )}
        </div>
    );
};

export default Register;
