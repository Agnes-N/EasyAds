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
        phoneNumber: '$2b$10$8cbZWaU5TN3c0l77VcOJ6uhWJ1Z/lwVTbtQMcgjbdsGPd4qKbtgU6',
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
        phoneNumber: '$2b$10$8cbZWaU5TN3c0l77VcOJ6uhWJ1Z/lwVTbtQMcgjbdsGPd4qKbtgU6',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        firstname: 'aggy',
        lastname: 'reina',
        email: 'aggyreina@gmail.com',
        password: '1234567',
        address: 'gasabo',
        phoneNumber: '$2b$10$8cbZWaU5TN3c0l77VcOJ6uhWJ1Z/lwVTbtQMcgjbdsGPd4qKbtgU6',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 7,
        firstname: 'aggy',
        lastname: 'reina',
        email: 'reina@gmail.com',
        password: '$2b$10$jrNC42yidPdtdg7Ae8.stOmS4FbFiWFDVcHoMwlsCUX42duZDhlby',
        address: 'gasabo',
        phoneNumber: '0788234567',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ],
    {},
  ),
  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Users', null, {}),
};
