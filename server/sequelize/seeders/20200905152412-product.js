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
      {
        id: 6,
        userId: 7,
        title: 'laptop',
        price: '2000000',
        status: 'available',
        image: 'http://res.cloudinary.com/champsdev/image/upload/v1599600549/kgevakqe0mfnuc8rqqkc.jpg',
        categoryId: 4,
        description: 'amazing',
        createdAt: '2020-09-08T21:29:10.564Z',
        updatedAt: '2020-09-08T21:29:10.565Z'
      }
    ],
    {},
  ),
  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Products', null, {}),
};
