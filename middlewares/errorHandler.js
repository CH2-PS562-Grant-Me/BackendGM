const errorHandler = async (err, req, res, next) => {
  console.log(err)
  res.status(err.status).json({ err: err })
}

module.exports = { errorHandler };