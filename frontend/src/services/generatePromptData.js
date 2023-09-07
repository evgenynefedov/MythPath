import filterFieldsForChat from "./filterFieldsForChat";

const generatePromptData = (steps) => {
  return [
    {
      prompt:
        "Create a fairy tale with the following elements and output it in a JSON format. The fields in the JSON should be 'title' and 'pages'. The 'pages' should be an array of strings, each containing approximately 60-80 words",
    },
    {
      world: filterFieldsForChat(
        "world",
        steps.find((step) => step.code === "world").value
      ),
    },
    {
      main_character: filterFieldsForChat(
        "main_character",
        steps.find((step) => step.code === "main_character").value
      ),
    },
    {
      additional_characters: steps
        .find((step) => step.code === "additional_characters")
        .value.map((character) =>
          filterFieldsForChat("additional_characters", character)
        ),
    },
    {
      locations: steps
        .find((step) => step.code === "locations")
        .value.map((location) => filterFieldsForChat("locations", location)),
    },
  ];
};

export default generatePromptData;
