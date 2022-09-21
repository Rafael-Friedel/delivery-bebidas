module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define('Sale', {
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
    // sequelize: db,
    tableName: 'sales',
    underscored: true,
  });

  Sale.associate = (models) => {
    Sale.hasMany(models.SalesProduct, { foreignKey: 'sale_id'});

    Sale.belongsTo(models.User, { foreignKey: 'user_id'});
    Sale.belongsTo(models.User, { foreignKey: 'seller_id'});
  };

  return Sale;
};