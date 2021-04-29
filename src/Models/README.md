### Models can be defined in two equivalent ways in Sequelize:

- Calling sequelize.define(modelName, attributes, options)
- Extending Model and calling init(attributes, options)

available within sequelize.models by it's model name.
Internally, sequelize.define calls Model.init, so both approaches are essentially equivalent.

### Enforcing the table name to be equal to the model name
You can stop the auto-pluralization performed by Sequelize using the option.
- freezeTableName: true  

### Providing the table name directly
You can simply tell Sequelize the name of the table directly as well:

sequelize.define('User', {
  // ... (attributes)
}, {
  tableName: 'Employees'
});

### Model synchronization
When you define a model, you're telling Sequelize a few things about its table in the database. However, what if the table actually doesn't even exist in the database? What if it exists, but it has different columns, less columns, or any other difference?

This is where model synchronization comes in. A model can be synchronized with the database by calling model.sync(options), an asynchronous function (that returns a Promise). With this call, Sequelize will automatically perform an SQL query to the database. Note that this changes only the table in the database, not the model in the JavaScript side.

User.sync() - This creates the table if it doesn't exist (and does nothing if it already exists)
User.sync({ force: true }) - This creates the table, dropping it first if it already existed
User.sync({ alter: true }) - This checks what is the current state of the table in the database (which columns it has, what are their data types, etc), and then performs the necessary changes in the table to make it match the model.
Example:

- Syncronizing Specific model
await User.sync({ force: true });
console.log("The table for the User model was just (re)created!");

- Synchronizing all models at once
await sequelize.sync({ force: true });
console.log("All models were synchronized successfully.");

- Drop Specific table related to Model
await User.drop();
console.log("User table dropped!");

- Drop All table
await sequelize.drop();   
console.log("All tables dropped!");

### Timestamp