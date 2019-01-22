const jwt = require('jsonwebtoken')
const { APP_SECRET } = require('./secrets')

const randomHexColor = () => {
  const values = [
    '0', '1', '2', '3', '4',
    '5', '6', '7', '8', '9',
    'A', 'B', 'C', 'D', 'E',
    'F']
  let count = 0
  let hexColor = ''
  while (count < 6) {
    let color = values[Math.floor(Math.random() * values.length)]
    hexColor += color
    count++
  }
  return hexColor
}

function getUserId(context) {
  const Authorization = context.request.get('Authorization')
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '')
    const { userId } = jwt.verify(token, APP_SECRET)
    return userId
  }
  return null
}

module.exports = {
  randomHexColor,
  getUserId
}
