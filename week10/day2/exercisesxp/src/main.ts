import "./style.css";

import { v4 as uuidv4 } from "uuid";

import RecipeItem from "./model/RecipeItem";
import RecipeCollection from "./model/RecipeCollection";
import RecipeTemplate from "./templates/RecipeTemplate";

const recipeCollection =
  new RecipeCollection();

const recipeTemplate =
  new RecipeTemplate(recipeCollection);

const form =
  document.getElementById(
    "recipeEntryForm"
  ) as HTMLFormElement;

const titleInput =
  document.getElementById(
    "recipeTitle"
  ) as HTMLInputElement;

const ingredientsInput =
  document.getElementById(
    "ingredients"
  ) as HTMLTextAreaElement;

const instructionsInput =
  document.getElementById(
    "instructions"
  ) as HTMLTextAreaElement;

const clearButton =
  document.getElementById(
    "clearRecipesButton"
  ) as HTMLButtonElement;

recipeTemplate.render();

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const newRecipe = new RecipeItem(
    uuidv4(),
    titleInput.value,
    ingredientsInput.value
      .split("\n")
      .filter((item) => item.trim() !== ""),
    instructionsInput.value,
    false
  );

  recipeCollection.addRecipe(newRecipe);

  recipeTemplate.render();

  form.reset();
});

clearButton.addEventListener("click", () => {
  recipeCollection.clearRecipes();

  recipeTemplate.render();
});