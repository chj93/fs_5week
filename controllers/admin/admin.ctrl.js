const models = require("../../models");

exports.get_contacts = async (_, res) => {
  try {
    const contacts = await models.Contacts.findAll({});
    res.render("admin/contacts.html", { contacts });
  } catch (e) {}
};

exports.get_contacts_write = (_, res) => {
  res.render("admin/write.html");
};

exports.post_contacts_write = async (req, res) => {
  try {
    await models.Contacts.create(req.body);
    res.redirect("/admin/contacts");
  } catch (e) {}
};

exports.get_contacts_detail = async (req, res) => {
  try {
    const contact = await models.Contacts.findByPk(req.params.id);

    res.render("admin/detail.html", { contact });
  } catch (e) {}
};

exports.get_contacts_edit = async (req, res) => {
  try {
    const contact = await models.Contacts.findByPk(req.params.id);
    res.render("admin/write.html", { contact });
  } catch (e) {}
};

exports.post_contacts_edit = async (req, res) => {
  try {
    await models.Contacts.update(req.body, {
      where: { id: req.params.id }
    });
    res.redirect(`/admin/contacts/detail/${req.params.id}`);
  } catch (e) {}
};

exports.get_contacts_delete = async (req, res) => {
  try {
    await models.Contacts.destroy({
      where: {
        id: req.params.id
      }
    });
    res.redirect("/admin/contacts");
  } catch (e) {}
};

// 작성해주세요
exports.add_memo = async (req, res) => {};

// 작성해주세요
exports.remove_memo = async (req, res) => {};
