const { Router } = require("express");
const router = Router();
const ctrl = require("./contacts.ctrl");

router.post("/user", ctrl.post_contacts_user);
router.delete("/:contact_id/user/:user_id", ctrl.delete_contacts_user);

module.exports = router;
