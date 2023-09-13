/**
 * Tale storage layer V3 (uses Amplify GraphQL)
 * @module taleStorage
 */
import { Amplify, API, graphqlOperation } from "aws-amplify";
import awsconfig from "../aws-exports";
import { createTales } from "../graphql/mutations";
import { getTales, listTales } from "../graphql/queries";
import { getUserUUID } from "../Utils/getUserUUID";

Amplify.configure(awsconfig);

/**
 * Save tales object to storage
 * @param {Object} tale Tale to save
 * @param {string} userUUID, quaels getUserUUID() by default
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
 * @param {string} userUUID, quaels getUserUUID() by default
 * @returns {*} array with tale objects
 */
export async function getListTales(userUUID = getUserUUID()) {
  const filter = userUUID ? { filter: { userUUID: { eq: userUUID } } } : {};
  const result = await API.graphql(graphqlOperation(listTales, filter));

  let list = result?.data.listTales.items;
  if (list) {
    list = list.map((i) => ({ ...i, tale: JSON.parse(i.tale) }));
  }

  return list;
}
