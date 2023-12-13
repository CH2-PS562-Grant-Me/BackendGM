const { comparePassword, hashPassword } = require('../helpers/bcrypt');
const { accessToken } = require('../helpers/jwt');
const { User } = require('../models');

const register = async (req, res) => {
  const { nama, email, password } = req.body;

  try {
    const user = await User.findOne({
      where: { email }
    })
    if (user) {
      res.status(422).json({
        status: 422,
        message: 'Email telah terdaftar'
      })
    } else {
      const user = await User.create({
        nama,
        email,
        password: await hashPassword(password)
      });
      res.status(201).json({
        status: 201,
        message: 'success',
        data: user
      });
    }

  } catch (error) {
    res.status(400).json({
      message: error.message
    })
  }
}

const login = async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await User.findOne({
      where: { email }
    })

    if (comparePassword(password, user.password)) {
      let payload = {
        id: user.id,
        email: user.email
      }
      let token = accessToken(payload)
      res.status(200).json({
        status: 200,
        data: {
          id: user.id,
          email: user.email,
          accessToken: token
        },
      })
    }
    else {
      res.status(401).json({
        status: 401,
        message: 'Invalid email/password'
      })
    }

  }
  catch (err) {
    res.status(500).json({
      err: {
        status: 500,  
        message: 'Internal Server Error'
      }
    })
  };
}

module.exports = {
  register,
  login
};