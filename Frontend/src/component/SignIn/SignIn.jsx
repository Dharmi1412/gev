import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './signIn.css'

export default function SignIn({ setSignIn }) {
    const [form, setForm] = useState({
        userName: "",
        email: "",
        password: ""
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async () => {
        try {
            const res = await fetch("http://localhost:5000/api/user/signin", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email: form.email,
                    password: form.password
                })
            });
            const data = await res.json();
            if (data.message === "Login successful") {
                alert("Login successful");
                if (setSignIn) setSignIn(true);
                navigate('/');
            } else {
                alert(data.message || "Login failed");
            }
        } catch (err) {
            alert("Signin failed");
        }
    };

    return (
        <div className='firstmain-div'>
            <div className='main2-div'>
                <img src="https://evindia.online/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogin-web.7b97e1e8.jpg&w=1080&q=75" alt="" />
            </div>
            <div className=' main-div'>
                <div className='register-div'>
                    <div className='subreg-div'><p>User name:</p></div>
                    <div>
                        <input
                            type="text"
                            name="userName"
                            placeholder='enter name...'
                            value={form.userName}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className='register-div'>
                    <div className='subreg-div'><p>E-mail:</p></div>
                    <div>
                        <input
                            type="text"
                            name="email"
                            placeholder='enter E-mail...'
                            value={form.email}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className='register-div'>
                    <div className='subreg-div'><p>Password:</p></div>
                    <div>
                        <input
                            type="password"
                            name="password"
                            placeholder='enter password...'
                            value={form.password}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className='register-div'>
                    <button type="button" onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </div>
    )
}