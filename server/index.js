const importSchema = require('graphql-import').importSchema
const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('./generated/javascript-client')
const Mutation = require('./resolvers/Mutation')
const Query = require('./resolvers/Query')
const User = require('./resolvers/User')
const Post = require('./resolvers/Post')
const Subscription = require('./resolvers/Subscription')

const resolvers = {
  Query,
  Mutation,
  User,
  Post,
  Subscription
}

const server = new GraphQLServer({
  typeDefs: importSchema('./schema.graphql'),
  resolvers,
  context: request => ({
    ...request,
    prisma
  })
})

server.start(() => console.log("Server running on http://localhost:4000"))