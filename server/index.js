const importSchema = require('graphql-import').importSchema
const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('./generated/prisma-client')
const Mutation = require('./resolvers/Mutation')
const Query = require('./resolvers/Query')
const resolvers = {
  Query,
  Mutation
}

const server = new GraphQLServer({
  typeDefs: importSchema('./schema.graphql'),
  resolvers,
  context: { prisma }
})

server.start(() => console.log("Server running on http://localhost:4000"))