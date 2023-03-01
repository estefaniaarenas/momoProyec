/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      last_name
      email
      location {
        street
        city
        state
        lat
        lng
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        last_name
        email
        location {
          street
          city
          state
          lat
          lng
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPet = /* GraphQL */ `
  query GetPet($id: ID!) {
    getPet(id: $id) {
      id
      description
      images
      location {
        street
        city
        state
        lat
        lng
      }
      type
      state
      contact
      whatsapp
      species
      gender
      sterilized
      createdAt
      updatedAt
    }
  }
`;
export const listPets = /* GraphQL */ `
  query ListPets(
    $filter: ModelPetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        description
        images
        location {
          street
          city
          state
          lat
          lng
        }
        type
        state
        contact
        whatsapp
        species
        gender
        sterilized
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
