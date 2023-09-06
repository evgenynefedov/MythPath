import React, { useState, useEffect } from "react";
import * as libraryStorage from "./../../services/libraryStorage";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import NavBar from "./NavBar";
import SpellSelector from "./SpellSelector";

export default function Wizard() {
  const STEPS = [
    {
      name: "World",
      value: null,
      isMultiselector: false,
    },
    {
      name: "Main character",
      value: null,
      isMultiselector: false,
    },
    {
      name: "Additional characters",
      value: null,
      isMultiselector: true,
    },
    {
      name: "Locations",
      value: null,
      isMultiselector: false,
    },
  ];

  const stepsCount = STEPS.length;

  const [stepIndex, setStepIndex] = useState(0);
  const [steps, setSteps] = useState(STEPS);
  const [spells, setSpells] = useState(false);

  const makeStep = (shift) => {
    const newStepIndex = stepIndex + shift;

    if (newStepIndex >= 0 && newStepIndex <= stepsCount - 1) {
      setStepIndex(newStepIndex);
      setSpells(false);
    } else if (stepIndex == stepsCount - 1) {
      console.log("invoke textGenereate service");
    }
  };

  const updateStep = (value) => {
    setSteps((previous) => (previous[stepIndex].value = value));
  };

  const getSelectedWorldId = () => {
    return steps[0].value ? steps[0].value.id : null;
  };

  const getSpells = async function (stepName) {
    let stepSpells = false;
    if (stepName == "World") {
      stepSpells = await libraryStorage.getWorlds();
    } else if (stepName == "Main character") {
      stepSpells = await libraryStorage.getCharacters(
        "en",
        getSelectedWorldId()
      );
    } else if (stepName == "Additional characters") {
      stepSpells = await libraryStorage.getCharacters(
        "en",
        getSelectedWorldId()
      );
    } else if (stepName == "Locations") {
      stepSpells = await libraryStorage.getLocations(
        "en",
        getSelectedWorldId()
      );
    }
    setSpells(stepSpells);
  };

  useEffect(() => {
    getSpells(steps[stepIndex].name);
  }, [stepIndex]);

  return (
    <Container>
      <Typography variant="h5" component="h1" textAlign="center" mt={2} mb={1}>
        {STEPS[stepIndex].name}
      </Typography>

      {spells && (
        <SpellSelector
          spells={spells}
          step={steps[stepIndex].value}
          isMultiselector={steps[stepIndex].isMultiselector}
          updateStep={updateStep}
        />
      )}

      <NavBar
        stepsCount={stepsCount}
        stepIndex={stepIndex}
        isSelected={steps[stepIndex].value !== "undefined" ? true : false}
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
