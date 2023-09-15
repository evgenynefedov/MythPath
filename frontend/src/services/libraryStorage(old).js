/**
 * Storage layer for accessing library of worlds, characters, and locations
 * @module libraryStorage
 */

/**
 * URL paths to library files, excluding /library/ and .json
 */
const LIBRARY_PATHS = {
  characters: "characters/Characters",
  locations: "locations/Locations",
  worlds: "worlds/Worlds",
};

/**
 * Get Character data from library
 * @param {string} languageCode Language code ("en", "ru")
 * @param {number?} worldId for filtering by world_id
 * @returns {Promise<[{id:number, name:string, img:string, description:string, world_id:string, ...}]>}
 */
export async function getCharacters(languageCode, worldId) {
  return getLibraryItems(LIBRARY_PATHS.characters, languageCode, worldId);
}

/**
 * Get Location data from library
 * @param {string} languageCode Language code ("en", "ru")
 * @param {number?} worldId for filtering by world_id
 * @returns {Promise<[{id:number, name:string, img:string, description:string, world_id:string, ...}]>}
 */
export async function getLocations(languageCode, worldId) {
  return getLibraryItems(LIBRARY_PATHS.locations, languageCode, worldId);
}

/**
 * Get World data from library
 * @param {string} languageCode Language code ("en", "ru")
 * @returns {Promise<[{id:number, name:string, img:string, description:string, ...}]>}
 */
export async function getWorlds(languageCode) {
  return getLibraryItems(LIBRARY_PATHS.worlds, languageCode);
}

/**
 * Get array of items (characters, locations, worlds) from library
 * @param {string} path URL path to library files, excluding /library/ and .json
 * @param {string?} languageCode Language code ("en", "ru")
 * @param {number?} worldId for filtering by world_id
 * @returns {Promise<[{id:number, name:string, img:string, description:string, ...}]>}
 */
async function getLibraryItems(path, languageCode = "en", worldId = null) {
  async function fetchJson(url) {
    const response = await fetch(url);
    return await response.json();
  }

  let items = await fetchJson(`/library/${path}.json`);
  const itemsText = await fetchJson(`/library/${path}.${languageCode}.json`);
  const itemTextById = new Map(
    itemsText.map((charText) => [charText.id, charText])
  );

  if (worldId != null) {
    items = items.filter((item) => item.world_id === worldId);
  }

  items = items.map((char) => ({
    ...char,
    ...itemTextById.get(char.id),
  }));
  return items;
}
