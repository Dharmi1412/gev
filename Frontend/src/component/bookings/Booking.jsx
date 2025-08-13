import React from "react";
import "./booking.css";

export default function Booking() {
  return (
    <div>
      <div className="bookings">
        <div className="booking-div">

         <div className="close-div">
          X
         </div>

          <div>
            <label htmlFor="">name:</label>
          </div>
          <div className="book">
            <input type="text" placeholder="enter your name..." />
          </div>
        </div>

        <div className="booking-div">
          <div>
            <label htmlFor="">mobile number:</label>
          </div>
          <div className="book">
            <input type="text" placeholder="enter your number..." />
          </div>
        </div>

        <div className="booking-div">
          <div>
            <label htmlFor="">model name:</label>
          </div>
          <div className="book">
            <input type="text" placeholder="enter ev name..." />
          </div>
        </div>

        <div className="booking-div">
          <div>
            <label htmlFor="">model colour:</label>
          </div>
          <div className="book">
            <input type="text" placeholder="enter model colour..." />
          </div>
        </div>
        <div className="booking-div-btn">
          <button type="button">submit</button>
        </div>
      </div>
    </div>
  );
}
