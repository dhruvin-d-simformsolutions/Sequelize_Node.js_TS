// db
import { Sequelize } from "sequelize";

export const connection: Sequelize = new Sequelize("sedb", "postgres", "Simform@123", {
    host: "localhost",
    dialect: "postgres",
});

export const dbconnection = () => {
    connection.authenticate()
    .then(() => {
        console.log("Conection Established ....");
    })
    .catch((err) => {
        console.log(err.message);
    });
};

// const sequelize : Sequelize = new Sequelize('postgres://postgres:Simform@123@localhost:5432/message_boards')
// const sequelize = new Sequelize('message_boards','postgres','Simform@123',{
//   host : 'localhost',
//   dialect : 'postgres'
// })