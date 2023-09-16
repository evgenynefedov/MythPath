import React, { useEffect } from "react";
import { CONSTANTS } from "../../constants";

const CloudinaryUploader = () => {
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
        }
      }
    );
    widget.open();
  };

  return (
    <div>
      <button onClick={showWidget}>Upload Image</button>
    </div>
  );
};

export default CloudinaryUploader;
