import React, { useState, useEffect } from "react";
import * as libraryStorage from "./../../services/libraryStorage";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import NavBar from "./NavBar";
import SpellSelector from "./SpellSelector";

export default function Wizard() {
  const STEPS = [
    "world",
    "main character",
    "additional characters",
    "locations",
    "generating",
  ];

  // const STEPS_LIBRARIES_METHODS = {
  //   world: libraryStorage.getWorlds,
  //   "main character": libraryStorage.getCharacters,
  //   "additional characters": libraryStorage.getCharacters,
  //   locations: libraryStorage.getLocations,
  // };

  const stepsCount = STEPS.length;

  const [stepIndex, setStepIndex] = useState(0);
  const [promptParams, setPromptParams] = useState([]);
  const [stepLibraries, setStepLibraries] = useState([]);

  const makeStep = (shift) => {
    const newStepIndex = stepIndex + shift;
    if (newStepIndex >= 0 && newStepIndex <= stepsCount) {
      setStepIndex(newStepIndex);
    }
  };

  const updatePromptParam = (value) => {
    setPromptParams((previous) => (previous[stepIndex] = value));
  };

  useEffect(() => {
    if (typeof stepLibraries[stepIndex] == "undefined") {
      if (STEPS[stepIndex] == "world") {
        libraryStorage.getWorlds().then((libArray) => {
          setStepLibraries((previous) => (previous[stepIndex] = libArray));
        });
      }
    }
  }, [stepIndex]);

  useEffect(() => {
    console.log(stepLibraries);
  }, [stepLibraries]);

  return (
    <Container>
      <Typography variant="h5" component="h1" textAlign="center" mt={2} mb={1}>
        {STEPS[stepIndex]}
      </Typography>

      <SpellSelector
        stepLibrary={stepLibraries[stepIndex]}
        promptParam={promptParams[stepIndex]}
        updatePromptParam={updatePromptParam}
      />

      <NavBar
        stepsCount={stepsCount}
        stepIndex={stepIndex}
        isSelected={
          typeof promptParams[stepIndex] !== "undefined" ? true : false
        }
        back={() => {
          makeStep(-1);
        }}
        next={() => {
          makeStep(1);
        }}
      />
    </Container>
  );
}
