import { CONSTANTS } from "../constants";

import { fetchGptResponse, MAX_TOKENS } from "./openAiApi";

const TEST_MODE_STORY =
  '{\n   "title":"The Treasure of the Valley of the Kings",\n   "pages":[\n      "In the adventurous world of Tomb Raider, Lara Croft, the adventurous and skilled archaeologist, sets her sights on exploring the historic Valley of the Kings. Armed with her intelligence and bravery, she embarks on a quest to uncover ancient tombs and their hidden treasures. Dobby the house-elf, known for his loyalty, accompanies her on this dangerous journey.",\n      "As Lara and Dobby venture into the Valley of the Kings, they encounter strange and treacherous obstacles. But their determination pushes them to overcome every challenge. Suddenly, they stumble upon a hidden chamber, guarded by an ancient curse. Sensing danger, Lara calls upon her quick thinking and enlists the help of Spock, the Vulcan officer with exceptional logic.",\n      "Together, the trio solves intricate puzzles and navigates deadly traps, finally unlocking the path to the tomb\'s treasure. But just as they reach it, the ground shakes violently, endangering their lives. With Lara\'s resourcefulness and Dobby\'s unexpected assistance, they escape the crumbling tomb just in time.",\n      "Emerging from the ancient burial ground, Lara, Dobby, and Spock carry with them the long-lost treasures of the pharaohs, as well as priceless knowledge and artifacts. Their successful expedition marks another breathtaking chapter in Lara Croft\'s daring exploits and showcases the power of teamwork and courage in the face of adversity."\n   ]\n}';
const SYSTEM_MESSAGE =
  "Feel free to use the following details as a starting point. You have the creative freedom to create an engaging and imaginative story. Focus on interesting actions and dialogues between characters, rather than extensive descriptions.";
const BEGIN_USER_MESSAGE = `Based on these details, please generate a story:`;

export async function textGenerator(storyParameters) {
  if (CONSTANTS.testMode) {
    return new Promise((resolve) => setTimeout(resolve, 500, TEST_MODE_STORY));
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
