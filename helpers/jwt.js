const jwt = require('jsonwebtoken')
const secret = 'privat'

const accessToken = (payload) => {
  return jwt.sign(payload, secret, {expiresIn: 1 * 24 * 60 * 60 * 1000})
}

const verifyToken = (token) => {
  return jwt.verify(token, secret);
};

module.exports = { accessToken, verifyToken }; 