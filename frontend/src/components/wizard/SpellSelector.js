import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import SpellCard from "./SpellCard";

import "swiper/css";
import "swiper/css/navigation";
import "./SpellSelector.css";

const STEP_NAMES = {
  world: "Choose world",
  main_character: "Choose main character",
  additional_characters: "Choose additional characters",
  locations: "Choose locations",
};

export default function SpellSelector({
  spells,
  step,
  updateStep,
  isMultiselector,
}) {
  function selectHandler(spell) {
    updateStep(spell);
  }
  function isSelected(id) {
    let result = false;
    if (
      (!isMultiselector && step?.value?.id === id) ||
      (isMultiselector &&
        step?.value?.length !== 0 &&
        step?.value?.findIndex((el) => el.id === id) >= 0)
    ) {
      result = true;
    }
    return result;
  }
  return (
    <Box mt={2}>
      <Typography variant="h4" gutterBottom>
        {STEP_NAMES[step.code]}
      </Typography>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          860: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {spells.map((spell) => (
          <SwiperSlide key={spell.id}>
            <SpellCard
              spell={spell}
              select={() => selectHandler(spell)}
              selected={isSelected(spell.id)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
