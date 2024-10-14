const express = require("express");
const router = express.Router();  
const verifyToken = require("../middlewares/verifyToken");
const verifySuperAdmin = require("../middlewares/verifySuperAdmin")

const authController = require("../controllers/authController")

router.post("/login", authController.login)
router.post("/register", verifyToken, verifySuperAdmin, authController.registerUser)


module.exports = router