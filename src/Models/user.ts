import { Sequelize, DataTypes, Model } from 'sequelize';
import { db } from "../dbConnection/db";

const User = db.define('User', {
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

db.sync({ force:false,logging: console.log })
    .then(() => {
        // User.create({
        //     firstName : "Meet",
        //     lastName : "abc"
        // })
        console.log("sync Successful");
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
