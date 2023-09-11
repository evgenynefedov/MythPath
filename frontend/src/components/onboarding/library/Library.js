import React, { useEffect } from "react";
import * as taleStorage from "../../../services/taleStorage";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import LibraryItem from "./LibraryItem";
import Grid from "@mui/material/Grid";

export default function Library() {
  const [tales, setTales] = React.useState([]);

  useEffect(() => {
    taleStorage.getTales().then((t) => setTales(t));
  }, []);

  useEffect(() => {
    console.log(tales);
  }, [tales]);

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
          <Typography
            variant="h2"
            my={1}
          >
            Your library
          </Typography>
          <Box
            sx={{
              p: 2
            }}
          >
            <Grid container spacing={2}>
              {tales.map((i) => (
                <LibraryItem
                  key={i.id}
                  id={i.id}
                  cover={i.tale.cover ? i.tale.cover : i.tale.pages[0].img}
                  title={i.tale.title}
                />
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
    )
  );
}
