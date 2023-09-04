import { CONSTANTS } from "../constants";

export const API_URL = "https://api.openai.com/v1/chat/completions";
export const MAX_TOKENS = 100;

export async function fetchGptResponse(requestOptions) {
  const apiKey = CONSTANTS.apiKeys.openai;
  const headers = new Headers({
    "Content-Type": "application/json",
    Authorization: `Bearer ${apiKey}`,
  });

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers,
      body: requestOptions,
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const result = await response.json();
    return result.choices[0].message.content.trim();
  } catch (error) {
    console.error("Fetch failed:", error);
    throw error;
  }
}
