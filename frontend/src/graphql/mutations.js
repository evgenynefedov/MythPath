/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTales = /* GraphQL */ `
  mutation CreateTales(
    $input: CreateTalesInput!
    $condition: ModelTalesConditionInput
  ) {
    createTales(input: $input, condition: $condition) {
      id
      userUUID
      tale
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateTales = /* GraphQL */ `
  mutation UpdateTales(
    $input: UpdateTalesInput!
    $condition: ModelTalesConditionInput
  ) {
    updateTales(input: $input, condition: $condition) {
      id
      userUUID
      tale
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteTales = /* GraphQL */ `
  mutation DeleteTales(
    $input: DeleteTalesInput!
    $condition: ModelTalesConditionInput
  ) {
    deleteTales(input: $input, condition: $condition) {
      id
      userUUID
      tale
      createdAt
      updatedAt
      __typename
    }
  }
`;
