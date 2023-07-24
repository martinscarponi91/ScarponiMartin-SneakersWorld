const express = require("express");
const router = express.Router();
const {
  renderIndex,
  renderLogin,
  renderRegister,
} = require("../controllers/indexcontrollers");

router.get("/", renderIndex);
router.get("/login", renderLogin);
router.get("/register", renderRegister);

module.exports = router;
