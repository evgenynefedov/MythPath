import * as React from "react";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { Paper } from "@mui/material";

/**
 * Story "spell" wizard navbar.
 * Based on example: https://mui.com/material-ui/react-stepper/#progress
 * @param {props} props
 * @param {number} props.stepsCount Total count of steps
 * @param {number} props.stepIndex Current step index
 * @param {boolean} props.isSelected Did user select  the world, character, etc. on this step
 * @param {function} props.back Callback for Back button handler
 * @param {function} props.next Callback for Next/Skip/Create button handler
 * @returns
 */
export default function NavBar({
  stepsCount,
  stepIndex,
  isSelected,
  back,
  next,
}) {
  const theme = useTheme();
  return (
    <Paper>
      <MobileStepper
        variant="progress"
        steps={stepsCount}
        position="static"
        activeStep={stepIndex}
        sx={{ flexGrow: 1 }}
        nextButton={
          <Button
            size="large"
            onClick={next}
            variant={isSelected ? "outlined" : null}
          >
            {stepIndex === stepsCount - 1
              ? "Create"
              : isSelected
              ? "Next"
              : "Skip"}
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="large" onClick={back} disabled={stepIndex === 0}>
            {stepIndex !== 0 &&
              <>
                {theme.direction === "rtl" ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
              </>
            }
            Back
          </Button>
        }
      />
    </Paper>
  );
}
