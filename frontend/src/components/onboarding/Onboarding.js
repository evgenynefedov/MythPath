import * as React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Typography, Box } from "@mui/material";
import Icons from './../../themes/sprite.svg'
import Library from "./library/Library";

export default function Onboarding() {
  return (
    <Container>
      <Container>
        <Typography
          variant="h1"
          mt={2}
          mb={1}
        >
          Step into a world of wonder and magic with <b>MythPath!</b>
        </Typography>
      </Container>

      <Library />

      <Container maxWidth="md">
        <Typography variant="body1" textAlign="center" mt={2}>
          Is there anything more enchanting than a captivating fairytale? We
          believe that every child deserves a story tailored just for them, and
          that's exactly what MythPath is here to provide. Our app is not just a
          storytelling platform; it's a portal to an enchanting world where
          imagination meets reality.
        </Typography>
        <Typography variant="subtitle1" mt={2}>
          🧚‍♀️ AI Magic
        </Typography>
        <Typography variant="body1">
          MythPath uses advanced AI to craft unique fairytales that come to
          life, blending entertainment and education like never before!
        </Typography>
      </Container>
      <Box textAlign="center" mt={4}>
        <Link to="/wizard">
          <Button
            variant="contained"
            size="medium"
            endIcon={
              <svg>
                <use href={`${Icons}#sparkles`}/>
              </svg>
            }
          > 
            Create Fairytale!
          </Button>
        </Link>
      </Box>
    </Container>
  );
}
