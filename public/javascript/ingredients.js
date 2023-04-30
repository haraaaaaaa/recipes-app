// Selectors
const userInputs = document.querySelectorAll("input");
const addIngredientButton = document.getElementById("add-ing");
const listBlock = document.querySelector(".listBlock");

// Array of Ingredient Objects
const ingredientsList = [];

// Adding New Ingredient
const ingredientHandler = async (event) => {
  event.preventDefault();

  let ingredientName = userInputs[2].value;
  let ingredientQuantity = userInputs[3].value;
  let ingredientMeasure = userInputs[4].value;

  let ingredient = {
    name: ingredientName,
    quantity: ingredientQuantity,
    measure: ingredientMeasure,
  };

  ingredients.push(ingredient);

  // Ingridients DIV
  const ingredientsDiv = document.createElement("div");
  ingredientsDiv.classList.add("ingredients__list");

  // Creates LI
  const newIngredient = document.createElement("li");
  newIngredient.innerHTML = ingredient;
  newIngredient.classList.add("list__ingredient");
  ingredientsDiv.appendChild(newIngredient);

  // Appends an Ingridient to List Block
  listBlock.appendChild(ingredientsDiv);

  // Clears Input Values
  userInputs[2].value = "";
  userInputs[3].value = "";
  userInputs[4].value = "";
};

addIngredientButton.addEventListener("click", ingredientHandler);
module.exports = ingredientsList;
