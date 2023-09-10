import { Box, Chip, Stack, Typography } from "@mui/material";
import Carousel from "../ui/Carousel";

import SpellCard from "./SpellCard";
import { center } from "@cloudinary/url-gen/qualifiers/textAlignment";

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
    <>
      <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <Box mt={2}>
          <Typography variant="h4" gutterBottom>
            {STEP_NAMES[step.code]}
          </Typography>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Box sx={{ position: "relative", minHeight: "300px" }}>
            {" "}
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
            <Box
              sx={{
                position: "absolute",
                left: 0,
                right: 0,
                top: "calc(100% + 1em)",
              }}
            >
              <Stack
                direction="row"
                spacing={1}
                flexWrap="wrap"
                alignItems="flex-start"
                justifyContent={center}
                rowGap={1}
              >
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
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
