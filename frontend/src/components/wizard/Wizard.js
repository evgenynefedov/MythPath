import React, { useState, useEffect } from "react";
import * as libraryStorage from "./../../services/libraryStorage";
import textGenerator from "./../../services/textGenerator";
import Container from "@mui/material/Container";
import NavBar from "./NavBar";
import SpellSelector from "./SpellSelector";

export default function Wizard() {
  const STEPS = [
    {
      name: "World",
      value: null,
    },
    {
      name: "Main character",
      value: null,
    },
    {
      name: "Additional characters",
      value: null,
    },
    {
      name: "Locations",
      value: null,
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

  const updateStep = (newValue) => {
    setSteps((previous) => {
      previous[stepIndex].value = newValue;
      console.log(previous);
      return previous;
    });
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
    //console.log(stepSpells);
    setSpells(stepSpells);
  };

  useEffect(() => {
    getSpells(steps[stepIndex].name);
  }, [stepIndex]);

  useEffect(() => {
    console.log(steps);
  }, [steps]);

  return (
    <Container>
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

      {spells && (
        <SpellSelector
          spells={spells}
          step={steps[stepIndex]}
          isMultiselector={
            steps[stepIndex].name == "Additional characters" ? true : false
          }
          updateStep={updateStep}
        />
      )}
    </Container>
  );
}
