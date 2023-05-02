// Requirements
const express = require("express");
const router = express.Router();
const { postComment } = require("../controllers/comment-controllers");

router.post("/recipes/:id", postComment);

module.exports = router;
