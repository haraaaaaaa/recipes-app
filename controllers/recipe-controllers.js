// Requirements
const Recipe = require("../models/Recipe");

exports.getRecipes = async (request, response) => {
  // const recipes = await Recipe.fetchAll();

  response.render("home", {
    pageTitle: "Fantastic Meals",
    path: "/recipes",
    //recipes,
  });
};

exports.getRecipe = async (request, response) => {
  const { id } = request.params;

  const recipe = await Recipe.findById();

  if (!recipe) {
    return response.render("error", {
      pageTitle: "Error 404",
      message: "Desired Recipe was not found.",
      path: "*",
    });
  }

  response.render("recipe", {
    pageTitle: recipe.title,
    path: "/recipes",
    recipe,
  });
};
