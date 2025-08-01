import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function WhatsAppChat() {
  const phoneNumber = "9484571657"; 
  const message = "Hello! I'm interested in your services.";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#25D366",
        color: "white",
        borderRadius: "50%",
        width: "60px",
        height: "60px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "30px",
        textDecoration: "none",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
        zIndex: 1000,
      }}
    >
      <i className="fab fa-whatsapp"></i>
    </a>
  );
}
