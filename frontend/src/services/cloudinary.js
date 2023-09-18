import { CloudinaryImage } from "@cloudinary/url-gen";
import { CONSTANTS } from "../constants";

const EXTENSION_REGEX = /\.[^/.]+$/;
const removeExtension = (filePath) => filePath?.replace(EXTENSION_REGEX, "");

/**
 * @param {string} imgPath
 * @returns {string}
 * @example getCloudinaryPath("v1694964113/user/fipejlgks6jxl9lya3qp.png") === "v1694964113/user/fipejlgks6jxl9lya3qp.png"
 * getCloudinaryPath("/Worlds/pawfect.jpg") === "MythPath/Library/Worlds/pawfect"
 */
const getCloudinaryPath = (imgPath, isLibrary) =>
  isLibrary
    ? `${CONSTANTS.cloudinaryBasePath}${removeExtension(imgPath)}`
    : removeExtension(imgPath);

/**
 * Create CloudinaryImage object for image in MythPath/Library with q_auto anf f_auto
 * @param imgPath path to file, starting from MythPath/Library
 * @returns CloudinaryImage
 */
export const getCloudinaryImage = (
  imgPath,
  isLibrary = imgPath?.startsWith("/")
) =>
  new CloudinaryImage(getCloudinaryPath(imgPath, isLibrary), {
    cloudName: CONSTANTS.cloudinaryCloudName,
  }).quality("auto");
// doesn't work on Chrome emulation of mobile
//    .format("auto")
