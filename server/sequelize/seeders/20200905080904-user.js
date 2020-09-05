/* eslint-disable no-unused-vars */
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Users',
    [
      {
        id: 1,
        firstname: 'kella',
        lastname: 'aline',
        email: 'kella@example.com',
        password: '1234asd',
        address: 'kicukiro',
        phoneNumber: '0781155667',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        firstname: 'allan',
        lastname: 'hera',
        email: 'allan@example.com',
        password: '1234asd',
        address: 'kicukiro',
        phoneNumber: '0788798777',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ],
    {},
  ),
  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Users', null, {}),
};
