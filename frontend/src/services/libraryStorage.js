import StoryParamsConfig from "../Data/storyParamsConfig.json";

export async function getLibraryData(stepCode, languageCode, worldId = null) {
  if (!StoryParamsConfig || !StoryParamsConfig.steps) {
    throw new Error(
      "StoryParamsConfig or StoryParamsConfig.steps is undefined"
    );
  }
  const step = StoryParamsConfig.steps.find((s) => s.code === stepCode);
  if (!step) {
    throw new Error(`Invalid step code: ${stepCode}`);
  }
  return getLibraryItems(step.libraryPath, languageCode, worldId);
}

async function getLibraryItems(path, languageCode = "en", worldId = null) {
  async function fetchJson(url) {
    const response = await fetch(url);
    return await response.json();
  }

  let items = await fetchJson(`/library/${path}.json`);

  console.log(`/library/${path}.${languageCode}.json`);
  const itemsText = await fetchJson(`/library/${path}.${languageCode}.json`);

  const itemTextById = new Map(
    itemsText.map((charText) => [charText.id, charText])
  );

  console.log(itemsText);

  items = items.map((char) => ({
    ...char,
    ...itemTextById.get(char.id),
  }));
  console.log(items);

  return items;
}
