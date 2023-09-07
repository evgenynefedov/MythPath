import getRandomElementFromArray from "../Utils/getRandomElementFromArray";
import filterImages from "./filterImages";

const responseToTale = (steps, story) => {
  const filteredImages = filterImages(steps);
  return {
    title: story.title,
    cover:
      filteredImages.find((imgObj) => imgObj.code === "world")?.value?.img ||
      "",
    pages: story.pages.map((pageText) => ({
      text: pageText,
      img:
        getRandomElementFromArray(
          filteredImages
            .filter((imgObj) => imgObj.code !== "world")
            .flatMap((imgObj) =>
              Array.isArray(imgObj.value) ? imgObj.value : [imgObj.value]
            )
        )?.img || "",
    })),
  };
};

export default responseToTale;
