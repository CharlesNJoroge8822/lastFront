import React from 'react';
import '/show.css'

function Show() {
  return (
    <div className="show-container">
      <div className="show-content">
        {/* Application Title */}
        <h1 className="app-title">🚀 Welcome to Our Awesome App!</h1>

        {/* Catchy Tagline */}
        <p className="app-tagline">
          "Bridging innovation and simplicity, one click at a time."
        </p>

        {/* App Details */}
        <div className="app-details">
          <h2 className="details-title">🌟 Why Use This App?</h2>
          <ul className="details-list">
            <li>✅ Fast & Secure Authentication</li>
            <li>✅ Seamless Navigation</li>
            <li>✅ Intuitive User Interface</li>
            <li>✅ Real-time Updates & Storage</li>
          </ul>
        </div>

        {/* Call to Action */}
        <div className="cta-container">
          <p className="cta-text">Ready to explore? Log In!</p>
          {/* Update the href to /register for registration */}
          <a href="/register" className="cta-button">
            🚀 Register Now !
          </a>
        </div>
      </div>
    </div>
  );
}

export default Show;
