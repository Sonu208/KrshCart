const express = require("express");
const {registerUser, loginUser, forgotPassword, resetPassword,logout} = require("../controllers/userController");

const router = express.Router();

router.route("/register").post(registerUser);

router.route("/login").post(loginUser);

router.route("/password/forgot").post(forgotPassword);

router.put("/password/reset/:Token", resetPassword);

router.route("/logout").get(logout);

module.exports = router;