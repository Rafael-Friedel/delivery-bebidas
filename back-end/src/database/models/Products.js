module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define('Products', {
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
      type: DataTypes.DECIMAL,
    },
    urlImage: {
      allowNull: false,
      type: DataTypes.STRING,
      field: 'url_image',
    }
  },
  {
    timestamps: false,
    sequelize: db,
    modelName: 'Products',
    underscored: true,
  });

  Products.associate = (models) => {
    Products.hasMany(models.SalesProducts,
      { foreignKey: 'product_id'});
  };

  return Products;
};