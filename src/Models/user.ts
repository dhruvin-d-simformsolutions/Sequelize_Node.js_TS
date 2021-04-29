import { Sequelize, DataTypes, Model } from 'sequelize';
import { connection, dbconnection } from "../dbConnection/db";

const User = connection.define('User', {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
    },
}, {
    //Other model options go here
    tableName: 'User' //Providing the table name directly
});

// (async () => {
//     await connection.sync({ force: true })
//     await User.bulkCreate([
//         { firstName: "Dhruvin", lastName: "Dankhara" },
//         { firstName: "Meet", lastName: "Dankhara" },
//         { firstName: "Hansa", lastName: "Dankhara" },
//     ])
// })();

connection.sync({ force:true,logging: console.log })
    .then(() => {
<<<<<<< HEAD
        // User.create({
        //     firstName : "Meet",
        //     lastName : "abc"
        // })
        console.log("sync Successful");
=======
        User.bulkCreate([
            { firstName: "Dhruvin", lastName: "Dankhara" },
            { firstName: "Meet", lastName: "Dankhara" },
            { firstName: "Hansa", lastName: "Dankhara" },
        ]).then(() => {
            return User.findAll();
        }).then((users) => {
            console.log(users);
        });
>>>>>>> parent of 46b592e... Creating Readme file for model
    });
    
////Model init method
// class User extends Model { }
// User.init({
//     firstName: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     lastName: {
//         type: DataTypes.STRING,
//     }
// }, {
//     sequelize,
//     modelName: 'User',
//     freezeTableName: true //Enforcing the table name to equal to the model name
// });

// console.log(User == connection.models.User);

export {User};
