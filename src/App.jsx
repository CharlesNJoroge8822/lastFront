import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from "./pages/home";
import Login from './pages/login';
import Logout from './pages/logout';
import Register from './pages/register';
import Show from './pages/show';
import Footer from './components/Footer';
import showpage from './components/showpage';
import { toast, ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";

function App() {
  const [isRegistered, setIsRegistered] = useState(() => {
    return localStorage.getItem("isRegistered") === "true";
  });

  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("isLoggedIn") === "true";
  });

  const handleRegister = () => {
    localStorage.setItem("isRegistered", "true");
    setIsRegistered(true);
    toast.success('Registration successful! You can now log in.'); // Toast for successful registration
  };

  const handleLogin = () => {
    localStorage.setItem("isLoggedIn", "true");
    setIsLoggedIn(true);
    toast.success('Login successful! Welcome back!'); // Toast for successful login
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    toast.info('You have logged out successfully.'); // Toast for logout
  };

  return (
    <Router>
      <div className="outer-container">
        <div className="brown-container flex flex-col min-h-screen">
          <div className="app-container flex-grow">
            <Navbar />
            <showpage />
            <div className="main-content">
              <Routes>
                <Route path="/register" element={<Register onRegister={handleRegister} />} />
                <Route path="/login" element={isRegistered ? <Login onLogin={handleLogin} /> : <Navigate to="/register" />} />
                <Route path="/home" element={isLoggedIn ? <Home /> : <Navigate to="/show" />} />
                <Route path="/logout" element={isLoggedIn ? <Logout onLogout={handleLogout} /> : <Navigate to="/show" />} />
                <Route path="*" element={<Navigate to="/register" />} />
                <Route path="/show" element={<Show />} />
              </Routes>
            </div>
          </div>
          <Footer />
        </div>
      </div>
      
      {/* Toastify container to show notifications */}
      <ToastContainer />
    </Router>
  );
}

export default App;
