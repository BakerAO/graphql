const { gql } = require('apollo-server');

const typeDefs = gql`
    type Query {
        launches: [Int]!
        launch(id: ID!): Int
        # Queries for the current user
        me: Int
    }
`;

module.exports = typeDefs;
