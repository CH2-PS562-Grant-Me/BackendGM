const dbConfig = require ('../config/config');
const {Sequelize , DataTypes} = require('sequelize');

const sequelize = new Sequelize(
      dbConfig.Database,
      dbConfig.Username,
      dbConfig.Password,{
            host: dbConfig.Host,
            dialect : dbConfig.dialect,
            operatorsAliase : false,

      pool  :{
            max : dbConfig.max,
            min : dbConfig.min,
            acquire : dbConfig.pool.acquire,
            idle : dbConfig.pool.idle
      }
      }
)
sequelize.authenticate()
.then(()=>{
      console.log('Terkoneksi')
})
.catch(err => {
      console.log('Error' + err)
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize


db.datasets = require('./datasets')(sequelize, DataTypes)




db.sequelize.sync({force:false})
.then(()=>{
      console.log('yes re-sync done!')
})

module.exports = db;
