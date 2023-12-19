const { comparePassword, hashPassword } = require('../helpers/bcrypt');
const { accessToken } = require('../helpers/jwt');
const { User, Profile } = require('../models');

const register = async (req, res) => {
  const { nama, email, password } = req.body;

  try {
    if (password.length < 8) {
      return res.status(422).json({
        status: 422,
        error: true,
        message: 'Minimal password 8 karakter',
      })
    } else {
      const user = await User.create({
        nama,
        email,
        password: await hashPassword(password)
      });
      if(user){
        await Profile.create({
          user_id: user.id
        })
      }
      res.status(201).json({
        status: 201,
        message: 'Akun berhasil terdaftar',
        data: user
      });
    }

    const userExists = await User.findOne({
      where: { email }
    });

    if (userExists) {
      return res.status(422).json({
        status: 422,
        error: true,
        message: 'Email telah terdaftar'
      });
    }

    const hashedPassword = await hashPassword(password);

    const user = await User.create({
      nama,
      email,
      password: hashedPassword
    });

    return res.status(201).json({
      status: 201,
      error: false,
      message: 'Akun berhasil terdaftar',
      data: user
    });
  } catch (error) {
    return res.status(400).json({
      status: 400,
      error: true,
      message: 'Register Gagal'
    });
  }
};


const login = async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await User.findOne({
      where: { email }
    })

    if (!user) {
      res.status(401).json({
        status: 401,
        error: true,
        message: 'Akun belum terdaftar'
      })
    }
    else if (comparePassword(password, user.password)) {
      let payload = {
        id: user.id,
        email: user.email
      }
      let token = accessToken(payload)
      res.cookie("jwt", token, { maxAge: 1 * 24 * 60 * 60, httpOnly: true })
      res.status(200).json({
        status: 200,
        error: false,
        message: "success",
        data: {
          id: user.id,
          email: user.email,
          accessToken: token
        },
      })
    }
    else {
      return res.status(401).json({
        status: 401,
        error: true,
        message: 'Invalid email/password'
      });
    }
  }
  catch (error) {
    res.status(401).json({
      status: 401,
      error: true,
      message: 'Invalid email/password'
    })
  };
}

module.exports = {
  register,
  login
};