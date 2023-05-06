// Requirements
const Recipe = require("../models/Recipe");
const Category = require("../models/Category");

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
  const likes = 0;
  const recipe = new Recipe(
    title,
    instructions,
    ingredients,
    imgUrl,
    likes,
    category
  );

  if (
    recipe.title.length === 0 ||
    recipe.instructions.length === 0 ||
    recipe.ingredients === 0 ||
    recipe.imgUrl.length === 0
  ) {
    const error = {
      title: "Error 404",
      message: "Bad request! Recipe form not filled in properly!",
    };
    return response.render("error", {
      pageTitle: error.title,
      path: "*",
      error,
    });
  } else {
    await recipe.save();
    return response.redirect("/");
  }
};

exports.getAdminRecipes = async (request, response) => {
  const recipes = await Recipe.fetchAll();

  response.render("admin-recipes", {
    pageTitle: "Recipes Overview",
    path: "/admin/recipes",
    recipes,
  });
};

exports.getEditRecipe = async (request, response) => {
  const { id } = request.params;

  const recipe = await Recipe.findById(id);
  const categories = await Category.fetchAll();

  response.render("edit-recipe", {
    pageTitle: "Edit Recipe",
    path: "/admin/recipes",
    recipe,
    categories,
  });
};

exports.postEditRecipe = async (request, response) => {
  const { id } = request.params;
  const { title, imgUrl, instructions, category, ingredients } = request.body;

  const recipe = new Recipe(title, instructions, ingredients, imgUrl, category);
  await recipe.save();

  response.redirect("/admin/recipes");
};

exports.getDeleteRecipe = async (request, response) => {
  const { id } = request.params;

  await Recipe.deleteById(id);
  response.redirect("/admin/recipes");
};