export default (sequelize, DataTypes) => {
  const Product = sequelize.define(
    'Products',
    {
      userId: DataTypes.INTEGER,
      title: DataTypes.STRING,
      price: DataTypes.STRING,
      status: DataTypes.STRING,
      image: DataTypes.STRING,
      categoryId: DataTypes.INTEGER,
      description: DataTypes.STRING
    },
    {},
  );
  Product.associate = (models) => {
    Product.belongsTo(models.Users, {
      foreignKey: 'userId',
      as: 'User',
      onDelete: 'CASCADE',
    });
    Product.hasMany(models.Category, {
      foreignKey: 'categoryId',
      as: 'Category',
      onDelete: 'CASCADE',
    });
  };
  return Product;
};
