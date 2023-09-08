import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "./Carousel.css";
import React from "react";

/**
 * Component that shows it's children elements in responsive carousel
 */
export default function Carousel({ children }) {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      navigation={true}
      breakpoints={{
        460: { slidesPerView: 1.3 },
        640: { slidesPerView: 2 },
        860: { slidesPerView: 3 },
        1280: { slidesPerView: 4 },
      }}
      modules={[Navigation]}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child) ? (
          <SwiperSlide key={child.key}>{child}</SwiperSlide>
        ) : (
          { child }
        )
      )}
    </Swiper>
  );
}
