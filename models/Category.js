const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

const schema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  category_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
};

const options = {
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: "Category",
};

class Category extends Model {}

Category.init(schema, options);

module.exports = Category;
