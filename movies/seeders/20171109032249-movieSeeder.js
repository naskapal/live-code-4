'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Movies', [{
      name: 'Cintaku Kepentok Sudoku',
      released_year: 2016,
      genre: 'komedi'
    }, {
      name: 'Ratapan di Depan Mac Mini',
      released_year: 2014,
      genre: 'drama'
    }, {
      name: 'Boggle 2, The Haunting Anchor',
      released_year: 2011,
      genre: 'horor'
    }, {
      name: 'Taubat Instruktur Karena Tugas Tak Dibuat',
      released_year: 2000,
      genre: 'religi'
    }, {
      name: 'Heroku wa Heromu da',
      released_year: 2008,
      genre: 'animasi'
    }])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
