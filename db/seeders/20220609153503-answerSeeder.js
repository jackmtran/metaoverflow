'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Answers', [
    {
      answer: "Have you tried getting good?",
      voteCount: 0,
      userId: 1,
      questionId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      answer: "Have you tried getting good?",
      voteCount: 0,
      userId: 2,
      questionId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      answer: "Have you tried getting good?",
      voteCount: 0,
      userId: 3,
      questionId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      answer: "Have you tried getting good?",
      voteCount: 0,
      userId: 4,
      questionId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      answer: "Have you tried getting good?",
      voteCount: 0,
      userId: 5,
      questionId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      answer: "Have you tried getting good?",
      voteCount: 0,
      userId: 6,
      questionId: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      answer: "Have you tried getting good?",
      voteCount: 0,
      userId: 7,
      questionId: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      answer: "Have you tried getting good?",
      voteCount: 0,
      userId: 8,
      questionId: 8,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      answer: "Have you tried getting good?",
      voteCount: 0,
      userId: 9,
      questionId: 9,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      answer: "Have you tried getting good?",
      voteCount: 0,
      userId: 10,
      questionId: 10,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      answer: "Have you tried getting good?",
      voteCount: 0,
      userId: 11,
      questionId: 11,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      answer: "Have you tried getting good?",
      voteCount: 0,
      userId: 12,
      questionId: 12,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      answer: "Have you tried getting good?",
      voteCount: 0,
      userId: 13,
      questionId: 13,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      answer: "I think Dung Defender is the best charm.",
      voteCount: 0,
      userId: 13,
      questionId: 14,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      answer: "You must use Grevious wounds!",
      voteCount: 0,
      userId: 13,
      questionId: 15,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      answer: "Glytch energy drink.",
      voteCount: 0,
      userId: 13,
      questionId: 16,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      answer: "Have you tried getting good?",
      voteCount: 0,
      userId: 1,
      questionId: 17,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      answer: "Have you tried getting good?",
      voteCount: 0,
      userId: 2,
      questionId: 18,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      answer: "Have you tried getting good?",
      voteCount: 0,
      userId: 3,
      questionId: 19,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      answer: "Have you tried getting good?",
      voteCount: 0,
      userId: 4,
      questionId: 20,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      answer: "Have you tried getting good?",
      voteCount: 0,
      userId: 5,
      questionId: 21,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      answer: "Have you tried getting good?",
      voteCount: 0,
      userId: 6,
      questionId: 22,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      answer: "Have you tried getting good?",
      voteCount: 0,
      userId: 7,
      questionId: 23,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Answers', null, {});
  }
};
