import express from 'express';
import * as path from "path";
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import { db } from "./dbConnection/db";


db.authenticate()
  .then(() => {
    console.log("Conection Established ....");
  })
  .catch((err) => {
    console.log(err.message);
  });

dotenv.config()


const PORT: number = parseInt(process.env.PORT as string, 10) || 3000;
const app = express();


const publicDirectoryPath = path.join(__dirname, '../public')


import { router as UserRouter } from './routes/user';


app.use(express.json())
app.use(express.static(publicDirectoryPath))


app.use(helmet())
app.use(morgan('dev'))

app.use('/user', UserRouter);


const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors())
app.get('/demo', (req, res) => {
  const body = req.body;
  res.status(500).json(body);
})


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});



// var express = require('express')
// var cors = require('cors')
// const helmet = require('helmet');
// var app = express()

// app.use(helmet())

// var corsOptions = {
//   // origin: 'http://localhost:3000',
//   // origin: 'https://tecadmin.net',
//   origin : 'https://www.geeksforgeeks.org',
//   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }

// app.use(cors(corsOptions))
// app.get('/products', (req: Request, res: any) => {
//   res.status(200).json({ msg: "465465" });
// })

// app.listen(3000, function () {
//   console.log('CORS-enabled web server listening on port')
// })




  // fetch('http://localhost:3000/products')
  // .then(response => response.json())
  // .then(data => {
  //   console.log(data)
  // });