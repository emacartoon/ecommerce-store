const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model {}

Tag.init(
  {
    id: {
      // Integer.
      type: DataTypes.INTEGER,
      // Doesn't allow null values.
      allowNull: false,
      // Uses auto increment.
      autoIncrement: true,
      // Set as primary key.
      primaryKey: true,
    },
    tag_name: {
      // String
      type: DataTypes.STRING,

    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;