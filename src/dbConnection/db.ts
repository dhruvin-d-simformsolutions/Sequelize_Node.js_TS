// db
import { Sequelize } from "sequelize";

<<<<<<< HEAD
export const db: Sequelize = new Sequelize("demo", "postgres", "Simform@123", {
    host: "localhost",
    dialect: "postgres",    
    pool : {
        max :5,
        min : 0,
        acquire : 30000,
        idle : 10000,
    },
    define : {
        freezeTableName : true
    }
});

// export const dbconnection = () => {
//     db.authenticate()
//     .then(() => {
//         console.log("Conection Established ....");
//     })
//     .catch((err) => {
//         console.log(err.message);
//     });
// };
=======
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
>>>>>>> parent of 46b592e... Creating Readme file for model

// const sequelize : Sequelize = new Sequelize('postgres://postgres:Simform@123@localhost:5432/message_boards')
// const sequelize = new Sequelize('message_boards','postgres','Simform@123',{
//   host : 'localhost',
//   dialect : 'postgres'
// })