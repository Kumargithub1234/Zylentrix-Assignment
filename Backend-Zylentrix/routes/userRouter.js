const express = require("express");
const { registerUser, loginUser } = require("../controller/userController");
const router = express.Router();

router.post("/auth/signup", registerUser);
router.post("/auth/login", loginUser);

module.exports = router;
