import React, { useContext, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";

import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./ev2.css";
import { UserContext } from "../../Context/SiteContext";

import { filterService } from "../../Service/filter";
import Filter from "../filter/Filter";
import Booking from "../bookings/Booking";
import { Link } from "react-router-dom";

function Ev2() {
  const [showForm, setShowForm] = useState(false);
  const { products, fetchData } = useContext(UserContext);
  useEffect(() => {
    console.log("Fetch data from ev2");
    fetchData();
  }, []);
  console.log(products);
  useEffect(() => {
    console.log(showForm);
  }, [showForm]);
  return (
    <div className="ev2-container">
      {showForm ? <Booking /> : <></>}
      <div className="ev2-heading">
        <h5>LATEST E-VEHICLES</h5>
      </div>

      <Filter />

      <div className="swiper-wrapper wrapper2">
        <Swiper
          spaceBetween={30}
          freeMode={true}
          pagination={{ clickable: true }}
          modules={[FreeMode, Pagination]}
          className="mySwiper myswiper2"
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {products.map((product, index) => (
            <SwiperSlide key={index} className="slide2">
              {/* <Link to={`http://localhost:5173/product/${product.ProductId}`}> */}
              <div className="prod-card">
                <div className="prod-img">
                  <img src={product.image[0]} alt={product.ProductName} />
                </div>

                <div className="prod-name">
                  <p>{product.ProductName}</p>
                  <Link to={`/product/${product.ProductId}`}>
                    <button>view</button>
                  </Link>
                  <button onClick={() => setShowForm(!showForm)}>
                    Book now
                  </button>
                </div>

                <div className="prod-name">
                  <p>{product.price}</p>
                </div>

                <div className="prod-other">
                  <div className="prod-details">
                    {/* <p className="speed">{product.topSpeed}</p> */}
                    <p>topSpeed</p>
                    <p className="">{product.speed}</p>
                  </div>

                  <div className="prod-details">
                    <p>range</p>
                    {/* <p className="speed">{product.range}</p> */}
                    <p className="">{product.range}</p>
                  </div>

                  <div className="prod-details">
                    <p> waiting period</p>
                    {/* <p className="speed">{product.waiting}</p> */}
                    <p className="">{product.waitingperiod}</p>
                  </div>
                </div>
              </div>
              {/* </Link> */}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Ev2;

