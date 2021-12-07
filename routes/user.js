const express = require("express");
const router = express.Router();

const db = require("../config/connect");
const {getAllUser, getUserById, addUser, deleteUser, editUser} = require("../controllers/userControllers")

router.get("/", getAllUser);

router.get("/:id", getUserById);

router.post("/", addUser);

router.delete("/:id", deleteUser);

router.put("/:id", editUser);

module.exports = router;
