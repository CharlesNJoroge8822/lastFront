import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "/Forms.css"

const Register = ({ onRegister }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
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
            onRegister();
            navigate('/login', { replace: true });
        } else {
            const errorData = await response.json();
            alert(errorData.message);
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
        </div>
    );
};

export default Register;
