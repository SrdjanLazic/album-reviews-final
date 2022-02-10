'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Albums', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      year: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      genre: {
        type: Sequelize.STRING,
        allowNull: false
      },
      title: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      },
      albumArtURL: {
        type: Sequelize.STRING,
      },
      artistId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Artists', 
          key: 'id', 
       }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Albums');
  }
};