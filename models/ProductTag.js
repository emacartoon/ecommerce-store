const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    id: {
      // Integer.
      type: DataTypes.INTEGER,
      // Uses auto increment.
      autoIncrement: true,
      // Set as primary key.
      primaryKey: true,
      // Doesn't allow null values.
      allowNull: false,
    },
    product_id: {
      // Integer
      type: DataTypes.INTEGER,
      // Ref Product's model id
      references: {
        key: "id",
        model: "model",
      }
    },
    tag_id :{
      // Integer
      type: DataTypes.INTEGER,
      // Ref Tag's model id
      references: {
        key: "id",
        model: "tag",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
