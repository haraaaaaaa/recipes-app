// Requirements
const Recipe = require("../models/Recipe");
const Comment = require("../models/Comment");

exports.getRecipes = async (request, response) => {
  const recipes = await Recipe.fetchAll();

  response.render("home", {
    pageTitle: "Fantastic Meals",
    path: "/recipes",
    recipes,
  });
};

exports.getRecipe = async (request, response) => {
  const { id } = request.params;
  const recipe = await Recipe.findById(id);
  const comments = /*await Comment.fetchAll(id)*/ [];

  if (!recipe) {
    const error = { title: "Error 404", message: "Not Found" };
    return response.render("error", {
      pageTitle: error.title,
      path: "*",
      error,
    });
  }

  response.render("detailed-recipe", {
    pageTitle: recipe.title,
    path: "/recipes/",
    recipe,
    comments,
  });
};
