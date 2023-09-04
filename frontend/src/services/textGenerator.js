import { CONSTANTS } from "../constants";

const SYSTEM_MESSAGE =
  "You are a storyteller and you need to create an interesting story based on the following parameters.";
const MAX_TOKENS = 100;
const BEGIN_USER_MESSAGE = `Based on these details, please generate a story:`;

export async function getGptResponse(storyParameters, testMode = false) {
  if (testMode) {
    return TEST_MODE_STORY; // Возвращаем заранее определённую историю, если включен тестовый режим
  }
  const apiKey = CONSTANTS.apiKeys.openai;
  const url = "https://api.openai.com/v1/chat/completions";

  const myHeaders = new Headers({
    "Content-Type": "application/json",
    Authorization: `Bearer ${apiKey}`,
  });

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

  const response = await fetch(url, {
    method: "POST",
    headers: myHeaders,
    body: requestOptions,
  });

  const result = await response.json();
  return result.choices[0].message.content.trim();
}
