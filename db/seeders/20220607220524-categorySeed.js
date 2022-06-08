'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Categories', [{
      name: "Team Fight Tactics",
      totalVotes: "15",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "League of Legends",
      totalVotes: "10",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Apex Legends",
      totalVotes: "30",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Valorant",
      totalVotes: "20",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Hollow Knight",
      totalVotes: "300",
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
      return queryInterface.bulkDelete('Categories', null, {});
  }
};
