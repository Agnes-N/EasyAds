/* eslint-disable no-unused-vars */
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Users',
    [
      {
        firstname: 'kella',
        lastname: 'aline',
        email: 'kella@example.com',
        password: '1234asd',
        address: 'kicukiro',
        phoneNumber: '0781155667'
      },
      {
        firstname: 'allan',
        lastname: 'hera',
        email: 'allan@example.com',
        password: '1234asd',
        address: 'kicukiro',
        phoneNumber: '0788798777'
      },
    ],
    {},
  ),
  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Users', null, {}),
};
