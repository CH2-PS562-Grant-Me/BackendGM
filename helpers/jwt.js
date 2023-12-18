const jwt = require('jsonwebtoken')

const accessToken = (payload) => {
  return jwt.sign(payload, process.env.ACCESS_TOKEN, {expiresIn: 1 * 24 * 60 * 60 * 1000})
}

const verifyToken = (token) => {
  return jwt.verify(token, process.env.ACCESS_TOKEN);
};

module.exports = { accessToken, verifyToken };