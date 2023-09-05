import { CONSTANTS } from "../constants";

import { fetchGptResponse, MAX_TOKENS } from "./openAiApi";

const TEST_MODE_STORY = `
  Once upon a time in the Magical Forest, Ella, a brave young girl with the gift of flight, embarked on an epic quest. Raised by wolves, she was no stranger to danger. Yet, her one true weakness was her fear of darkness.

  Alongside Ella was her lifelong best friend, Frodo. Curious and easily distracted, Frodo had the incredible ability to become invisible. Both were fascinated by magical artifacts and had an adventurous spirit.

  Their main task was clear: to find the lost treasure hidden deep within the forest. But first, they had to cross the Old Bridge, guarded by ancient spirits. Ella and Frodo reached the bridge and met the spirits who presented them with a riddle. Using her bravery and Frodo's quick thinking, they solved the riddle and were allowed to pass.

  Next, they went to Sunny Meadow, a place filled with radiant flowers that amplified magic. As they entered the meadow, they felt their abilities strengthening. Ella felt like she could fly higher than ever, and Frodo's invisibility lasted longer.

  Finally, they reached the spot indicated on their Treasure Map. But this was no easy find; they had to solve one last riddle. Frodo, entranced by the clues, quickly realized they needed to combine their abilities to solve it. Ella flew into the air to get a bird's eye view, while invisible Frodo explored the ground.

  Suddenly, Frodo noticed a glimmering object. Ella swooped down, used her magic wand to turn a boulder into gold, and there it was—the Lost Treasure! It was more magnificent than they had ever imagined. They also found a flashlight that never ran out of battery, which Ella took as a sign to face her fear of darkness.

  Both Ella and Frodo returned home as heroes, their friendship stronger than ever. And so, they learned the ultimate moral of their journey: the value of friendship can be the greatest treasure of all.
  `;

const SYSTEM_MESSAGE =
  "You are a storyteller and you need to create an interesting story based on the following parameters.";
const BEGIN_USER_MESSAGE = `Based on these details, please generate a story:`;

export async function textGenerator(storyParameters) {
  if (CONSTANTS.testMode) {
    return Promise.resolve(TEST_MODE_STORY);
  }

  const userMessage = `${BEGIN_USER_MESSAGE} ${JSON.stringify(
    storyParameters
  )}`;

  const messagesJson = [
    { role: "system", content: SYSTEM_MESSAGE },
    { role: "user", content: userMessage },
  ];

  const requestOptions = JSON.stringify({
    model: "gpt-3.5-turbo",
    max_tokens: MAX_TOKENS,
    messages: messagesJson,
  });

  return fetchGptResponse(requestOptions);
}
