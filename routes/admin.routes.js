// Requirements
const express = require("express");
const router = express.Router();
const {
  getAddRecipe,
  postAddRecipe,
} = require("../controllers/admin-controllers");

router.get("/admin/add-recipe", getAddRecipe);
router.post("/admin/add-recipe", postAddRecipe);

module.exports = router;
