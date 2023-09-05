import React from "react";
import { Button, Box } from "@mui/material";

export const TaleControls = ({ handlePrevious, handleNext }) => (
  <Box
    style={{
      margin: "16px 0 32px",
      display: "flex",
      justifyContent: "space-between",
    }}
  >
    <Button variant="contained" onClick={handlePrevious}>
      Previous
    </Button>
    <Button variant="contained" onClick={handleNext}>
      Next
    </Button>
  </Box>
);
