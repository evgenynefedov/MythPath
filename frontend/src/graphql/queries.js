/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTales = /* GraphQL */ `
  query GetTales($id: ID!) {
    getTales(id: $id) {
      id
      userUUID
      tale
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listTales = /* GraphQL */ `
  query ListTales(
    $filter: ModelTalesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTales(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userUUID
        tale
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
