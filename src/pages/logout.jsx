import { useNavigate } from 'react-router-dom';
import '/Forms.css'; // Import the regular CSS file

const Logout = ({ onLogout }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        onLogout();
        navigate('/login', { replace: true });
    };

    return (
        <div className="logout-container">
            <h2 className="text-2xl font-semibold text-center text-gray-800">Logout</h2>
            <button onClick={handleLogout} className="logout-btn">Logout</button>
        </div>
    );
};

export default Logout;
