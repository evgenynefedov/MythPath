import React, { useState, useEffect } from "react";
import { getLibraryData } from "./../../services/libraryStorage";
import { textGenerator } from "./../../services/textGenerator";
import * as taleStorage from "./../../services/taleStorage";
import { useNavigate } from "react-router-dom";
import { Container, Box, Snackbar, IconButton, Button } from "@mui/material";
import NavBar from "./NavBar";
import SpellSelector from "./SpellSelector";
import TaleLoader from "../tale-loader/TaleLoader";
import generatePromptData from "../../services/generatePromptData";
import responseToTale from "../../services/responseToTale";
import StoryParams from "./StoryParams";
import StoryParamsConfig from "../../Data/storyParamsConfig.json";
import getRandomElementFromArray from "../../Utils/getRandomElementFromArray";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import Casino from "@mui/icons-material/Casino";

const STEPS = [
  ...StoryParamsConfig.steps.map((step) => ({
    ...step,
    value: step.isMulti ? [] : {},
    isSpellSelector: true,
  })),
  {
    code: "story_params",
    isSpellSelector: false,
  },
];

/**
 * number of randomly selected items on skipped steps
 * (can be lower if random values intersect)
 */
const RANDOM_MULTI_ITEMS_COUNT = 2;

export default function Wizard() {
  const navigate = useNavigate();
  const stepsCount = STEPS.length;

  const [steps, setSteps] = useState(STEPS);
  const [stepIndex, setStepIndex] = useState(0);
  /** array of possible values for current step */
  const [spells, setSpells] = useState([]);
  const [isLoading, setIsloading] = useState(false);

  function SnackbarAction({ moreAction }) {
    return (
      <>
        {moreAction}
        <IconButton
          size="small"
          aria-label="close"
          color="inherit"
          onClick={hideSnackbar}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      </>
    );
  }

  const [snackbarProps, setSnackbarProps] = useState({
    open: false,
    message: "",
    action: <SnackbarAction />,
  });

  function hideSnackbar() {
    setSnackbarProps({ ...snackbarProps, open: false });
  }

  function showSnackbar(message, moreAction) {
    setSnackbarProps({
      open: true,
      message: message,
      action: <SnackbarAction moreAction={moreAction} />,
    });
  }

  const getStep = () => steps[stepIndex];
  const setStep = (step) => setSteps(steps.with(stepIndex, step));

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

  function setRandomValues() {
    if (getStep().isMulti) {
      const rendomItemsCount = Math.min(
        RANDOM_MULTI_ITEMS_COUNT,
        spells.length
      );
      const randomSpells = [
        ...new Set(
          [...Array(rendomItemsCount).keys()].map(() =>
            getRandomElementFromArray(spells)
          )
        ),
      ];

      setStep({ ...getStep(), value: randomSpells, isRandom: true });
    } else {
      const randomSpell = getRandomElementFromArray(spells);
      setStep({ ...getStep(), value: randomSpell, isRandom: true });
    }
    showSnackbar(
      `${getStep().text.title.en} was choosen by magic`,
      <Casino fontSize="small" />
    );
  }

  function isEmpty(value) {
    return Object.keys(value ?? {}).length === 0;
  }

  function next() {
    if (isEmpty(getStep().value)) {
      setRandomValues();
    } else {
      hideSnackbar();
    }
    makeStep(1);
  }

  function back() {
    hideSnackbar();
    makeStep(-1);
  }

  /**
   * Toggles selection: updates steps[stepIndex].value with selection/deselection in spell object
   * @param {*} spell
   */
  const toggleStep = (spell) => {
    let value = getStep().value;

    if (getStep().isMulti) {
      const indexToDelete = value.findIndex((e) => e.id === spell.id);

      if (indexToDelete !== -1) {
        value.splice(indexToDelete, 1);
      } else {
        value.push(spell);
        showSnackbar(
          `You have chosen some ${getStep().text.title.en}, you can add more`
        );
      }
    } else {
      value = spell.id === getStep().value?.id ? {} : spell;
      if (!isEmpty(value)) {
        showSnackbar(
          `You have chosen ${getStep().text.title.en}`,
          <Button size="small" onClick={next} variant="outlined">
            Next
            <KeyboardArrowRight />
          </Button>
        );
      }
    }
    setStep({
      ...getStep(),
      value: value,
      isRandom: isEmpty(value),
    });
  };

  const fetchSpells = async function (stepCode) {
    const getWorldId = () => steps[0]?.value?.id;
    const getCharacterId = () => steps[1]?.value?.id;

    const sortBySelectedWorld = (spells) =>
      spells.sort(
        (a, b) => (b.world_id === getWorldId()) - (a.world_id === getWorldId())
      );

    let items = await getLibraryData(stepCode, "en");

    switch (stepCode) {
      case "main_character":
        return sortBySelectedWorld(items);
      case "additional_characters":
        return sortBySelectedWorld(
          items.filter((character) => character.id !== getCharacterId())
        );
      case "locations":
        return items.filter((item) => item.world_id === getWorldId());
      default:
        return items;
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
    const currentStep = getStep();
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
            {getStep().isSpellSelector ? (
              spells?.length ? (
                <SpellSelector
                  spells={spells}
                  step={getStep()}
                  isMultiselector={getStep().isMulti}
                  updateStep={toggleStep}
                />
              ) : null
            ) : (
              <StoryParams
                steps={steps.filter((step) => step.isSpellSelector)}
                createHandler={() => makeStep(1)}
              />
            )}
            <Snackbar
              anchorOrigin={{ vertical: "top", horizontal: "left" }}
              {...snackbarProps}
            />
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
                getStep().isSpellSelector && !isEmpty(getStep().value)
              }
              back={back}
              next={next}
            />
          </Box>
        </Box>
      )}
    </>
  );
}
