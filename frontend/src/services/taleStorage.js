/**
 * Tale storage layer (in V1 async wrapper for localStorage)
 * @module taleStorage
 */

const TALE_STORAGE_KEY = "tale";

/**
 * Save tale object to storage
 * @param {*} tale Tale object to save
 */
export async function saveTale(tale) {
  localStorage.setItem(TALE_STORAGE_KEY, tale);
}

/**
 * Get tale object from storage
 * @returns {*} Tale object
 */
export async function getTale() {
  return localStorage.getItem(TALE_STORAGE_KEY);
}
