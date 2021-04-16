// import express from 'express';
// import * as path from "path";
// import dotenv from 'dotenv';
// import helmet from 'helmet';
// import cors from 'cors';
// import { connection, dbconnection } from "./dbConnection/db";


// dbconnection()
// dotenv.config()


// const PORT: number = parseInt(process.env.PORT as string, 10) || 3000;
// const app  = express();


// const publicDirectoryPath = path.join(__dirname, '../public')


// import { router as UserRouter} from './routes/user';


// app.use(express.json())
// app.use(express.static(publicDirectoryPath))
// app.use('/user', UserRouter);
// app.use(helmet)
// app.use(cors())


// var corsOptions : {
//   origin: 'http://example.com',
//   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }
// app.get('/demo', cors(corsOptions) , (req, res) => {
//   const body: Request = req.body;
//   res.status(500).json(body);
// })


// app.listen(PORT, () => {
//   console.log(`Listening on port ${PORT}`);
// });



var express = require('express')
var cors = require('cors')
var app = express()

var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.get('/products', cors(corsOptions), function (req : Request, res : any) {
  res.json({msg: 'This is CORS-enabled for only example.com.'})
})

app.listen(3000, function () {
  console.log('CORS-enabled web server listening on port 80')
})