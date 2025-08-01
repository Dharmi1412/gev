// import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import React, { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div className="side-bar">
      <div className="logo">
        <div className="nav-mobile" onClick={toggleMenu}>
          {isOpen ? <IoClose size={30} /> : <IoMenu size={30} />}
        </div>
        <h3>G E-Bike</h3>
      </div>

      <div className={`links  ${isOpen ? "active" : ""}`}>
        {[
          { text: "Add", path: "/" },
          { text: "List", path: "/list" },
          // { text: "Update", path: "/update" },
        ].map((elem, index) => {
          return (
            <Link
              className="links-div"
              key={index}
              to={elem.path}
              onClick={() => setIsOpen(false)}
            >
              {elem.text}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
