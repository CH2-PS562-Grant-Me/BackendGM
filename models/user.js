'use strict';
const {
  Model
} = require('sequelize');
const hashPassword = require('../helpers/bcrypt');
const profile = require('./profile');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // User.hasOne(models.profile)
    }
  }
  User.init({
    nama: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true,
      validate: {
        isEmail: {
          msg: 'Email invalid'
        },
        notEmpty: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Password tidak boleh kosong'
        }
      }
    },
  }, {
    sequelize,
    modelName: 'User',
    hooks: {
      beforeCreate: function (user, op, fn) {
        user.password = hashPassword(user.password)
      }
    }
  });
  return User;
};