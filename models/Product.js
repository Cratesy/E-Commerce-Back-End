// import important parts of sequelize library
const { Model, DataTypes } = require("sequelize");
// import our database connection from config.js
const sequelize = require("../config/connection");

const schema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  product_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL,
    allowNull: false,
    validate: {
      decimal: true,
    },
  },
  stock: {
    type: DataTypes.INTEGER,
    default: 10,
    allowNull: false,
    validate: {
      INTEGER: true,
    },
  },
  category_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    References: {
      model: "Category",
      key: "id",
    },
  },
};

const options = {
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: "product",
};
// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(schema, options);

module.exports = Product;
