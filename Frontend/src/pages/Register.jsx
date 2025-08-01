import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";
import './register.css'
import SignIn from '../component/SignIn/SignIn'
import SignUp from '../component/SignUp/SignUp'

const Register = () => {
    const [signIn, setSignIn] = useState(true)


    return (
        <>
            <nav className='main-reg-div'>

                <div className={`reg2-div `}>
                    <p
                        onClick={() => setSignIn(true)}
                        className='reg-btn'
                        >
                        SignIn
                    </p>

                    <p
                        onClick={() => setSignIn(false)}
                        className='reg-btn'
                    >
                        SignUp
                    </p>
                </div>
            </nav>
            {
                signIn ?
                    <SignIn setSignIn={setSignIn} /> :
                    <SignUp setSignIn={setSignIn} />
            }
        </>
    )
}
export default Register


