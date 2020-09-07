export default (sequelize, DataTypes) => {
  const Category = sequelize.define(
    'Categories',
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING
    },
    {},
  );
  Category.associate = (models) => {
    Category.belongsTo(models.Products, {
      foreignKey: 'categoryId',
      as: 'category',
      onDelete: 'CASCADE',
    });
  };
  return Category;
};
