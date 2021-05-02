//문제 2
// Contacts Model 과 User 모델에 ManyToMany 로 추가되는 API를 만든다(20)
// POST http://localhost:3000/contacts/user
//     작동 : Contacts 에서 한줄 추가 ContactsUser 에서 한줄 추가
// router.post("/user", ctrl.post_contacts_user);

const models = require("../../models");

exports.post_contacts_user = async (req, res) => {
  try {
    // 아래에 작성하세요.
    //res.render('/user');
    const contacts = await models.Contacts.create(req.body);
    const memo = await models.User.findByPk('user_id');
    //const memo = await models.User.findByPk('user_id');
    contacts.addMemo(memo);

    //users.addMemo(memo);
    //contactsUser.addMemo(memo)
    res.render('/admin/contacts')

    res.json({
      message: "success"
    });
  } catch (e) {
    console.log(e);
    res.json({
      message: "fail"
    });
  }
};

//문제 3
// Contacts Model 과 User 모델에 ManyToMany 로 삭제되는 API를 만든다(20)
// ContactsUser 에서 contact_id 와 user_id 조건으로 조회해서 한줄 삭제한다.
// DELETE http://localhost:3000/contacts/:contact_id/user/:user_id
// router.delete("/:contact_id/user/:user_id", ctrl.delete_contacts_user);
exports.delete_contacts_user = async (req, res) => {
  try {
    // 아래에 작성하세요.
    // const contacts = await models.Contacts.create(req.body);
    // const users = await models.User.create(req.body);
    const contactsUser = await models.ContactsUser.create(req.body);
    let id = contactsUser.findAll({attributes:['contact_id','user_id']})
    contactsUser.removeId(id);

    res.json({
      message: "success"
    });
  } catch (e) {
    console.log(e);
    res.json({
      message: "fail"
    });
  }
};
