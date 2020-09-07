/* eslint-disable no-unused-vars */
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Categories',
    [
      {
        id: 1,
        name: 'phone',
        description: 'techno',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        name: 'clothes',
        description: 'dresses',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ],
    {},
  ),
  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Categories', null, {}),
};
