'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Categories', [{
      name: "Team Fight Tactics",
      totalVotes: 15,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "League of Legends",
      totalVotes: 10,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Valorant",
      totalVotes: 20,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Hollow Knight",
      totalVotes: 30,
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      name: "Pokemon",
      totalVotes: 30,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Pokemon TCG",
      totalVotes: 30,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Categories', null, {});
  }
};
