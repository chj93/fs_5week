// 문제1.
/*
Contacts Model과 User Model을 ManyToMany 관계로 설정한다.
    테이블명은 ContactsUser
Contacts 의 외부키는 contact_id
User 의 외부키는 user_id
*/
const passwordHash = require("../helpers/passwordHash");

module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
      },
      username: {
        type: DataTypes.STRING,
        validate: {
          len: [0, 50]
        },
        allowNull: false
      },

      password: {
        type: DataTypes.STRING,
        validate: {
          len: [3, 100]
        },
        allowNull: false
      },

      displayname: { type: DataTypes.STRING }
    },
    {
      tableName: "User"
    }
  );

  User.associate = (models) => {
    ////models.ContactsMemo or User
    User.belongsToMany(models.Contacts, {
      through: {
        model: 'ContactsUser',
        unique: false,
      },
      as: 'User',   //or User
      foreignKey: 'user_id',
      constraints: false,
      sourceKey: 'id'

    });
  };

  User.beforeCreate((user, _) => {
    user.password = passwordHash(user.password);
  });

  return User;
};
