/**
 * Tale storage layer V3 (uses Amplify GraphQL)
 * @module taleStorage
 */
import { Amplify, API, graphqlOperation } from "aws-amplify";
import awsconfig from "../aws-exports";
import { createTales, deleteTales, updateTales } from "../graphql/mutations";
import { getTales, listTales } from "../graphql/queries";
import { getUserUUID } from "../Utils/getUserUUID";

Amplify.configure(awsconfig);

/**
 * Save tales object to storage
 * @param {Object} tale Tale to save
 * @param {string} userUUID, equals getUserUUID() by default
 * @returns {Number} Tale id
 */
export async function saveTale(tale, userUUID = getUserUUID()) {
  const taleObject = {
    userUUID: userUUID,
    tale: JSON.stringify(tale),
  };

  const result = await API.graphql(
    graphqlOperation(createTales, { input: taleObject })
  );

  return result?.data.createTales.id;
}

/**
 * Get tale object from storage
 * @param {Number} TaleId
 * @returns {*} Tale object or null (if there is no tale with passed taleId)
 */
export async function getTaleById(taleId) {
  if (!taleId) return null;

  const result = await API.graphql(graphqlOperation(getTales, { id: taleId }));

  let taleObject = result?.data.getTales;
  if (taleObject) {
    taleObject.tale = JSON.parse(taleObject.tale);
  }

  return taleObject;
}

/**
 * Get tales array with tale objects from storage
 * @param {string} queryVariables, example: { filter: { isPublic: { eq: true } } }
 * @returns {*} array with tale objects
 */
export async function getListTales(queryVariables) {
  const result = await API.graphql(graphqlOperation(listTales, queryVariables));

  let list = result?.data.listTales.items;
  if (list) {
    list = list.map((i) => ({ ...i, tale: JSON.parse(i.tale) }));
  }

  return list;
}

/**
 * Delete tale object from storage
 * @param {string} TaleId
 * @returns {array} array with deleted tales
 */
export async function deleteTaleById(taleId) {
  if (!taleId) return;

  const input = { input: { id: taleId } };
  const result = await API.graphql(graphqlOperation(deleteTales, input));

  return result?.data.deleteTales;
}

/**
 * Update Tale by input
 * @param {Object} input which contain id: taleID and updated attributes. Example: {id: 206aabe8-51dd-499e-a981-12f568fb3dc0, isPublic: true}
 * @returns {array} array with updated tales
 */
export async function updateTale(input) {
  if (!input) return;
  const result = await API.graphql(
    graphqlOperation(updateTales, { input: input })
  );

  return result?.data.updateTales;
}
