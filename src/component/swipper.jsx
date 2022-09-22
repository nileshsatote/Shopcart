import React from "react";

import { Navigation, Pagination, Scrollbar, A11y  } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import './src.css';

export default  () => {
  return (
    <div>
   <div  className="contenair" >

    <Swiper
    
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={70}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      // scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
    >
    


      <SwiperSlide><img className="img1"  src="slideimg/1.jpg" alt="1"   /></SwiperSlide>
      <SwiperSlide><img className="img1" src="slideimg/3.jpg" alt="3"   /></SwiperSlide>
      <SwiperSlide><img className="img1" src="slideimg/00.jpg" alt="2"   /></SwiperSlide>
      <SwiperSlide><img className="img1" src="slideimg/4.jpg" alt="4"   /></SwiperSlide>
      <SwiperSlide><img className="img1" src="slideimg/5.jpg" alt="5"   /></SwiperSlide>
      <SwiperSlide><img className="img1" src="slideimg/6.jpg" alt="6"   /></SwiperSlide>
      <SwiperSlide><img className="img1" src="slideimg/7.jpg" alt="7"   /></SwiperSlide>
      
    </Swiper>
   </div>
    <p className="deal">
    Shopcart Deal
    </p>
    </div>
    
    
  );
};


