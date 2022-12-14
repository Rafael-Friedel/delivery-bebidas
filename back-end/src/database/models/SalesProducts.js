module.exports = (sequelize, DataTypes) => {
  const SalesProduct = sequelize.define('SalesProduct', {
    saleId: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.INTEGER,
      field: 'sale_id',
      references: {
        model: 'Sales',
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
    // sequelize: db,
    tableName: 'sales_products',
    underscored: true,
  });

  SalesProduct.associate = (models) => {
    models.Sale.belongsToMany(models.Product, {
      as: 'Products',
      through: SalesProduct,
      foreignKey: 'saleId',
      otherKey: 'productId'
    });

    models.Product.belongsToMany(models.Sale, {
      as: 'sales',
      through: SalesProduct,
      foreignKey: 'productId',
      otherKey: 'saleId'
    });
  
  }
  return SalesProduct
}
    //SalesProducts.belongsToMany(models.Sales, { foreignKey: 'sale_id',});

    //SalesProducts.belongsToMany(models.Products, { foreignKey: 'product_id'});