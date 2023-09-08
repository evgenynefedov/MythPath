import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Box, Paper } from "@mui/material";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useSwipeable } from "react-swipeable";
// import { textGenerator } from "../../services/textGenerator";
// import storyTemplate from "../../Data/fantasy_story_template.json";
import { splitStoryIntoPages } from "../../Utils/splitIntoPages";
import * as taleStorage from "./../../services/taleStorage";
import TalePage from "./TalePage";
// import { TaleImage } from "./TaleImage";
// import { TaleText } from "./TaleText";
import { TaleControls } from "./TaleControls";

export default function TaleViewer() {
  const [currentPage, setCurrentPage] = useState(0);
  const [pages, setPages] = useState([]);

  useEffect(() => {
    async function fetchStory() {
      //const story = await textGenerator(storyTemplate);
      const story = await taleStorage.getTale();
      const newPages = splitStoryIntoPages(story);
      setPages(newPages);
    }
    fetchStory();
  }, []);

  const handleNext = () =>
    setCurrentPage((prev) => Math.min(pages.length - 1, prev + 1));
  const handlePrevious = () => setCurrentPage((prev) => Math.max(0, prev - 1));

  const handlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrevious(),
  });

  return (
    <Paper elevation={3} style={{ height: "100vh", overflow: "hidden" }}>
      <Box
        {...handlers}
        style={{
          height: "100%",
          padding: "16px",
          display: "flex",
          flexDirection: "column",
          position: "relative"
        }}
      >
        {/* <TaleImage
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6glj1p7amTgV5fYBDvNAs0y9jYe4XgaI9siuXYBsq&s"
          alt="Tale image"
        />
        <Typography variant="h5" style={{ margin: "16px 0" }}>
          Page {currentPage + 1}
        </Typography>
        <TaleText
          page={pages[currentPage]}
          isLastPage={currentPage === pages.length - 1}
        /> */}
        <TalePage page={pages[currentPage]}/>
        <TaleControls handlePrevious={handlePrevious} handleNext={handleNext} steps={pages.length} currentPage={currentPage} />
        <Link to="/" style={{
              position: "absolute",
              top: "20px",
              left: "20px",
            }} >
          <HighlightOffIcon style={{backgroundColor: "white",}}/>
        </Link>
      </Box>
    </Paper>
  );
}
