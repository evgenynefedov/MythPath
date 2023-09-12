import StoryParamsConfig from "../Data/storyParamsConfig.json";
import filterFields from "../Utils/filterFields";

const filterImages = (array) => {
  return array.map((item) => {
    const { code, value } = item;
    const step = StoryParamsConfig.steps.find((step) => step.code === code);
    const fieldsToInclude = step ? step.fieldsToImages : [];

    if (Array.isArray(value)) {
      return {
        code,
        value: value.map((val) => filterFields(val, fieldsToInclude)),
      };
    } else {
      return {
        code,
        value: filterFields(value, fieldsToInclude),
      };
    }
  });
};

export default filterImages;
