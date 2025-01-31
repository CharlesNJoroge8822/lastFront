import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from "./pages/home";
import Login from './pages/login';
import Logout from './pages/logout';
import Register from './pages/register';
import Footer from './components/Footer';
import "./App.css"

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
  };

  const handleLogin = () => {
    localStorage.setItem("isLoggedIn", "true");
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div className="outer-container">
        <div className="brown-container flex flex-col min-h-screen">
          <div className="app-container flex-grow">
            <Navbar />
            <div className="main-content">
              <Routes>
                <Route path="/register" element={<Register onRegister={handleRegister} />} />
                <Route path="/login" element={isRegistered ? <Login onLogin={handleLogin} /> : <Navigate to="/register" />} />
                <Route path="/home" element={isLoggedIn ? <Home /> : <Navigate to="/login" />} />
                <Route path="/logout" element={isLoggedIn ? <Logout onLogout={handleLogout} /> : <Navigate to="/login" />} />
                <Route path="*" element={<Navigate to="/register" />} />
              </Routes>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
