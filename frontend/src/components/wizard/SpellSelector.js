import { Box, Chip, Stack, Typography } from "@mui/material";
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

  const isSelected = (id) =>
    isMultiselector && Array.isArray(step?.value)
      ? step.value.some((el) => el.id === id)
      : step?.value?.id === id;

  return (
    <Box mt={2}>
      <Typography variant="h4" gutterBottom>
        {STEP_NAMES[step.code]}
        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
          {spells
            .filter((spell) => isSelected(spell.id))
            .map((spell) => (
              <Chip
                label={spell.name}
                key={spell.id}
                onDelete={() => selectHandler(spell)}
              />
            ))}
        </Stack>
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
