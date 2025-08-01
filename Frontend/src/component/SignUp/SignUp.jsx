import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";
import { assets } from "../../../assets/assets";

export default function SignUp() {
  const [form, setForm] = useState({
    name: "",
    userName: "",
    number: "",
    city: "",
    email: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async () => {
    if (!form.agree) return alert("Please agree to terms.");
    if (form.password !== form.confirmPassword)
      return alert("Passwords do not match.");
    try {
      const res = await fetch("http://localhost:5000/api/user/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          userName: form.userName,
          number: form.number,
          city: form.city,
          email: form.email,
          password: form.password,
        }),
      });
      const data = await res.json();
      alert(data.message);
      if (data.message === "User created successfully") {
        navigate("/");
      }
    } catch (err) {
      alert("Signup failed");
    }
  };

  return (
    <div className="signup-main">
      <div className="signup-div">
        <img
          src="https://evindia.online/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsignup-web.341a4273.jpg&w=1080&q=75"
          alt=""
        />
      </div>
      <div className="signup2-div">
        <div className="signup-input">
          <div className="">
            <label>Name</label>
          </div>
          <div>
            <input
              type="text"
              name="name"
              placeholder="enter name..."
              value={form.name}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="signup-input">
          <div className="">
            <label>User name</label>
          </div>
          <div>
            <input
              type="text"
              name="userName"
              placeholder="enter Username..."
              value={form.userName}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flagimg-div signup-input">
          <div>
            <label>Mobile number</label>
          </div>
          <div className="number-div">
            <div>
              <img src={assets.flagimg} alt="" />{" "}
            </div>
            <div>
              +91
              <input
                type="text"
                name="number"
                placeholder="number..."
                value={form.number}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="signup-input">
          <div>
            <label htmlFor="">city</label>
          </div>
          <div className="city-div">
            <select name="city" value={form.city} onChange={handleChange}>
              <option value="" disabled hidden>
                city...
              </option>
              <option value="ahm">ahmedabad</option>
              <option value="bhv">bhavnagar</option>
              <option value="srt">surat</option>
              <option value="rjkt">rajkot</option>
            </select>
          </div>
        </div>
        <div className="signup-input">
          <div className="">
            <label htmlFor="">E-mail</label>
          </div>
          <div>
            <input
              type="text"
              name="email"
              placeholder="enter E-mail..."
              value={form.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="signup-input">
          <div className="">
            <label htmlFor="">Password</label>
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="enter password..."
              value={form.password}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="signup-input">
          <div className="">
            <label htmlFor="">Confirm Password</label>
          </div>
          <div>
            <input
              type="password"
              name="confirmPassword"
              placeholder="enter password..."
              value={form.confirmPassword}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="signup-input chechbox-div">
          <div>
            <input
              type="checkbox"
              name="agree"
              checked={form.agree}
              onChange={handleChange}
            />
          </div>
          <div>
            <p>I agree to terms & condition</p>
          </div>
        </div>
        <div className="signup-input">
          <button type="button" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
