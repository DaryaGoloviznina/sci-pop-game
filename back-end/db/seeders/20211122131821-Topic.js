'use strict';

module.exports = {
 up: async (queryInterface, Sequelize) => {
  await queryInterface.bulkInsert('Topics', [
   {name: 'Атомная энергетика', createdAt: new Date(), updatedAt: new Date(),},
   {name: 'Климат', createdAt: new Date(), updatedAt: new Date(),},
   {name: 'Роботы', createdAt: new Date(), updatedAt: new Date(),},
   {name: 'Разное', createdAt: new Date(), updatedAt: new Date(),},
   {name: 'Железные дороги', createdAt: new Date(), updatedAt: new Date(),},
  ], {});
  
 },

 down: async (queryInterface, Sequelize) => {
  await queryInterface.bulkDelete('Topics', null, {});
 }
};
