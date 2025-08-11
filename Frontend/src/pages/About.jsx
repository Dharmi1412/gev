import React, { useState } from "react";
import "./about.css";

import { IoIosCall } from "react-icons/io";
import { IoIosMail } from "react-icons/io";

export default function About() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    number: "",
    subject: "",
    description: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `${import.meta.env.VITE_BASE_URL}api/feedback/submit`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );
      if (res.ok) {
        alert("Feedback sent!"); 
        setForm({
          name: "",
          email: "",
          number: "",
          subject: "",
          description: "",
        });
      } else {
        alert("Error sending feedback");
      }
    } catch (err) {
      alert("Server error");
    }
  };

  return (
    <div>
      <div className="about-first">
        <h1> HOW TO CONNECT US </h1>
      </div>

      <div className="about-second">
        <div className="sub-second1">
          <div className="subhead-div">
            <h1>Contact Information</h1>
          </div>

          <h1 className="h1div">For Business Inquiry</h1>

          <div className="flex-div">
            <div className="flex-item">
              <IoIosCall /> +91 1234567890
            </div>

            <div>
              <IoIosMail /> gebike123@gebike{" "}
            </div>
          </div>

          <h1 className="h1div">Customer Helpline</h1>

          <div className="flex-div">
            <div className="flex-item">
              <IoIosCall /> +91 1234567890
            </div>

            <div>
              <IoIosMail /> gebike123@gebike{" "}
            </div>
          </div>

          <h1 className="h1div">For Career</h1>

          <div className="flex-div">
            <div className="flex-item">
              <IoIosCall /> +91 1234567890
            </div>

            <div>
              <IoIosMail /> gebike123@gebike{" "}
            </div>
          </div>
        </div>

        <div className="sub-second2">
          <div className="subhead2-div">
            <h1>Give Us Your Feedback</h1>
          </div>

          <div className="pdiv">
            <p>
              We want to know what you thought of your experience at EVIndia so
              we'd love to hear your
              <br />
              valuable feedback
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="input-a-div">
              <div className="labeldiv">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="labeldiv">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email ID"
                  required
                />
              </div>
            </div>
            <div className="input-a-div">
              <div className="labeldiv">
                <label htmlFor="number">Number</label>
                <input
                  type="text"
                  name="number"
                  value={form.number}
                  onChange={handleChange}
                  placeholder="Contact Number"
                  required
                />
              </div>
              <div className="labeldiv">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Enter Subject"
                  required
                />
              </div>
            </div>
            <div className="labeldiv inpt-a-div">
              <label htmlFor="description">Description</label>
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="Enter Description"
                rows={10}
                required
              ></textarea>
            </div>
            <div className="abbtn-div">
              <button type="submit">Send message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
