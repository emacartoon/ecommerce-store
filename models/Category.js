const { Model, DataTypes, STRING } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    id: {
      // Integer.
      type: DataTypes.INTEGER,
      // Uses auto increment.
      autoIncrement: true,
      // Set as primary key.
      primaryKey: true,
      // Doesn't allow null values.
      allowNull: false
    },
    category_name: {
      // String
      type: DataTypes.STRING,
      // Doesn't allow null values.
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
