import filterFields from "../Utils/filterFields";
import StoryParamsConfig from "../Data/storyParamsConfig.json";

const filterFieldsForChat = (objType, obj) => {
  const step = StoryParamsConfig.steps.find((step) => step.code === objType);
  const fieldsToInclude = step ? step.fieldsToGPT : [];
  return filterFields(obj, fieldsToInclude);
};

export default filterFieldsForChat;
