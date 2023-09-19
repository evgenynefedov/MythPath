import getRandomElementFromArray from "../Utils/getRandomElementFromArray";
import filterImages from "./filterImages";

const refillRemainingImages = (filteredImages) => {
  return filteredImages
    .filter(({ code }) => code !== "world")
    .flatMap(({ value }) => (Array.isArray(value) ? value : [value]));
};

const responseToTale = (steps, story) => {
  const filteredImages = filterImages(steps);
  console.log("only pictures", filteredImages);

  let remainingImages = refillRemainingImages(filteredImages);

  const getUniqueRandomImage = () => {
    if (remainingImages.length === 0) {
      remainingImages = refillRemainingImages(filteredImages);
    }

    const randomImage = getRandomElementFromArray(remainingImages);
    remainingImages = remainingImages.filter(
      (imgObj) => imgObj !== randomImage
    );

    return randomImage;
  };

  const { title, pages } = story;
  const worldImage =
    filteredImages.find(({ code }) => code === "world")?.value?.img || "";

  return {
    title,
    cover: worldImage,
    pages: pages.map((pageText) => ({
      text: pageText,
      img: getUniqueRandomImage()?.img || "",
    })),
  };
};

export default responseToTale;
