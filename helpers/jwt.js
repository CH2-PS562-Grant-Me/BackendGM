const jwt = require('jsonwebtoken')
const secret = 'privat'

const accessToken = (payload) => {
  return jwt.sign(payload, secret)
}

module.exports = accessToken 