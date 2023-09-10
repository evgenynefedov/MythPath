import React, { useState, useEffect, useRef } from "react";

import * as libraryStorage from "./../../services/libraryStorage";
import { textGenerator } from "./../../services/textGenerator";
import * as taleStorage from "./../../services/taleStorage";
import { useNavigate } from "react-router-dom";
import { Container, Box } from "@mui/material";
import NavBar from "./NavBar";
import SpellSelector from "./SpellSelector";
import TaleLoader from "../tale-loader/TaleLoader";
import generatePromptData from "../../services/generatePromptData";
import responseToTale from "../../services/responseToTale";

export default function Wizard() {
  const navigate = useNavigate();

  const STEPS = [
    {
      code: "world",
      isMulti: false,
      value: {},
    },
    {
      code: "main_character",
      isMulti: false,
      value: {},
    },
    {
      code: "additional_characters",
      isMulti: true,
      value: [],
    },
    {
      code: "locations",
      isMulti: true,
      value: [],
    },
  ];

  const stepsCount = STEPS.length;

  const navBarRef = useRef(null);
  const [navBarHeight, setNavBarHeight] = useState(0);
  const [stepIndex, setStepIndex] = useState(0);
  const [steps, setSteps] = useState(STEPS);
  const [spells, setSpells] = useState(false);

  const [isLoading, setIsloading] = useState(false);

  const makeStep = (shift) => {
    const newStepIndex = stepIndex + shift;

    if (newStepIndex >= 0 && newStepIndex <= stepsCount - 1) {
      setStepIndex(newStepIndex);
      setSpells(false);
    } else if (stepIndex === stepsCount - 1) {
      //TO DO: make preprocessing "steps" before invokation of "generateTale"
      generateTale(steps);
    }
  };

  const updateStep = (spell) => {
    let updatedSteps = [...steps];

    if (steps[stepIndex].isMulti) {
      let indexToDelete = updatedSteps[stepIndex].value.findIndex(
        (e) => e.id === spell.id
      );

      indexToDelete !== -1
        ? updatedSteps[stepIndex].value.splice(indexToDelete, 1)
        : updatedSteps[stepIndex].value.push(spell);
    } else {
      spell.id === steps[stepIndex].value?.id
        ? (updatedSteps[stepIndex].value = {})
        : (updatedSteps[stepIndex].value = spell);
    }
    setSteps(updatedSteps);
  };

  const getSelectedWorldId = () => {
    return steps[0].value ? steps[0].value.id : null;
  };

  const fetchSpells = async function (stepCode) {
    let stepSpells = false;
    if (stepCode === "world") {
      stepSpells = await libraryStorage.getWorlds();
    } else if (stepCode === "main_character") {
      stepSpells = await libraryStorage
        .getCharacters
        //"en",
        //getSelectedWorldId()
        ();
    } else if (stepCode === "additional_characters") {
      stepSpells = await libraryStorage
        .getCharacters
        //"en",
        //getSelectedWorldId()
        ();
    } else if (stepCode === "locations") {
      stepSpells = await libraryStorage.getLocations(
        "en",
        getSelectedWorldId()
      );
    }
    return stepSpells;
  };

  const generateTale = async function (steps) {
    const storyParameters = generatePromptData(steps);
    let story = false;
    setIsloading(true);
    let textAndTitles = await textGenerator(storyParameters);
    textAndTitles = JSON.parse(textAndTitles);
    story = responseToTale(steps, textAndTitles);

    taleStorage.saveTale(story);
    if (story) {
      console.log("story was generated with params:");
      console.log(storyParameters);
      console.log("story :");
      console.log(story);

      //TO DO: delete setTimeout (it's only to show loader now)
      //setTimeout(() => {
      navigate("/tale-viewer/0");
      //}, 3000);
    } else {
      console.log("something wrong in generating of the story");
    }
  };

  useEffect(() => {
    fetchSpells(steps[stepIndex].code).then((r) => {
      setSpells(r);
    });
  }, [stepIndex]);

  useEffect(() => {
    if (navBarRef.current) {
      const rect = navBarRef.current.getBoundingClientRect();
      setNavBarHeight(rect.height);
    }
  }, []);

  return (
    <>
      {isLoading ? (
        <TaleLoader />
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: `calc(100vh - ${navBarHeight}px)`,
            bgcolor: "#eeeeee",
          }}
        >
          {spells && (
            <SpellSelector
              spells={spells}
              step={steps[stepIndex]}
              isMultiselector={steps[stepIndex].isMulti}
              updateStep={updateStep}
            />
          )}
        </Box>
      )}
      <Box
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 999,
        }}
      >
        <NavBar
          ref={navBarRef}
          stepsCount={stepsCount}
          stepIndex={stepIndex}
          isSelected={
            !(
              Object.keys(steps[stepIndex].value).length === 0 ||
              steps[stepIndex].value.length === 0
            )
          }
          back={() => {
            makeStep(-1);
          }}
          next={() => {
            makeStep(1);
          }}
        />
      </Box>
    </>
  );
}
