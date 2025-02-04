import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from "./pages/home";
import Login from './pages/login';
import Logout from './pages/logout';
import Register from './pages/register';
import Show from './pages/show';
import Footer from './components/Footer';
import ShowPage from './components/showpage';
import LoggedIn from './pages/loggedIn';
import Inlogged from './components/Inlogged';
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
    toast.success('Registration successful! You can now log in.');
  };

  const handleLogin = () => {
    localStorage.setItem("isLoggedIn", "true");
    setIsLoggedIn(true);
    toast.success('Login successful! Welcome back!');
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    toast.info('You have logged out successfully.');
  };

  return (
    <Router>
      <div className="outer-container">
        <div className="brown-container flex flex-col min-h-screen">
          <div className="app-container flex-grow">
            <Navbar />
            <ShowPage />
            <div className="main-content">
              <Routes>
                {/* Root path redirect */}
                <Route path="/" element={<Navigate to={isLoggedIn ? "/home" : "/show"} />} />

                {/* Registration - Modified to always show register form */}
                <Route path="/register" element={<Register onRegister={handleRegister} />} />

                {/* Login */}
                <Route path="/login" element={
                  isLoggedIn ? <Navigate to="/loggedin" replace /> : 
                  <Login onLogin={handleLogin} />
                } />

                {/* Protected routes */}
                <Route path="/loggedin" element={
                  isLoggedIn ? <LoggedIn /> : <Navigate to="/login" replace />
                } />
                
                <Route path="/home" element={
                  isLoggedIn ? <Home /> : <Show />
                } />

                <Route path="/logout" element={
                  isLoggedIn ? <Logout onLogout={handleLogout} /> : <Navigate to="/login" replace />
                } />

                {/* Public routes */}
                <Route path="/show" element={<Show />} />

                {/* Fallback route */}
                <Route path="*" element={<Navigate to={isLoggedIn ? "/home" : "/show"} />} />
              </Routes>
            </div>
          </div>
          <Footer />
        </div>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Router>
  );
}

export default App;