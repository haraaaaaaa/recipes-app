// Requirements
const express = require("express");
const router = express.Router();
const {
  getRecipes,
  getRecipe,
  postLike,
} = require("./../controllers/recipe-controllers");

router.get("/", (request, response) => response.redirect("/recipes"));
router.get("/recipes", getRecipes);

router.get("/recipes/:id", getRecipe);

router.post("/recipes/:id/like", postLike);

module.exports = router;
