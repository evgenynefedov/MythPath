import * as React from "react";
import { Box, Container, LinearProgress } from "@mui/material";

export default function TaleLoader() {
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        alignItems: "center",
        flexGrow: 1,
      }}
    >
      <Container maxWidth="sm">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src="https://images.squarespace-cdn.com/content/v1/520eab84e4b02d5660581bbb/1560883857233-4NYNW6AOSYY6RIMDTMWW/matt-anderson-canopy-wikia-fandom-dark-fairytales-hero-banner.png?format=2500w"
            // nice to have hear a picture of the current loading world
            width={450}
            alt="pic"
          />
        </Box>
        <LinearProgress sx={{ mt: 4 }} />
      </Container>
    </Box>
  );
}
