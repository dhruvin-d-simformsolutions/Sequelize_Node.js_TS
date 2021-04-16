### Models can be defined in two equivalent ways in Sequelize:

- Calling sequelize.define(modelName, attributes, options)
- Extending Model and calling init(attributes, options)

available within sequelize.models by it's model name.
Internally, sequelize.define calls Model.init, so both approaches are essentially equivalent.
You can stop the auto-pluralization performed by Sequelize using the freezeTableName: true option. 