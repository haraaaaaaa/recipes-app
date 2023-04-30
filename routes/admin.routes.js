// Requirements
const express = require("express");
const router = express.Router();
const {
  getAddRecipe,
  postAddRecipe,
  getAdminRecipes,
} = require("../controllers/admin-controllers");

router.get("/admin/add-recipe", getAddRecipe);
router.post("/admin/add-recipe", postAddRecipe);

router.get("/admin/recipes", getAdminRecipes);

module.exports = router;
