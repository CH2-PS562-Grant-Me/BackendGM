require('dotenv').config()

const {
  DB_USERNAME,
  DB_PASSWORD,
  DB_HOSTNAME,
  DB_NAME,
  PROD_USERNAME,
  PROD_PASSWORD,
  PROD_NAME,
  PROD_HOSTNAME
}= process.env;

module.exports = {
  "development": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": DB_NAME,
    "host": DB_HOSTNAME,
    "dialect": "mysql"
  },
  "production": {
    "username": PROD_USERNAME,
    "password": PROD_PASSWORD,
    "database": PROD_NAME,
    "host": PROD_HOSTNAME,
    "dialect": "mysql"
  },
};