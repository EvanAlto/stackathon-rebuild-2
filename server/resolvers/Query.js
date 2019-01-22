const { getUserId } = require('../util')

const Query = {
  users: (parent, args, context) => context.prisma.users(),
  user: (parent, args, context) => {
    return context.prisma.user({
        username: args.username
      })
  },
  me: (parent, args, context) => {
    const userId = getUserId(context)
    return context.prisma.user({
      id: userId
    })
  },
  posts: async (parent,args,context) => {
    const userId = getUserId(context)
    return await context.prisma.posts({where: {
      id_not: userId
    },
    orderBy: args.orderBy
  })
  }
}

module.exports = Query