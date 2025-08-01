import React from "react";
import "./subnav.css";
import { Link } from "react-router-dom";

import {
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa6";

export default function Subnav() {
  return (
    <div className="top-navbar">
      <div className="left-section">
        <span>
          <FaPhone /> +91 1234567890
        </span>
        <span className="email">
          <FaEnvelope />
          gebike57@gmail.com
        </span>
      </div>
      <div className="center-section">
        <FaFacebookF />
        <FaXTwitter />
        <FaLinkedinIn />
        <FaYoutube />
        <FaInstagram />
      </div>
      <div className="right-section">
        <div className="right-section">
          <Link to="/terms" className="nav-link">
            TERMS & CONDITIONS
          </Link>
        </div>
        {/* <span>PRIVACY</span> */}
        {/* <span>TERMS & CONDITIONS</span> */}
        {/* <span>CAREER</span>
        <span>CONTACT US</span> */}
      </div>
    </div>
  );
}
