import express from "express";
const router = express.Router();
const { userDetails } = require("../controller/user");

router.get("/users/:id", userDetails);

module.exports = router;
