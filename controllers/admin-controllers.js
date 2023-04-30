// Requirements
const Recipe = require("../models/Recipe");
const Category = require("../models/Category");
const { ingredients } = require("../public/javascript/ingredients");

exports.getAddRecipe = async (request, response) => {
  const categories = await Category.fetchAll();

  response.render("add-recipe", {
    pageTitle: "Add New Recipe",
    path: "/admin/add-recipe",
    categories,
  });
};

exports.postAddRecipe = async (request, response) => {
  const { title, imgUrl, instructions, category, ingredients } = request.body;
  console.log(title, imgUrl, instructions, category, ingredients);
  const recipe = new Recipe(title, instructions, ingredients, imgUrl, category);
  await recipe.save();

  response.redirect("/");
};