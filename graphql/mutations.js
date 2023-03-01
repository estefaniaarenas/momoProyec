/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createPet = /* GraphQL */ `
  mutation CreatePet(
    $input: CreatePetInput!
    $condition: ModelPetConditionInput
  ) {
    createPet(input: $input, condition: $condition) {
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
export const updatePet = /* GraphQL */ `
  mutation UpdatePet(
    $input: UpdatePetInput!
    $condition: ModelPetConditionInput
  ) {
    updatePet(input: $input, condition: $condition) {
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
export const deletePet = /* GraphQL */ `
  mutation DeletePet(
    $input: DeletePetInput!
    $condition: ModelPetConditionInput
  ) {
    deletePet(input: $input, condition: $condition) {
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
