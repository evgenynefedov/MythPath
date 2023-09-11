import { fill } from "@cloudinary/url-gen/actions/resize";
import { getCloudinaryImage } from "../../services/cloudinary";
import { AdvancedImage, lazyload, responsive } from "@cloudinary/react";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";

/**
 * Wrapper component for cloudinary AdvancedImage, returns image resized to aspectRation, with responsive auto sizing to parent
 * @param {*} props
 * @param {string} props.imgPath path to image file, starting from MythPath/Library
 * @param {number} aspectRatio
 * @returns
 */
export default function ResponsiveImage({ imgPath, aspectRatio }) {
  const cloudinaryImage = getCloudinaryImage(imgPath).resize(
    fill().aspectRatio(aspectRatio).gravity(autoGravity())
  );

  return (
    <AdvancedImage
      cldImg={cloudinaryImage}
      plugins={[responsive(), lazyload()]}
    />
  );
}
