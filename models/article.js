'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Article extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Article.init({
    NamaPenerima: DataTypes.STRING,
    TahunMenerima: DataTypes.STRING,
    NamaBeasiswa: DataTypes.STRING,
    Universitas: DataTypes.STRING,
    Ulasan: DataTypes.STRING,
    Sumber: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Article',
  });
  return Article;
};