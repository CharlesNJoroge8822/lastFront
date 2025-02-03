import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import other from './components/other';
import Home from "./pages/home";
import Login from './pages/login';
import Logout from './pages/logout';
import Register from './pages/register';
import Footer from './components/Footer';
import "./App.css"
import LoggedOut from './components/other';

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
            <other/>
            <div className="main-content">
              <Routes>
                <Route path="/register" element={<Register onRegister={handleRegister} />} />
                <Route path="/login" element={isRegistered ? <Login onLogin={handleLogin} /> : <Navigate to="/register" />} />
                <Route path="/home" element={isLoggedIn ? <Home /> : <Navigate to="/other" />} />
                <Route path="/logout" element={isLoggedIn ? <Logout onLogout={handleLogout} /> : <Navigate to="/other" />} />
                <Route path="*" element={<Navigate to="/register" />} />
                <Route path='/loggedout' element={<LoggedOut/>}/>
                <Route path='/other' element={<other/>}/>
              </Routes>
            </div>
          </div>
          <Link to="/other"></Link>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
