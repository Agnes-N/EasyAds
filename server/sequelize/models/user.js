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
  return User;
};
