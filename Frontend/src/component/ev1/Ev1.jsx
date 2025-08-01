import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './ev1.css';

function Ev1() {
  return (
    <div className="slider-wrapper">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {[
          `https://quickinsure.s3.ap-south-1.amazonaws.com/uploads/static_page/c9764b9e-5f31-46a9-b662-66f1e5431e87/Ather-Electric-Two-Wheeler-Insurance-min.png`,
          `https://tradebrains.in/wp-content/uploads/2021/12/Electric-Vehicle-Cover-image.jpg`,
          `https://imgd.aeplcdn.com/664x374/n/cw/ec/1/versions/honda-activa-e-standard1732724252825.jpg?q=80`
        ].map((url, i) => (
          <SwiperSlide key={i}>
            <img className="slider-img" src={url} alt={`slide-${i}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Ev1;
