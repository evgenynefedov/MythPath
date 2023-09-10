import "./TaleViewer.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Box, Paper } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { useSwipeable } from "react-swipeable";
// import { textGenerator } from "../../services/textGenerator";
// import storyTemplate from "../../Data/fantasy_story_template.json";
// import { splitStoryIntoPages } from "../../Utils/splitIntoPages";
import * as taleStorage from "../../services/taleStorage";
import TalePage from "./TalePage";
// import { TaleImage } from "./TaleImage";
// import { TaleText } from "./TaleText";
import { TaleControls } from "./TaleControls";
import { useParams } from "react-router";

export default function TaleViewer() {
  const { taleId } = useParams();

  const [currentPage, setCurrentPage] = useState(0);
  const [story, setStory] = useState({});

  useEffect(() => {
    async function fetchStory() {
      const newStory = await taleStorage.getTaleById(taleId);
      setStory(newStory ? newStory.tale : {});
    }
    fetchStory();
  }, []);

  useEffect(() => {}, [story]);

  const handleNext = () =>
    setCurrentPage((prev) => Math.min(story.pages.length - 1, prev + 1));
  const handlePrevious = () => setCurrentPage((prev) => Math.max(0, prev - 1));

  const handlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrevious(),
  });
  return (
    <Paper elevation={3} style={{ height: "100vh" }}>
      <Box {...handlers} className="tale_container">
        {story.pages && story?.pages?.length !== 0 && (
          <>
            <TalePage page={story.pages[currentPage]} tittle={story.title} />
            <TaleControls
              handlePrevious={handlePrevious}
              handleNext={handleNext}
              steps={story.pages.length}
              currentPage={currentPage}
            />
          </>
        )}
        <Link
          to="/"
          style={{
            position: "absolute",
            top: "20px",
            left: "20px",
          }}
        >
          <HighlightOffIcon />
        </Link>
      </Box>
    </Paper>
  );
}
