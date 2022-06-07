'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
    username: 'AppleCore',
    email: 'appleCore@gmail.com',
    hashedPassword: 'password1!',
    createdAt: new Date(),
      updatedAt: new Date()
    },
    {
    username: 'BeeHive',
    email: 'BeeHive@gmail.com',
    hashedPassword: 'password1!',
    createdAt: new Date(),
      updatedAt: new Date()
    },
    {
    username: 'CatCave',
    email: 'CatCave@gmail.com',
    hashedPassword: 'password1!',
    createdAt: new Date(),
      updatedAt: new Date()
    },
    {
    username: 'DuckDen',
    email: 'DuckDene@gmail.com',
    hashedPassword: 'password1!',
    createdAt: new Date(),
      updatedAt: new Date()
    },
    {
    username: 'EagleEcho',
    email: 'EagleEchoe@gmail.com',
    hashedPassword: 'password1!',
    createdAt: new Date(),
      updatedAt: new Date()
    },
    {
    username: 'FruitFighter',
    email: 'FruitFighter@gmail.com',
    hashedPassword: 'password1!',
    createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'nejidies',
      email:'ripneji@gmail.com',
      hashedPassword:'Password1!',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'gaminggamer',
      email:'gaminggamer@gmail.com',
      hashedPassword:'Password1!',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'cookiebrownie',
      email:'cookiebrownie@gmail.com',
      hashedPassword:'Password1!',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'alboring',
      email:'albor66@email.com',
      hashedPassword:'Password1!',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'plant36',
      email:'plant36@gmail.com',
      hashedPassword:'Password1!',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'MatzoMatch',
      email:'mmplays@gmail.com',
      hashedPassword:'Password1!',
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
