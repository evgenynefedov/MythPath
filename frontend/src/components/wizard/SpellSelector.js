import { useState } from "react";

import { MobileStepper, Button, Box } from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { useSwipeable } from "react-swipeable";

import SpellCard from "./SpellCard";
export default function SpellSelector({
  spells,
  step,
  updateStep,
  isMultiselector,
}) {
  const maxSteps = spells.length;
  const [activeStep, setActiveStep] = useState(0);
  const handlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handleBack(),
  });
  function handleNext() {
    if (activeStep === maxSteps - 1) {
      setActiveStep(0);
    } else {
      setActiveStep(activeStep + 1);
    }
  }
  function handleBack() {
    if (activeStep === 0) {
      setActiveStep(maxSteps - 1);
    } else {
      setActiveStep(activeStep - 1);
    }
  }
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
    <>
      <Box
        {...handlers}
        style={{
          height: "300px",
          padding: "16px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {step.name}
        <SpellCard
          spell={spells[activeStep]}
          select={selectHandler}
          selected={isSelected(spells[activeStep].id)}
        />
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button size="small" onClick={handleNext}>
              Next
              <KeyboardArrowRight />
            </Button>
          }
          backButton={
            <Button size="small" onClick={handleBack}>
              <KeyboardArrowLeft />
              Back
            </Button>
          }
        />
      </Box>
    </>
  );
}
