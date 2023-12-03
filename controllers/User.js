const { comparePassword } = require('../helpers/bcrypt');
const accessToken = require('../helpers/jwt');
const { User } = require('../models');

class UserController {
  static async create(req, res) {
    const { nama, email, password } = req.body;

    try {
      const user = await User.findOne({
        where: { email }
      })
      if (user) {
        res.status(400).json({ message: 'Email telah terdaftar' })
      } else {
        const user = await User.create({
          nama,
          email,
          password
        });
        res.status(201).json({ message: 'success', status: 201, data: user });
      }

    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async login(req, res) {
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
        res.status(400).json({
          error: 'Invalid email/password'
        })
      }

    }
    catch (err) {
      res.status(400).json({
        error: 'Invalid email/password'
      })
    };
  }
}

module.exports = UserController;