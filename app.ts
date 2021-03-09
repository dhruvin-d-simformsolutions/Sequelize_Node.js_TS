// const Sequelize = require('sequelize').Sequelize;
import { Sequelize } from 'sequelize';
import express from 'express';
import cors from "cors";
import helmet from "helmet";
import * as dotenv from "dotenv";

dotenv.config();
if(!process.env.PORT){
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);
const app = express();

// app.use(helmet())
// app.use(cors())
app.use(express.json())


const sequelize : Sequelize = new Sequelize('postgres://postgres:Simform@123@localhost:5432/message_boards')
// const sequelize = new Sequelize('message_boards','postgres','Simform@123',{
//   host : 'localhost',
//   dialect : 'postgres'
// })
app.use('/',async () => {
  try {
    const data = await sequelize.authenticate();
    console.log("Successful");
  } catch (error) {
    console.error(error);
  }
})

app.listen(PORT,()=>{
  console.log(`Listening on port ${PORT}`);
});