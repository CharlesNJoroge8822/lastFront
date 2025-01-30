import { Link } from "react-router-dom";
import "../App.css"; // Import the new CSS file

function Navbar() {
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
      </div>
    </nav>
  );
}

export default Navbar;
