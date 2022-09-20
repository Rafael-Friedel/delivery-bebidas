module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    role: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
    // sequelize: db,
    modelName: 'Users',
    underscored: true,
  });

  Users.associate = (models) => {
    Users.hasMany(models.Sales,
      { foreignKey: 'user_id'});
    Users.hasMany(models.Sales,
      { foreignKey: 'seller_id'});
  };

  return Users;
};