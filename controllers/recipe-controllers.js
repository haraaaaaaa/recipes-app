// Requirements
const Recipe = require("../models/Recipe");

exports.getRecipes = async (request, response) => {
  const recipes = await Recipe.fetchAll();

  response.render("home", {
    pageTitle: "Fantastic Meals",
    path: "/recipes",
    recipes,
  });
};
