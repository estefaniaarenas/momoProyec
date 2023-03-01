/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreatePet = /* GraphQL */ `
  subscription OnCreatePet($filter: ModelSubscriptionPetFilterInput) {
    onCreatePet(filter: $filter) {
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
export const onUpdatePet = /* GraphQL */ `
  subscription OnUpdatePet($filter: ModelSubscriptionPetFilterInput) {
    onUpdatePet(filter: $filter) {
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
export const onDeletePet = /* GraphQL */ `
  subscription OnDeletePet($filter: ModelSubscriptionPetFilterInput) {
    onDeletePet(filter: $filter) {
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
