import React from 'react'
import { assets } from '../../../assets/assets'
import "./ev3.css"

export default function Ev3() {
  return (
    <div className='container-ev3'>

      <div className='img-div'>
        <img src={assets.scooterimg} alt="" />
       <h5>Be a member of our growing community!</h5>
        <p>Sign up of our newsletter,and whatsapp communica
          tion &
          <br />
          never miss any amazing updates on EV
        </p>
        <button>SUBCRIBE</button>
      </div>

    </div>
  )
}
