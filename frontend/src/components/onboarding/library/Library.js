import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import LibraryItem from "./LibraryItem";
import Grid from "@mui/material/Grid";

export default function Library({
  title,
  tales,
  updateLibraries,
  withControls,
}) {
  return (
    tales.length > 0 && (
      <Box
        sx={{
          mt: 2,
          pt: 1,
          pb: 5,
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h2" my={1}>
            {title}
          </Typography>
          <Box
            sx={{
              p: 2,
            }}
          >
            <Grid container spacing={2}>
              {tales.map((i) => (
                <LibraryItem
                  key={i.id}
                  taleId={i.id}
                  cover={i.tale.cover ? i.tale.cover : i.tale.pages[0].img}
                  title={i.tale.title}
                  userUUID={i.userUUID}
                  isPublic={i.isPublic}
                  updateLibraries={updateLibraries}
                  withControls={withControls}
                />
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
    )
  );
}
