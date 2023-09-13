import { CloudinaryImage } from "@cloudinary/url-gen";
import { CONSTANTS } from "../constants";

const EXTENSION_REGEX = /\.[^/.]+$/;
const removeExtension = (filePath) => filePath?.replace(EXTENSION_REGEX, "");

/**
 * Create CloudinaryImage object for image in MythPath/Library with q_auto anf f_auto
 * @param imgPath path to file, starting from MythPath/Library
 * @returns CloudinaryImage
 */
export const getCloudinaryImage = (imgPath) =>
  new CloudinaryImage(
    `${CONSTANTS.cloudinaryBasePath}${removeExtension(imgPath)}`,
    {
      cloudName: CONSTANTS.cloudinaryCloudName,
    }
  )
    .quality("auto")
    .format("auto");
