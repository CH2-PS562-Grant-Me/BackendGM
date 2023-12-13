const bcrypt = require('bcrypt');

const hashPassword = (password) => {
  return bcrypt.hash(password, 10)
}

const comparePassword = (inputPassword, dbPassword) => {
  return bcrypt.compareSync(inputPassword, dbPassword)
}

module.exports = { hashPassword, comparePassword };