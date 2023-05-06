// Requirements
const express = require("express");
const router = express.Router();
const {
  getAddRecipe,
  postAddRecipe,
  getAdminRecipes,
  getDeleteRecipe,
  getEditRecipe,
  postEditRecipe,
} = require("../controllers/admin-controllers");

router.get("/admin/add-recipe", getAddRecipe);
router.post("/admin/add-recipe", postAddRecipe);

router.get("/admin/recipes", getAdminRecipes);

router.get("/admin/recipes/:id/delete", getDeleteRecipe);

router.get("/admin/recipes/:id/edit", getEditRecipe);
router.post("/admin/recipes/:id/edit", postEditRecipe);

module.exports = router;
