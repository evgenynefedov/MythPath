import React, { useState, useEffect } from "react";
import * as libraryStorage from "./../../services/libraryStorage";
import { textGenerator } from "./../../services/textGenerator";
import { useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import NavBar from "./NavBar";
import SpellSelector from "./SpellSelector";
import TaleLoader from "../tale-loader/TaleLoader";

export default function Wizard() {
  const navigate = useNavigate();

  const STEPS = [
    {
      name: "World",
      isMulti: false,
      value: {},
    },
    {
      name: "Main character",
      isMulti: false,
      value: {},
    },
    {
      name: "Additional characters",
      isMulti: true,
      value: [],
    },
    {
      name: "Locations",
      isMulti: true,
      value: [],
    },
  ];

  const stepsCount = STEPS.length;

  const [stepIndex, setStepIndex] = useState(0);
  const [steps, setSteps] = useState(STEPS);
  const [spells, setSpells] = useState(false);

  const [isLoading, setIsloading] = useState(false);

  const makeStep = (shift) => {
    const newStepIndex = stepIndex + shift;

    if (newStepIndex >= 0 && newStepIndex <= stepsCount - 1) {
      setStepIndex(newStepIndex);
      setSpells(false);
    } else if (stepIndex == stepsCount - 1) {
      //TO DO: make preprocessing "steps" before invokation of "generateTale"
      generateTale(steps);
    }
  };

  const updateStep = (spell) => {
    let updatedSteps = [...steps];

    if (steps[stepIndex].isMulti) {
      let indexToDelete = updatedSteps[stepIndex].value.findIndex(
        (e) => e.id == spell.id
      );

      indexToDelete != -1
        ? updatedSteps[stepIndex].value.splice(indexToDelete, 1)
        : updatedSteps[stepIndex].value.push(spell);
    } else {
      spell.id == steps[stepIndex].value?.id
        ? (updatedSteps[stepIndex].value = {})
        : (updatedSteps[stepIndex].value = spell);
    }
    setSteps(updatedSteps);
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

  const generateTale = async function (storyParameters) {
    let story = false;
    setIsloading(true);
    //TO DO: delete setTimeout (it's only to show loader now)
    setTimeout(async () => {
      story = await textGenerator(storyParameters);
      if (story) {
        console.log("story was generated with params:");
        console.log(storyParameters);
        navigate("/tale-viewer/0");
      } else {
        console.log("something wrong in generating of the story");
      }
    }, 3000);
  };

  useEffect(() => {
    getSpells(steps[stepIndex].name);
  }, [stepIndex]);

  return (
    <>
      {isLoading ? (
        <TaleLoader />
      ) : (
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
              isMultiselector={steps[stepIndex].isMulti}
              updateStep={updateStep}
            />
          )}
        </Container>
      )}
    </>
  );
}
