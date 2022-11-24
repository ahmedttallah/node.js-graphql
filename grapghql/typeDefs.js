const { gql } = require("apollo-server-express");

const typeDefs = gql`
  scalar Date
  type Todo {
    id: ID
    title: String
    detail: String
    date: Date
  }

  type Query {
    welcome: String
    getTodos: [Todo]
  }
`;

module.exports = typeDefs;
