//Type Definitions: define every piece of data the client can expect to work with through our query/mutation. Every graphQL API starts with defining these strict data expectations.

//Resolvers: functions connected to each query/mutation to perform each CRUD-like action.

//These create our GraphQL Schema.

const {gql} = require('apollo-server-express')

const typeDefs = gql`
  type Book {
    _id: ID
    title: String
    author: String
    pages: Int
  }

  type Query {
    books: [Book]
    book(title: String!): Book
  }

  type Mutation {
    addBook(title: String!, author: String!, pages: Int!): Book
  }

`

module.exports = typeDefs