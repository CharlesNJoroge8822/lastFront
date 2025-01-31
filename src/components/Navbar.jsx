import { Link } from "react-router-dom";
import "../App.css"; // Ensure the CSS is properly imported

function Navbar() {
  const isDarkMode = localStorage.getItem('darkMode') === 'true';

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode; // Toggle the mode
    document.body.classList.toggle('dark-mode', newDarkMode); // Apply the class
    localStorage.setItem('darkMode', newDarkMode); // Save the theme preference in localStorage
  };

  if (isDarkMode) {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <h1 className="navbar-logo">MyBrand</h1>

        {/* Navigation Links */}
        <div className="navbar-links">
          <Link to="/home" className="navbar-link">Home</Link>
          <Link to="/login" className="navbar-link">Login</Link>
          <Link to="/logout" className="navbar-link">Logout</Link>
          <Link to="/register" className="navbar-link">Register</Link>
        </div>

        {/* Dark Mode Toggle */}
        <button className="dark-mode-toggle" onClick={toggleDarkMode}>
          🌙
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
