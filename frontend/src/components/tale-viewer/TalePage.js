import React, { useEffect, useRef, useState } from "react";
import { Typography, Box, CardMedia } from "@mui/material";

import { getCloudinaryImage } from "../../services/cloudinary";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";

export default function TalePage({ page, tittle }) {
  const [size, setSize] = useState({ width: 100, height: 100 });
  const cardMediaRef = useRef();

  const coarseSize = (size) => Math.round(Math.exp(Math.round(Math.log(size))));

  useEffect(() => {
    const resizeObserver = new ResizeObserver((event) => {
      const newSize = {
        width: coarseSize(event[0].contentBoxSize[0].inlineSize),
        height: coarseSize(event[0].contentBoxSize[0].blockSize),
      };
      setSize(newSize);
    });
    if (cardMediaRef) {
      resizeObserver.observe(cardMediaRef.current);
    }
  }, [cardMediaRef]);

  return (
    <Box elevation={3} className="tale_page">
      <>
        <CardMedia
          ref={cardMediaRef}
          image={getCloudinaryImage(page.img)
            .resize(
              fill()
                .width(size.width)
                .height(size.height)
                .gravity(autoGravity())
            )
            .toURL()}
          className="tale_page__img"
        >
          <Typography variant="h3">{tittle}</Typography>
        </CardMedia>
        <Typography variant="body2" className="tale_page__text">
          {page.text}
        </Typography>
      </>
    </Box>
  );
}
