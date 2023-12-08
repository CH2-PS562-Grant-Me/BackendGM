const { verifyToken } = require("../helpers/jwt")

const authectication = (req, res, next) => {
  try {
    let token = req.headers.token
    let decode = verifyToken(token)
    req.decode = decode
    next()
  } catch (err) {
    res.status(401).json({
      err: 'You should be logged in'
    })
  }
}

module.exports = authectication