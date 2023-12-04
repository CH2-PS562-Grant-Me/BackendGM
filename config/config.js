const dotenv = require('dotenv')


// module.exports = {
//   "development": {
//     "username": process.env.DB_USERNAME,
//     "password": process.env.DB_PASSWORD,
//     "database": process.env.DB_NAME,
//     "host": process.env.DB_HOSTNAME,
//     "dialect": "mysql",

//     pool :{
//           max :5,
//           min :0,
//           acquire :3000,
//           idle :10000
//         }
//   },
//   "production": {
//     "username": process.env.DB_USERNAME,
//     "password": process.env.DB_PASSWORD,
//     "database": process.env.DB_NAME,
//     "host": process.env.DB_HOSTNAME,
//     "dialect": "mysql"
//   },
// };
module.exports ={
  Username:'root',
  Password:'',
  Database:'grant_me_dev',
  Host:'localhost',
  dialect:'mysql',
  
  pool :{
    max :5,
    min :0,
    acquire :3000,
    idle :10000
  }
}

//     production : {
//   Username: 'root',
//   Password: '',
//   Database: 'grant_me_dev',
//   Host: 'localhost',
//   dialect: 'mysql',
// },

