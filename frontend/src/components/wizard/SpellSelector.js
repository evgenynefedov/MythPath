import { Box, Chip, Stack, Typography, Container } from "@mui/material";
import Carousel from "../ui/Carousel";
import SpellCard from "./SpellCard";
import StoryParamsConfig from "../../Data/storyParamsConfig.json";

export default function SpellSelector({
  spells,
  step,
  updateStep,
  isMultiselector,
  language = "en",
}) {
  const currentStepConfig = StoryParamsConfig.steps.find(
    (s) => s.code === step.code
  );

  function selectHandler(spell) {
    updateStep(spell);
  }

  const isSelected = (id) =>
    isMultiselector && Array.isArray(step?.value)
      ? step.value.some((el) => el.id === id)
      : step?.value?.id === id;

  return (
    <Box mt={2}>
      <Typography variant="h1" gutterBottom style={{ textAlign: "center" }}>
        {currentStepConfig?.text?.description[language]}
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
      <Container>
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
      </Container>
    </Box>
  );
}
