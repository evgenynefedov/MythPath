import React from "react";
import { Paper, MobileStepper, Button } from "@mui/material";
import {KeyboardArrowLeft, KeyboardArrowRight} from "@mui/icons-material";

export const TaleControls = ({ handlePrevious, handleNext, steps, currentPage }) => (
  <Paper>
    <MobileStepper
      steps={steps}
      position="static"
      activeStep={currentPage}
      nextButton={
        <Button size="small" onClick={handleNext}>
          Next
          <KeyboardArrowRight />
        </Button>
      }
      backButton={
        <Button size="small" onClick={handlePrevious}>
          <KeyboardArrowLeft />
          Back
        </Button>
      }
    />
  </Paper>
  // <Box
  //   style={{
  //     margin: "16px 0 32px",
  //     display: "flex",
  //     justifyContent: "space-between",
  //   }}
  // >
  //   <Button variant="contained" onClick={handlePrevious}>
  //     Previous
  //   </Button>
  //   <Button variant="contained" onClick={handleNext}>
  //     Next
  //   </Button>
  // </Box>
);
