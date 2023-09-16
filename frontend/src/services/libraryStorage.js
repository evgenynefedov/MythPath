import StoryParamsConfig from "../Data/storyParamsConfig.json";

export async function getLibraryData(stepCode, languageCode) {
  if (!StoryParamsConfig || !StoryParamsConfig.steps) {
    throw new Error(
      "StoryParamsConfig or StoryParamsConfig.steps is undefined"
    );
  }
  const step = StoryParamsConfig.steps.find((s) => s.code === stepCode);
  if (!step) {
    throw new Error(`Invalid step code: ${stepCode}`);
  }
  return getLibraryItems(step.libraryPath, languageCode);
}

async function getLibraryItems(path, languageCode = "en") {
  async function fetchJson(url) {
    const response = await fetch(url);
    return await response.json();
  }

  let items = await fetchJson(`/library/${path}.json`);

  const itemsText = await fetchJson(`/library/${path}.${languageCode}.json`);

  const itemTextById = new Map(
    itemsText.map((charText) => [charText.id, charText])
  );

  items = items.map((char) => ({
    ...char,
    ...itemTextById.get(char.id),
  }));

  return items;
}
