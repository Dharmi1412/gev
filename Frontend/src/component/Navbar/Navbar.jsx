import React, { useState } from 'react';
import { IoMenu, IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <nav className='nav flex item-center'>
      {/* Logo */}
      <div className='nav-logo'>G E-Bike</div>

      {/* Mobile Toggle Button */}
      <div className='nav-mobile-icon' onClick={toggleMenu}>
        {isOpen ? <IoClose size={30} /> : <IoMenu size={30} />}
      </div>

      {/* Links */}
      <div className={`nav-links flex item-center ${isOpen ? 'active' : ''}`}>
        {[
          { path: "/", text: "Home" },
          { path: "/about", text: "ContactUs" },
          { path: "/policy", text: "Policy" },
          { path: "/register", text: " Register" },
        ].map((elem, index) => (
          <Link
            key={index}
            to={elem.path}
            onClick={() => setIsOpen(false)}
          >
            {elem.text}
          </Link>
        ))}
      </div>
    </nav>
  );
}
