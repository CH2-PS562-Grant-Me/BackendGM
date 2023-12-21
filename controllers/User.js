const { User } = require('../models');

const getUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: ['id', 'nama', 'email']
    });
    res.status(200).json({
      status: 200,
      error: false,
      data: users
    });
  } catch (error) {
    res.status(400).json({error:true, status: error.message });
  }
}

module.exports = {
  getUsers
};