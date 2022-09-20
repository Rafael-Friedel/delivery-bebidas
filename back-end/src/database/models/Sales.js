module.exports = (sequelize, DataTypes) => {
  const Sales = sequelize.define('Sales', {
    id: {
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      field: 'user_id',
      references: {
        model: 'Users',
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
    sellerId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      field: 'seller_id',
      references: {
        model: 'Users',
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
    totalPrice: {
      allowNull: false,
      type: DataTypes.DECIMAL,
      field: 'total_price',
    },
    deliveryAddress: {
      allowNull: false,
      type: DataTypes.STRING,
      field: 'delivery_address',
    },
    deliveryNumber: {
      allowNull: false,
      type: DataTypes.STRING,
      field: 'delivery_number'
    },
    saleDate: {
      allowNull: false,
      type: DataTypes.DATE,
      field: 'sale_date'
    },
    status: {
      allowNull: false,
      type: DataTypes.STRING,
    }
  },
  {
    timestamps: false,
    sequelize: db,
    modelName: 'Sales',
    underscored: true,
  });

  Sales.associate = (models) => {
    Sales.hasMany(models.SalesProducts, { foreignKey: 'sale_id'});

    Sales.belongsTo(models.Users, { foreignKey: 'user_id'});
    Sales.belongsTo(models.Users, { foreignKey: 'seller_id'});
  };

  return Sales;
};