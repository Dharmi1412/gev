import React from 'react'
import Ev1 from '../component/ev1/Ev1'
import Ev2 from '../component/ev2/Ev2'
import Brands from '../component/brands/Brands'
import FAQs from '../component/FAQs/FAQs'
import Ev3 from '../component/ev3/Ev3'
import Booking from '../component/bookings/Booking'

export default function Home() {
  return (
    <div>
      <Ev1 />
      <div className="divider"></div>
      <Ev2 />
      <div className="divider"></div>
      <Brands />
      <div className="divider"></div>
      <FAQs/>
      <div className="divider"></div>
      <Ev3/>
      <div className="divider"></div>
      {/* <Booking/> */}
      <div className="divider"></div>
    </div>
  )
}
