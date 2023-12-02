const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const { User } = require('./models/User');

const signUp = async (req, res) => {
  try {
    const user = await User.req(
      email: req.body.email,
      
    )
  } catch (error) {
    
  }
}