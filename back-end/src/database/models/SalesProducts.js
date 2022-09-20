module.exports = (sequelize, DataTypes) => {
  const SalesProducts = sequelize.define('SalesProducts', {
    saleId: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.INTEGER,
      field: 'sale_id',
      references: {
        model: 'SalesProducts',
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
    productId: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.INTEGER,
      field: 'product_id',
      references: {
        model: 'Products',
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
    quantity: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: false,
    sequelize: db,
    modelName: 'SalesProducts',
    underscored: true,
  });

  SalesProducts.associate = (models) => {
    SalesProducts.belongsToMany(models.Sales, { foreignKey: 'sale_id'});

    SalesProducts.belongsToMany(models.Products, { foreignKey: 'product_id'});
  };

  return SalesProducts;
};