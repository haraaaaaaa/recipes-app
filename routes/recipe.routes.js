// Requirements
const express = require("express");
const router = express.Router();
const { getRecipes } = require("./../controllers/recipe-controllers");

router.get("/", (request, response) => response.redirect("/recipes"));

router.get("/recipes", getRecipes);

module.exports = router;
