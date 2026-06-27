import RecipeCollection from "../model/RecipeCollection";

export default class RecipeTemplate {
  constructor(
    private recipeCollection: RecipeCollection
  ) {}

  render(): void {
    const container =
      document.getElementById("recipeContainer");

    if (!container) return;

    container.innerHTML = "";

    this.recipeCollection
      .getRecipes()
      .forEach((recipe) => {
        const card = document.createElement("div");

        card.className = "recipe-card";

        card.innerHTML = `
          <h2>
            ${recipe.title}
            ${
              recipe.isFavorite
                ? '<span class="favorite">★ Favorite</span>'
                : ""
            }
          </h2>

          <button class="favorite-btn">
            Toggle Favorite
          </button>

          <button class="delete-btn">
            Delete
          </button>

          <div class="ingredients">
            <h4>Ingredients:</h4>
            <ul>
              ${recipe.ingredients
                .map(
                  (ingredient) =>
                    `<li>${ingredient}</li>`
                )
                .join("")}
            </ul>
          </div>

          <div class="instructions">
            <h4>Instructions:</h4>
            <p>${recipe.instructions}</p>
          </div>
        `;

        const favoriteBtn =
          card.querySelector(".favorite-btn");

        favoriteBtn?.addEventListener(
          "click",
          () => {
            this.recipeCollection.toggleFavorite(
              recipe.id
            );

            this.render();
          }
        );

        const deleteBtn =
          card.querySelector(".delete-btn");

        deleteBtn?.addEventListener(
          "click",
          () => {
            this.recipeCollection.removeRecipe(
              recipe.id
            );

            this.render();
          }
        );

        container.appendChild(card);
      });
  }
}