import React, { useState } from "react";
import "./booking.css";

export default function Booking({ onClose }) {
  const [form, setForm] = useState({
    name: "",
    mobileNumber: "",
    modelName: "",
    modelColour: "",
  });
  const [alert, setAlert] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_BASE_URL}api/booking/add`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );
      const data = await res.json();
      if (res.ok) {
        setAlert({ type: "success", msg: "Booking submitted successfully!" });
        setForm({ name: "", mobileNumber: "", modelName: "", modelColour: "" });
      } else {
        setAlert({
          type: "error",
          msg: data.error || "Failed to submit booking.",
        });
      }
    } catch (err) {
      setAlert({ type: "error", msg: "Failed to submit booking." });
    }
  };

  return (
    <div>
      <div className="bookings">
        <div className="booking-div">
          <div
            className="close-div"
            onClick={onClose}
            style={{ cursor: "pointer" }}
          >
            X
          </div>
          {alert && (
            <div
              style={{
                color: alert.type === "success" ? "green" : "red",
                marginBottom: "10px",
              }}
            >
              {alert.msg}
            </div>
          )}
          <div>
            <label htmlFor="">name:</label>
          </div>
          <div className="book">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="enter your name..."
            />
          </div>
        </div>

        <div className="booking-div">
          <div>
            <label htmlFor="">mobile number:</label>
          </div>
          <div className="book">
            <input
              type="text"
              name="mobileNumber"
              value={form.mobileNumber}
              onChange={handleChange}
              placeholder="enter your number..."
            />
          </div>
        </div>

        <div className="booking-div">
          <div>
            <label htmlFor="">model name:</label>
          </div>
          <div className="book">
            <input
              type="text"
              name="modelName"
              value={form.modelName}
              onChange={handleChange}
              placeholder="enter ev name..."
            />
          </div>
        </div>

        <div className="booking-div">
          <div>
            <label htmlFor="">model colour:</label>
          </div>
          <div className="book">
            <input
              type="text"
              name="modelColour"
              value={form.modelColour}
              onChange={handleChange}
              placeholder="enter model colour..."
            />
          </div>
        </div>
        <div className="booking-div-btn">
          <button type="button" onClick={handleSubmit}>
            submit
          </button>
        </div>
      </div>
    </div>
  );
}
