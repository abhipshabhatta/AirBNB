import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <a href="/" className="footer-logo">
        <span>Airbnb</span>
        <img src={footerLogo} alt="Airbnb logo" />
      </a>
      <p>&copy; 2025 Airbnb</p>
    </footer>
  );
}

export default Footer;
