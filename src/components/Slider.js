import React from "react";
import swiperAlbums from "../data/swipperAlbums";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "../App.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default function App() {
  // Calculate the index of the middle slide
  const totalSlides = 8; // Change this to the total number of slides
  const middleIndex = Math.floor(totalSlides / 2);

  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        slideToClickedSlide={true}
        coverflowEffect={{
          rotate: 25,
          stretch: 50,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={false}
        modules={[EffectCoverflow, Pagination]}
        initialSlide={middleIndex - 1}
        className="mySwiper"
      >
        {Object.values(swiperAlbums).map((album, index) => (
          <SwiperSlide>
            <img alt="albumCover" src={album.image} />
            <div class="text-gray-900 text-center pt-2 hover:text-white">
              <h5 class="mb-0">{album.title}</h5>
              <p class="pt-0">{album.artist}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
