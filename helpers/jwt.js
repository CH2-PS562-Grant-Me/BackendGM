const jwt = require('jsonwebtoken')
const secret = 'privat'

const accessToken = (payload) => {
  return jwt.sign(payload, secret)
}

const verifyToken = (token) => {
  return jwt.verify(token, secret);
};

module.exports = accessToken 