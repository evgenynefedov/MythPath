import React from "react";
import { Typography } from "@mui/material";

export const TaleText = ({ page, isLastPage }) => (
  <Typography variant="body1" style={{ flex: "2" }}>
    {page} {isLastPage ? null : <span>...</span>}
  </Typography>
);
