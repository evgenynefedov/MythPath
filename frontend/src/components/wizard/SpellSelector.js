import { Box, Chip, Stack, Typography, Container, Button } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Carousel from "../ui/Carousel";
import SpellCard from "./SpellCard";
import SpellCardCustom from "./SpellCardCustom";
import StoryParamsConfig from "../../Data/storyParamsConfig.json";
import { useRef, useState } from "react";

export default function SpellSelector({
  spells,
  customSpells,
  step,
  updateStep,
  isMultiselector,
  language = "en",
  updateCustomSpells,
}) {
  const [newCardMode, setNewCardMode] = useState(true);

  const toggleNewCardMode = () => {
    setNewCardMode((previous) => (previous ? false : true));

    console.log(newCardMode);
  };

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
      <Button
        variant="contained"
        onClick={toggleNewCardMode}
        startIcon={<AddCircleIcon />}
      >
        Add
      </Button>
      <Carousel>
        <>
          {newCardMode && (
            <SpellCardCustom updateCustomSpells={updateCustomSpells} />
          )}
        </>
        {customSpells.map((cSpell) => (
          <SpellCard
            key={cSpell.id}
            spell={cSpell}
            select={() => selectHandler(cSpell)}
            selected={isSelected(cSpell.id)}
          />
        ))}

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
