import * as React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Typography, Box, Select, MenuItem } from "@mui/material";
// import Container from "@mui/material/Container";
// import Typography from "@mui/material/Typography";
// import Box from "@mui/material/Box";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
// import Select from '@mui/material/Select';
// import MenuItem from '@mui/material/MenuItem';

export default function Onboarding({themes, changeTheme, selected}) {
  function handleChange(event) {
    changeTheme(event.target.value)
  }
  return (
    <Container>
      <Container>
        <Typography
          variant="h1"
          textAlign="center"
          mt={2}
          mb={1}
        >
          Step into a world of wonder and magic with <b>MythPath!</b>
        </Typography>
        <Typography variant="body1" textAlign="center">
          Is there anything more enchanting than a captivating fairytale? We
          believe that every child deserves a story tailored just for them, and
          that's exactly what MythPath is here to provide. Our app is not just a
          storytelling platform; it's a portal to an enchanting world where
          imagination meets reality.
        </Typography>

        <Typography variant="subtitle1" mt={2}>
          🧚‍♀️ AI Magic
        </Typography>
        <Typography variant="body2">
          MythPath uses advanced AI to craft unique fairytales that come to
          life, blending entertainment and education like never before!
        </Typography>

        {/* <Typography variant="subtitle1" mt={2}>
          📚 Personalized Stories
        </Typography>
        <Typography variant="body2">
          Each child is one-of-a-kind, and so are their stories on MythPath.
          Whether they dream of knights, explorers, or fairies, our tales match
          their uniqueness.
        </Typography>

        <Typography variant="subtitle1" mt={2}>
          🎉 Join the Adventure
        </Typography>
        <Typography variant="body2">
          Your child's adventure begins here, and with MythPath, the
          possibilities are endless. Let the magic of storytelling lead the way!
        </Typography> */}
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selected}
          label="Age"
          onChange={handleChange}
        >
          {themes.map((theme) => <MenuItem key={theme} value={theme}>{theme}</MenuItem>)}
        </Select>
      </Container>
      <Box textAlign="center" mt={4}>
        <Link to="/wizard">
          <Button
            variant="contained"
            size="medium"
            endIcon={<AutoFixHighIcon color="primary"/>}
          >
            Create Fairytale!
          </Button>
        </Link>
      </Box>
    </Container>
  );
}
