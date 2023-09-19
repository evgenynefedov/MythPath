import * as React from "react";
import { Box, Container, LinearProgress, Typography } from "@mui/material";
import "./TaleLoader.css";
import getRandomElementFromArray from "../../Utils/getRandomElementFromArray";
import { useState, useEffect } from "react";

export default function TaleLoader() {
  const QUOTES = [
    "The loading screen is the real villain in this story.",
    "If I had a magic wand, I'd use it to speed up this loading time.",
    "This loading time is longer than most fairy tale marriages.",
    "Once upon a time in a land far, far away, there was a loading bar that never reached its end",
    "I asked for a fairy tale, not a never-ending story of loading.",
    "In the time it's taking to load, I could have rescued the princess myself.",
    "Loading... Because even fairy godmothers need a coffee break.",
    "If this loading time were a witch, it'd be a wicked one.",
    "This loading bar is like Cinderella's carriage — it only lasts until midnight.",
    "In the time it's taking, I could have kissed a frog and built a castle.",
    "Rapunzel, let down your loading bar!",
    "Waiting for this fairy tale feels like I'm stuck in the 'Tower of Endless Loading.'",
    "Once upon a time, in a land filled with loading screens, our hero waited.",
    "I'm not saying this loading screen is slow, but I've aged enough to have a mid-life crisis since it started.",
    "Why did the loading screen cross the road? To get to the other buffering side.",
    "I've seen snails with turbochargers move faster than this loading bar.",
    "I've heard that if you stare at a loading screen long enough, you'll see a fairy cry.",
  ];

  const RELOAD_TIME = 8000;

  let [randomQuote, setRandomQuote] = useState(
    getRandomElementFromArray(QUOTES)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setRandomQuote(getRandomElementFromArray(QUOTES));
    }, RELOAD_TIME);
    return () => clearInterval(interval);
  });

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        alignItems: "center",
        flexGrow: 1,
        textAlign: "center",
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="h1" fontFamily="Kranky">
          {randomQuote}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        ></Box>
        <LinearProgress sx={{ mt: 4 }} />
      </Container>
    </Box>
  );
}
