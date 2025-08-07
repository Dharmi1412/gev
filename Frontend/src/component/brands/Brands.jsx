import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './brands.css';

// import required modules
import { Pagination } from 'swiper/modules';

function Brands() {
  return (
    <div className='brands-wrapper'>
      <div>
        <h5>
          BRANDS
        </h5>
      </div>
      <Swiper
        slidesPerView={5}
        spaceBetween={200}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper brand-image" 
      >
        {
          [
            `https://evindia.online/_next/image?url=https%3A%2F%2Fcdn.evindia.online%2Fuploads%2Fcompany%2F295e9629edadfb18e5a6c8a4e2d6096a&w=256&q=75`,
            `https://evindia.online/_next/image?url=https%3A%2F%2Fcdn.evindia.online%2Fuploads%2Fcompany%2Fcf24dd141d7c3b6eea3b9bd5ea9a12a3&w=256&q=75`,
            `https://evindia.online/_next/image?url=https%3A%2F%2Fcdn.evindia.online%2Fuploads%2Fcompany%2Fac390e25412e554bad5917089f9a9bb6&w=256&q=75`,
            `https://evindia.online/_next/image?url=https%3A%2F%2Fcdn.evindia.online%2Fuploads%2Fcompany%2F4a73a289e6df38b37b02c81e670c7170&w=256&q=75`,
            `https://evindia.online/_next/image?url=https%3A%2F%2Fcdn.evindia.online%2Fuploads%2Fcompany%2F691a831b3e69d01f50d7506cbe914d87&w=256&q=75`,
            `https://evindia.online/_next/image?url=https%3A%2F%2Fcdn.evindia.online%2Fuploads%2Fcompany%2Fed1d7466e5257d7654ec1c1bdf900c22&w=256&q=75`,
            `https://evindia.online/_next/image?url=https%3A%2F%2Fcdn.evindia.online%2Fuploads%2Fcompany%2Fbba91dc0ab76d1fa24d0253d03d02506&w=256&q=75`,
            `https://evindia.online/_next/image?url=https%3A%2F%2Fcdn.evindia.online%2Fuploads%2Fcompany%2Fff89880e890c88ac718a424b597ee0af&w=256&q=75`,
            `https://evindia.online/_next/image?url=https%3A%2F%2Fcdn.evindia.online%2Fuploads%2Fcompany%2F2022-07-04-08-07-67-blob&w=256&q=75`,
            `https://evindia.online/_next/image?url=https%3A%2F%2Fcdn.evindia.online%2Fuploads%2Fcompany%2F2021-12-27-16-12-00-ultra_violet.png&w=256&q=75`
          ].map((elem, index) => {
            return <SwiperSlide key={index}>
              <img src={elem} alt={elem.name} className='brand-image' />
            </SwiperSlide>
          })
        }
      </Swiper>
    </div>
  );
}
export default Brands;
