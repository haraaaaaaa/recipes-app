// Requirements
const express = require("express");
const router = express.Router();
const {
  getRecipes,
  getRecipe,
} = require("./../controllers/recipe-controllers");

router.get("/", (request, response) => response.redirect("/recipes"));
router.get("/recipes", getRecipes);

router.get("/recipes/:id", getRecipe);

module.exports = router;
