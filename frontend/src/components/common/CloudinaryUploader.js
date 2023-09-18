import React, { useEffect } from "react";
import { CONSTANTS } from "../../constants";
import { Fab } from "@mui/material";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

export default function CloudinaryUploader({ handleImageUploader }) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://widget.cloudinary.com/v2.0/global/all.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const showWidget = () => {
    const widget = window.cloudinary.createUploadWidget(
      {
        cloudName: CONSTANTS.cloudinaryCloudName,
        uploadPreset: "pmv0agks",
        folder: "user",
        sources: ["local", "camera"],
        theme: "purple",
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          console.log("File successfully uploaded:", result.info.secure_url);
          handleImageUploader(result.info);
        }
      }
    );
    widget.open();
  };

  return (
    <Fab onClick={showWidget} aria-label="add">
      <AddPhotoAlternateIcon />
    </Fab>
  );
}
