const express = require("express");
const router = express.Router();
const userController = require("../controllers/auth/userController");

// Create User
router.post("/", userController.createUser);

// Read Users
router.get("/", userController.getUsers);

// Read User by ID
router.get("/:id", userController.getUserById);

// Update User
router.put("/:id", userController.updateUser);

// Delete User
router.delete("/:id", userController.deleteUser);

module.exports = router;
