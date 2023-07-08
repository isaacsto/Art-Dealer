import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!, $lastName: String!, $email: String!, $password: String!, $username: String!
  ) {
    addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password, username: $username
    ) {
      token
      user {
        _id
      }
    }
  }
`;