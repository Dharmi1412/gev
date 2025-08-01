import React from "react";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { MdOutlineFeedback } from "react-icons/md";
import { IoMdInformationCircleOutline } from "react-icons/io";
import "./nav.css";
import Booking from "../../Pages/Bookings/Booking";
import Feedback from "../../Pages/Feedback/Feedback";
import Logininfo from "../../Pages/Login-info/Logininfo";

export default function Nav() {
  return (
    
    <div className="nav-div">
      <div className="navbar">
        <Booking /> <MdOutlineNotificationsNone />
      </div>

      <div className="navbar">
        <Feedback /> <MdOutlineFeedback />
      </div>

      <div className="navbar">
        <Logininfo /> <IoMdInformationCircleOutline />
      </div>

    </div>
  );
}
