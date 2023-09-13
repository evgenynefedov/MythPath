import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Typography, Box } from "@mui/material";
import Icons from "./../../themes/sprite.svg";
import Library from "./library/Library";
import * as taleStorage from "../../services/taleStorage";
import { getUserUUID } from "../../Utils/getUserUUID";

export default function Onboarding({ themes, changeTheme, selected }) {
  const [myLibrary, setMyLibrary] = React.useState([]);
  const [sharedLibrary, setsharedLibrary] = React.useState([]);

  const updateLibraries = () => {
    taleStorage
      .getListTales({ filter: { isPublic: { eq: true } } })
      .then((t) => setsharedLibrary(t));
    taleStorage
      .getListTales({ filter: { userUUID: { eq: getUserUUID() } } })
      .then((t) => setMyLibrary(t));
  };

  useEffect(() => {
    updateLibraries();
  }, []);

  function handleChange(event) {
    changeTheme(event.target.value);
  }
  return (
    <Container>
      <Container>
        <Typography variant="h1" mt={2} mb={1}>
          Step into a world of wonder and magic with <b>MythPath!</b>
        </Typography>
      </Container>

      <Library
        title="Shared stories"
        tales={sharedLibrary}
        updateLibraries={updateLibraries}
        withControls={false}
      />

      <Library
        title="My stories"
        tales={myLibrary}
        updateLibraries={updateLibraries}
        withControls={true}
      />

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
                <use href={`${Icons}#sparkles`} />
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
