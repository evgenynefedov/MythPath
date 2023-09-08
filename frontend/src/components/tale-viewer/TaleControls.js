import React from "react";
import { Paper, MobileStepper, Button } from "@mui/material";
import {KeyboardArrowLeft, KeyboardArrowRight} from "@mui/icons-material";

export const TaleControls = ({ handlePrevious, handleNext, steps, currentPage }) => (
  <Paper>
    <MobileStepper
      variant="progress"
      steps={steps}
      position="static"
      activeStep={currentPage}
      nextButton={
        <Button size="small" onClick={handleNext} disabled={(currentPage === steps - 1) ? true : false}>
          Next
          <KeyboardArrowRight />
        </Button>
      }
      backButton={
        <Button size="small" onClick={handlePrevious} disabled={currentPage === 0 ? true : false}>
          <KeyboardArrowLeft />
          Back
        </Button>
      }
    />
  </Paper>
);
