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
  stepsCount = 3,
  stepIndex = 0,
  isSelected = false,
  back,
  next,
}) {
  const theme = useTheme();

  //TODO: remove activeStep state when stepping logic will be handled in parent
  const [activeStep, setActiveStep] = React.useState(stepIndex);

  const handleNext = () => {
    next
      ? next()
      : activeStep < stepsCount - 1 &&
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    back ? back() : setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Paper>
      <MobileStepper
        variant="progress"
        steps={stepsCount}
        position="static"
        activeStep={activeStep}
        sx={{ flexGrow: 1 }}
        nextButton={
          <Button size="medium" onClick={handleNext}>
            {activeStep === stepsCount - 1
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
          <Button
            size="medium"
            onClick={handleBack}
            disabled={activeStep === 0}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Paper>
  );
}
