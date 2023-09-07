import imageConfig from "./imageConfig";
import filterFields from "../Utils/filterFields";

const filterImages = (array) => {
  return array.map((item) => {
    const { code, value } = item;

    if (Array.isArray(value)) {
      return {
        code,
        value: value.map((val) => filterFields(val, imageConfig[code])),
      };
    } else {
      return {
        code,
        value: filterFields(value, imageConfig[code]),
      };
    }
  });
};

export default filterImages;
