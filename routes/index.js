const express = require("express");
const { getUsers } = require("../controllers/Users")
const { Register } = require("../controllers/Regsiter")
const { Login } = require("../controllers/Login")
const userController = require("../controllers/auth/userController");



const router = express.Router();

router.get('/users', getUsers);
router.post('/users', Register);
router.post('/login', Login);

module.exports = router;
