// db
import { Sequelize } from "sequelize";

export const db: Sequelize = new Sequelize("sedb", "postgres", "Simform@123", {
    host: "localhost",
    dialect: "postgres",    
    pool : {
        max :5,
        min : 0,
        acquire : 30000,
        idle : 10000,
    }
});

// export const dbconnection = () => {
//     connection.authenticate()
//     .then(() => {
//         console.log("Conection Established ....");
//     })
//     .catch((err) => {
//         console.log(err.message);
//     });
// };

// const sequelize : Sequelize = new Sequelize('postgres://postgres:Simform@123@localhost:5432/message_boards')
// const sequelize = new Sequelize('message_boards','postgres','Simform@123',{
//   host : 'localhost',
//   dialect : 'postgres'
// })