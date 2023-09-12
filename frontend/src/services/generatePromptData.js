import filterFieldsForChat from "../services/filterFieldsForChat";
import StoryParamsConfig from "../Data/storyParamsConfig.json";

const generatePromptData = (steps) => {
  const prompts = [
    {
      prompt:
        "Create a fairy tale with the following elements and output it in a JSON format. The fields in the JSON should be 'title' and 'pages'. The 'pages' should be an array of strings, each containing approximately 60-80 words",
    },
  ];

  StoryParamsConfig.steps.forEach((step) => {
    const stepData = steps.find((s) => s.code === step.code);
    if (stepData) {
      const filteredFields = step.isMulti
        ? stepData.value.map((item) => filterFieldsForChat(step.code, item))
        : filterFieldsForChat(step.code, stepData.value);

      prompts.push({ [step.code]: filteredFields });
    }
  });

  return prompts;
};

export default generatePromptData;
