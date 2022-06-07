'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Questions',[
    {
      title:'im stuck in bronze help pls.',
      question: 'I cant get out of bronze but i play 40 hours a week.',
      voteCount: 1,
      categoryId: 1,
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
        title:'im stuck in bronze help pls.',
        question: 'I cant get out of bronze but i play 40 hours a week.',
        voteCount: 1,
        categoryId: 2,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        title:'im stuck in bronze help pls.',
        question: 'I cant get out of bronze but i play 40 hours a week.',
        voteCount: 1,
        categoryId: 3,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        title:'Best build for DPS Poppy?',
        question: 'Running triple IE but not working? She gets wrecked instantly',
        voteCount: 1,
        categoryId: 1,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        title:'Does anyone play hollow knights?',
        question: 'I am looking for guides but it seems no one plays this game. Pls drop wiki here thx.',
        voteCount: 0,
        categoryId: 4,
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        title:'how to make Farfetchd a more meta pokemon?',
        question: 'my farfetchd has max IVs and its moveset is quick attack, peck, endeavor and agility but i cant beat Roxannes Nosepass. Rock Tomb one hits me even though im level 45. any tips on how to make my wittle chicken stronger?',
        voteCount: 561,
        categoryId: 5,
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        title:'How do you play Palkia deck for Pokemon TCG?',
        question: 'I bought another deck for $200 dollars this dude still droppin me off. HELP. ',
        voteCount: 14,
        categoryId: 6,
        userId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        title:'How do you play Arceus deck for Pokemon TCG?',
        question: 'Yesterday I bought a deck for $190 but my little cousin still beats on me. Can anyone drop their builds and play strategy?',
        voteCount: 15,
        categoryId: 6,
        userId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        title:'Clockwork Innovator Build',
        question: 'i have to run clockwork innovator cause Zilean is my favorite character. how do i build a team around my grandpa?',
        voteCount: 2,
        categoryId: 1,
        userId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        title:'Can you still play Volibear Top?',
        question: 'My team flames me when I instalock Volibear top. Whats the ideal build for maximum top lane toxicit',
        voteCount: 30,
        categoryId: 2,
        userId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        title:'Whos the best Duelist out?',
        question: 'Is it Jett or Reyna? ',
        voteCount: 45,
        categoryId: 3,
        userId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        title:'rattata',
        question: 'focus band, endeavor, quick attack still viable in competitive???',
        voteCount: 2128391,
        categoryId: 5,
        userId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        title:'Chemtech Challenger',
        question: 'braindead comp ezclap. almost as good as divine warwick.',
        voteCount:199,
        categoryId: 1,
        userId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        title:'Best charm?',
        question: 'whats the best charm? and why is it dashmaster? xd',
        voteCount: 0,
        categoryId: 4,
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        title:'How do you kill Dr. Mundo?',
        question: 'Mundo is meta rn but who counters him? My Volibear top does no damage but I really dont wanna play anyone else.',
        voteCount: 1,
        categoryId: 2,
        userId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        title:'How do I Git Gud?',
        question: 'I cant beat the first boss in Hollow Knight!!!',
        voteCount: 0,
        categoryId: 4,
        userId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        title:'Does anyone play hollow knights?',
        question: 'I am looking for guides but it seems no one plays this game. Pls drop wiki here thx.',
        voteCount: 100,
        categoryId: 4,
        userId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        title:'How do I farm Geo?',
        question: 'I am looking for guides on farming currency early.',
        voteCount: 1,
        categoryId: 4,
        userId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        title:'Which ending is the best ending?',
        question: 'I am torn between the 7 different endings, which should i go for?',
        voteCount: 1,
        categoryId: 4,
        userId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        title:'Does anyone know of Silksong references in Hollow knights?',
        question: 'Where is Silksong?',
        voteCount: 1,
        categoryId: 4,
        userId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        title:'Which Boss fight gave you the hardest time?',
        question: 'I am looking for anyone who is struggling on the first boss.',
        voteCount: 1,
        categoryId: 4,
        userId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        title:'Where can i find King idols?',
        question: 'I am looking for the locations of King Idols, so i can ugrade my nail.',
        voteCount: 1,
        categoryId: 4,
        userId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        title:'Does anyone not play hollow knights?',
        question: 'I am looking for people who gave up playing Hollow Knight because its hard',
        voteCount: 1,
        categoryId: 4,
        userId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
], {});
},

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Questions', null, {});
  }
};
