/* eslint-disable no-unused-vars */
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Products',
    [
      {
        id: 1,
        userId: 2,
        title: 'Phone',
        price: 10000,
        status: 'available',
        image: 'ddddd',
        categoryId: 1,
        description: 'In a good condition.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        userId: 1,
        title: 'kids clothes',
        price: 10000,
        status: 'available',
        image: 'ddddd',
        categoryId: 2,
        description: 'clothes for girls',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ],
    {},
  ),
  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Products', null, {}),
};
