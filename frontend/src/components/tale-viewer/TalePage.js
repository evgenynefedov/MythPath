import React from "react";
import { Typography, Box, CardMedia } from "@mui/material";

import { CONSTANTS } from "../../constants";

export default function TalePage({ page, tittle }) {
  const imageBaseLink = page.img.startsWith("/")
    ? CONSTANTS.cloudinaryBaseLink + page.img
    : CONSTANTS.cloudinaryUploadBaseLink + page.img;

  return (
    <Box elevation={3} className="tale_page">
      <>
        <CardMedia image={imageBaseLink} className="tale_page__img">
          <Typography variant="h3">{tittle}</Typography>
        </CardMedia>
        <Typography variant="body2" className="tale_page__text">
          {page.text}
        </Typography>
      </>
    </Box>
  );
}
