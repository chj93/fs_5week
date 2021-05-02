"use strict";
//문제 4
// $ npx sequelize-cli db:migrate
// $ npx sequelize-cli migration:generate --name contacts-change-price
//
// npx sequelize-cli db:migrate -> String 필드로
// npx sequelize-cli db:migrate:undo -> 다시 Integer
module.exports = {
  up: async (queryInterface, Sequelize) => {
    //아래에 작성하세요
    return queryInterface.changeColumn('Contacts', 'price', {
      type : Sequelize.STRING
    });
  },
  down: async (queryInterface, Sequelize) => {
    // 아래에 작성하세요.
    return queryInterface.changeColumn('Contacts','price', {
      type : Sequelize.INTEGER
    })
  }
};
