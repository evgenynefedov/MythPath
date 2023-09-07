import { Box, Typography } from "@mui/material";
import Carousel from "../ui/Carousel";
import SpellCard from "./SpellCard";

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
      <Carousel>
        {spells.map((spell) => (
          <SpellCard
            key={spell.id}
            spell={spell}
            select={() => selectHandler(spell)}
            selected={isSelected(spell.id)}
          />
        ))}
      </Carousel>
    </Box>
  );
}
