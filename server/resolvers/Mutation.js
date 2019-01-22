const { randomHexColor } = require('../util')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { APP_SECRET } = require('../secrets')

const Mutation = {
  signup: async (parent,args,context) => {
      const userImage = randomHexColor()
      const password = await bcrypt.hash(args.password,10)
      const user = await context.prisma.createUser({...args, password, userImage})
      const token = jwt.sign({userId: user.id}, APP_SECRET)
      return {
        token,
        user
      }
  },
  login: async (parent, {email, password}, context) => {
    const user = await context.prisma.user({ email })
    if (!user) throw new Error('No User Found by that email')

    const valid = await bcrypt.compare(password, user.password)
    if (!valid) throw new Error('Password not a match')

    const token = jwt.sign({userId: user.id}, APP_SECRET)

    return {
      token,
      user
    }
  }
}

module.exports = Mutation