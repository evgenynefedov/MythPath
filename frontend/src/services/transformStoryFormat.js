import getRandomElementFromArray from "../Utils/getRandomElementFromArray";

const transformStoryFormat = (story, filteredImages) => {
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

export default transformStoryFormat;
