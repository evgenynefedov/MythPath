import { CloudinaryImage } from "@cloudinary/url-gen";
import { CONSTANTS } from "../constants";

const EXTENSION_REGEX = /\.[^/.]+$/;
const removeExtension = (filePath) => filePath.replace(EXTENSION_REGEX, "");

/**
 * Create CloudinaryImage object for image in MythPath/Library with q_auto anf f_auto
 * @param filePath path to file, starting from MythPath/Library
 * @returns CloudinaryImage
 */
export const getCloudinaryImage = (filePath) =>
  new CloudinaryImage(
    `${CONSTANTS.cloudinaryBasePath}${removeExtension(filePath)}`,
    {
      cloudName: CONSTANTS.cloudinaryCloudName,
    }
  )
    .quality("auto")
    .format("auto");
