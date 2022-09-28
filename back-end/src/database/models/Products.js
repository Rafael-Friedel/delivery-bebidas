module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
    },
    price: {
      allowNull: false,
      type: DataTypes.DECIMAL(4,2),
    },
    urlImage: {
      allowNull: false,
      type: DataTypes.STRING,
      field: 'url_image',
    }
  },
  {
    timestamps: false,
    // sequelize: db,
    tableName: 'products',
    underscored: true,
  });

 /*  Product.associate = (models) => {
    Product.hasMany(models.SalesProduct,
      { foreignKey: 'product_id'});
  }; */

  return Product;
};