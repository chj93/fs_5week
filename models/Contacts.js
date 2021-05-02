// 문제1.
/*
Contacts Model 과 User Model을 ManyToMany 관계로 설정한다.
    테이블명은 ContactsUser(교차테이블 체크아웃메뉴)
Contacts 의 외부키는 contact_id
User 의 외부키는 user_id
*/

const moment = require("moment");

module.exports = function (sequelize, DataTypes) {
  const Contacts = sequelize.define("Contacts", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING },
    price: { type: DataTypes.INTEGER },
    description: { type: DataTypes.TEXT }
  });

  Contacts.associate = (models) => {
/*
    Contacts.hasMany(models.ContactsMemo, {
      as: "Memo",
      foreignKey: "contact_id",
      sourceKey: "id",
      onDelete: "CASCADE"
    });*/
/*
    Contacts.hasOne(models.ContactsMemo, {
      as: "Memo",
      foreignKey: "contact_id",
      sourceKey: "id",
      onDelete: "CASCADE"
    });
*/

    //models.ContactsMemo or -
    Contacts.belongsToMany(models.User, {
      through: {
        model: 'ContactsUser',
        unique: false,
      },
      as: 'Memo',   //or User
      foreignKey: 'contact_id',
      constraints: false,
      sourceKey: 'id'
    });
    //
    // Contacts.belongsTo(
    //     models.User,
    //     { as :'Shop',  foreignKey: 'shop_id', targetKey: 'id'}
    // );

  };



  Contacts.prototype.dateFormat = (date) => moment(date).format("YYYY-MM-DD");

  return Contacts;
};
