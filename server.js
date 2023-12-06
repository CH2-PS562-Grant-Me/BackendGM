// const express = require ('express');
// const app = express();

// const port = 3000;

// //middleware

// app.use(express.json())

// app.use(express.urlencoded({extended:true}))

// //Router
// //test router
// app.get("/", (req, res)=>{
//      res.send('Hello Selamat Datang');
// });
// const datacontrol= require('./controllers/datasets');
// app.post('/add_data_diri', datacontrol.adddatasets)

// app.get('/getdata/:id', datacontrol.getdatasetsbyId)

// app.put('/updatedata/:id', datacontrol.updatedatasets)

// app.delete('/deletedata/:id', datacontrol.deletedatabyId)

// app.listen(port, () => {
//      console.log(`success listening on port ${port}`)
//      })