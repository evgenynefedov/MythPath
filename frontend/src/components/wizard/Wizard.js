import React, { useState, useEffect } from "react";
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
import StoryParams from "./StoryParams";
import StoryParamsConfig from "../../Data/storyParamsConfig.json";

const SPELL_STEPS = [
  {
    code: "world",
    isMulti: false,
  },
  {
    code: "main_character",
    isMulti: false,
  },
  {
    code: "additional_characters",
    isMulti: true,
  },
  {
    code: "locations",
    isMulti: true,
  },
];

const STEPS = [
  ...SPELL_STEPS.map((step) => ({
    ...step,
    value: step.isMulti ? [] : {},
    isSpellSelector: true,
  })),
  {
    code: "story_params",
    isSpellSelector: false,
  },
];

export default function Wizard() {
  const navigate = useNavigate();

  const stepsCount = STEPS.length;

  const [steps, setSteps] = useState(STEPS);
  const [stepIndex, setStepIndex] = useState(0);
  /** array of possible values for current step */
  const [spells, setSpells] = useState([]);

  const [isLoading, setIsloading] = useState(false);

  const makeStep = (shift) => {
    const newStepIndex = stepIndex + shift;

    if (newStepIndex >= 0 && newStepIndex <= stepsCount - 1) {
      setStepIndex(newStepIndex);
      setSpells([]);
    } else if (stepIndex === stepsCount - 1) {
      //TO DO: make preprocessing "steps" before invokation of "generateTale"
      generateTale(steps.filter((step) => step.isSpellSelector));
    }
  };

  /**
   * Toggles selection: updates steps[stepIndex].value with selection/deselection in spell object
   * @param {*} spell
   */
  const updateStep = (spell) => {
    const currentStep = steps[stepIndex];
    let value = currentStep.value;

    if (currentStep.isMulti) {
      const indexToDelete = value.findIndex((e) => e.id === spell.id);

      if (indexToDelete !== -1) {
        value.splice(indexToDelete, 1);
      } else {
        value.push(spell);
      }
    } else {
      value = spell.id === steps[stepIndex].value?.id ? {} : spell;
    }
    setSteps(steps.with(stepIndex, { ...currentStep, value }));
  };

  const fetchSpells = async function (stepCode) {
    const getWorldId = () => steps[0]?.value?.id;
    const getCharacterId = () => steps[1]?.value?.id;
    const sortBySelectedWorld = (spells) =>
      spells.toSorted(
        // works because (true - false) === -1
        (a, b) => (b.world_id === getWorldId()) - (a.world_id === getWorldId())
      );
    switch (stepCode) {
      case "world":
        return await libraryStorage.getWorlds();
      case "main_character":
        return sortBySelectedWorld(await libraryStorage.getCharacters("en"));
      case "additional_characters":
        return sortBySelectedWorld(
          (await libraryStorage.getCharacters("en")).filter(
            (character) => character.id !== getCharacterId()
          )
        );
      case "locations":
        return await libraryStorage.getLocations("en", getWorldId());
      default:
    }
  };

  const generateTale = async function (storySteps) {
    const storyParameters = generatePromptData(storySteps);
    setIsloading(true);
    const textAndTitlesJson = await textGenerator(storyParameters);
    // TODO: move deserialization to textGenerator()
    const textAndTitles = JSON.parse(textAndTitlesJson);
    let story = responseToTale(storySteps, textAndTitles);
    if (story) {
      console.log("story was generated with params:");
      console.log(storyParameters);
      console.log("story :");
      console.log(story);

      taleStorage.saveTale(story).then((taleId) => {
        navigate(`/tale-viewer/${taleId}`);
      });
    } else {
      console.log("something wrong in generating of the story");
    }
  };

  useEffect(() => {
    const currentStep = steps[stepIndex];
    if (currentStep.isSpellSelector) {
      fetchSpells(currentStep.code).then((r) => {
        setSpells(r);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stepIndex]);

  return (
    <>
      {isLoading ? (
        <TaleLoader />
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
          }}
        >
          <Container maxWidth="lg" style={{ padding: 0 }}>
            {steps[stepIndex].isSpellSelector ? (
              spells?.length ? (
                <SpellSelector
                  spells={spells}
                  step={steps[stepIndex]}
                  isMultiselector={steps[stepIndex].isMulti}
                  updateStep={updateStep}
                />
              ) : null
            ) : (
              <StoryParams
                steps={steps.filter((step) => step.isSpellSelector)}
                createHandler={() => makeStep(1)}
              />
            )}
          </Container>
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
              stepsCount={stepsCount}
              stepIndex={stepIndex}
              isSelected={
                steps[stepIndex].isSpellSelector &&
                !(
                  Object.keys(steps[stepIndex].value).length === 0 ||
                  steps[stepIndex].value.length === 0
                )
              }
              back={() => makeStep(-1)}
              next={() => makeStep(1)}
            />
          </Box>
        </Box>
      )}
    </>
  );
}
