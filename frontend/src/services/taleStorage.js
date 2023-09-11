/**
 * Tale storage layer (in V2 async wrapper for localStorage with multiple stories)
 * @module taleStorage
 */

import { strToHash } from "../Utils/strToHash";

const TALE_STORAGE_KEY = "tales";

/**
 * Save tales object to storage
 * @param {*} tale Tale object to save
 * @returns {Number} Tale id
 */
export async function saveTale(tale) {
  let tales = JSON.parse(localStorage.getItem(TALE_STORAGE_KEY)) || [];

  const taleId = strToHash(JSON.stringify(tale));
  const indexByTaleId = tales.findIndex((t) => t.id === taleId);

  const taleObject = { id: taleId, tale: tale };

  indexByTaleId === -1
    ? tales.push(taleObject)
    : (tales[indexByTaleId] = taleObject);

  localStorage.setItem(TALE_STORAGE_KEY, JSON.stringify(tales));

  return taleId;
}

/**
 * Get tale object from storage
 * @param {Number} TaleId
 * @returns {*} Tale object or null (if there is no tale with passed taleId)
 */
export async function getTaleById(taleId) {
  if (!taleId) return null;

  let tales = JSON.parse(localStorage.getItem(TALE_STORAGE_KEY)) || [];

  const indexByTaleId = tales.findIndex((t) => t.id == taleId);
  let tale = indexByTaleId !== -1 ? tales[indexByTaleId] : null;
  return tale;
}

/**
 * Delete tale object from storage
 * @param {Number} TaleId
 */
export async function deleteTaleById(taleId) {
  if (!taleId) return;

  let tales = JSON.parse(localStorage.getItem(TALE_STORAGE_KEY)) || [];

  const indexByTaleId = tales.findIndex((t) => t.id == taleId);
  if (indexByTaleId !== -1) {
    tales.splice(indexByTaleId, 1);
    localStorage.setItem(TALE_STORAGE_KEY, JSON.stringify(tales));
  }
}

/**
 * Get tales array with tale objects from storage
 * @returns {*} array with tale objects
 */
export async function getTales() {
  return JSON.parse(localStorage.getItem(TALE_STORAGE_KEY)) || [];
}
