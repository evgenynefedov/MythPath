import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCards } from "swiper/modules";
import { useTheme } from '@mui/material/styles';
import {useMediaQuery} from "@mui/material";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-cards";
import "./Carousel.css";
import React from "react";

/**
 * Component that shows it's children elements in responsive carousel
 */
export default function Carousel({ children }) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
    
  return (
    <Swiper
      style={{overflow: "hidden"}}
      modules={matches ? [Navigation] : [EffectCards]}
      effect={matches ? "" : "cards"}
      cardsEffect= {{
        perSlideOffset: 10, 
        perSlideRotate: 1, 
      }}
      slidesPerView={1}
      spaceBetween={10}
      navigation={matches ? true : false}
      breakpoints={{
        640: { slidesPerView: 2 },
        860: { slidesPerView: 3 },
        1280: { slidesPerView: 4 },
      }}
      >
        {React.Children.map(children, (child) =>
          React.isValidElement(child) ? (
            <SwiperSlide key={child.key}>{child}</SwiperSlide>
            ) : (
            { child }
        ))}
      </Swiper>
  );
}
