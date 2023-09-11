import "./TaleViewer.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Box, Paper } from "@mui/material";
import { useSwipeable } from "react-swipeable";
import Icons from './../../themes/sprite.svg'
// import { textGenerator } from "../../services/textGenerator";
// import storyTemplate from "../../Data/fantasy_story_template.json";
// import { splitStoryIntoPages } from "../../Utils/splitIntoPages";
import * as taleStorage from "../../services/taleStorage";
import TalePage from "./TalePage";
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
        {story.pages && story?.pages?.length !== 0 && 
          <>
            <TalePage page={story.pages[currentPage]} tittle={story.title} />
            <TaleControls
              handlePrevious={handlePrevious}
              handleNext={handleNext}
              steps={story.pages.length}
              currentPage={currentPage}
            />
          </>
        }
        <Link to="/" style={{
              position: "absolute",
              top: "10px",
              right: "10px",
            }} >
              <svg className="close">
                <use href={`${Icons}#feathersCross`}/>
              </svg>
        </Link>
      </Box>
    </Paper>
  );
}
