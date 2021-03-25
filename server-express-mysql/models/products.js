/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('products', {
    ProductId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Cost: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    Type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Quantity: {
      type: DataTypes.INTEGER(99),
      allowNull: false
    }
  }, {
    tableName: 'products'
  });
};
