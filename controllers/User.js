const { User } = require('../models'); // Assuming your model is named 'User'

class UserController {
  static async create(req, res) {
    const { nama, email, password } = req.body;

    try {
      const user = await User.create({
        nama,
        email,
        password
      });

      res.status(201).json({ user, message: 'success', status: 201 });
    } catch (error) {
      res.status(400).json({ error: error.message || "Unknown error" });
    }
  }
}

module.exports = UserController;