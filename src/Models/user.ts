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
    tableName: 'Users' //Providing the table name directly
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
        User.bulkCreate([
            { firstName: "Dhruvin", lastName: "Dankhara" },
            { firstName: "Meet", lastName: "Dankhara" },
            { firstName: "Hansa", lastName: "Dankhara" },
        ]).then(() => {
            return User.findAll();
        }).then((users) => {
            console.log(users);
        });
    });

// const sequelize = new Sequelize()
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
