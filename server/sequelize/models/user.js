export default (sequelize, DataTypes) => {
  const User = sequelize.define(
    'Users',
    {
      firstname: DataTypes.STRING,
      lastname: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      address: DataTypes.STRING,
      phoneNumber: DataTypes.STRING
    },
    {},
  );
  User.associate = (models) => {
    User.hasMany(models.Products, {
      foreignKey: 'userId',
      as: 'product',
      onDelete: 'CASCADE',
    });
  };
  return User;
};
