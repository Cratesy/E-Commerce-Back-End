const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

const schema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  tag_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
};

const options = {
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: "tag",
};

class Tag extends Model {}

Tag.init(schema, options);

module.exports = Tag;
