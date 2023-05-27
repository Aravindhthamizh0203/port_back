const express = require("express");
const { messagecreate } = require("../controller/messageController");
const router = express.Router();





router.post("/", messagecreate);

module.exports = router;