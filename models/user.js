'use strict';
const {
  Model
} = require('sequelize');
const { hashPassword } = require('../helpers/bcrypt');
const { Profile } = require('./profile'); 
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasOne(models.Profile, {
        foreignKey: 'user_id'
      })
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
          msg: 'Email is invalid',
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: { 
          args: [8, 42],
          msg: "The password length should be 8 characters."
       }
      }
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  // User.afterCreate(async (user) => {
  //   await Profile.create({ user_id: user.id });
  // });
  return User;
};