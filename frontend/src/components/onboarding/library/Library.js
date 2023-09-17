import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
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
      <Container>
        <Typography variant="h2" my={1}>
          {title}
        </Typography>
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
      </Container>
    )
  );
}
