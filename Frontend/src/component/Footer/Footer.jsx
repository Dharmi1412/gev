import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <h2>G <em>E-Bike</em></h2>
        <p><strong>Phone:</strong> +91 1234567890</p>
        <p><strong>Email:</strong> gebike57@gmail.com</p>
      </div>

      <div className="footer-center">
        <p className="footer-links">
          <a href="/terms">Terms</a> | <a href="/Policy">Privacy</a> | <a href="/">Career</a>
        </p>
      </div>

      <div className="footer-right">
        <p className="subscribe-text">log in to get your own E-Bike and electrifying updates!</p>
      </div>
    </footer>
  );
}
