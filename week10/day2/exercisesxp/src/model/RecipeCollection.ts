import RecipeItem from "./RecipeItem";

export default class RecipeCollection {
  private recipes: RecipeItem[] = [];

  constructor() {
    this.loadFromStorage();
  }

  getRecipes(): RecipeItem[] {
    return this.recipes;
  }

  addRecipe(recipe: RecipeItem): void {
    this.recipes.push(recipe);
    this.saveToStorage();
  }

  removeRecipe(id: string): void {
    this.recipes = this.recipes.filter(
      (recipe) => recipe.id !== id
    );

    this.saveToStorage();
  }

  toggleFavorite(id: string): void {
    this.recipes = this.recipes.map((recipe) => {
      if (recipe.id === id) {
        recipe.isFavorite = !recipe.isFavorite;
      }

      return recipe;
    });

    this.saveToStorage();
  }

  clearRecipes(): void {
    this.recipes = [];
    this.saveToStorage();
  }

  saveToStorage(): void {
    localStorage.setItem(
      "recipes",
      JSON.stringify(this.recipes)
    );
  }

  loadFromStorage(): void {
    const storedRecipes = localStorage.getItem("recipes");

    if (storedRecipes) {
      this.recipes = JSON.parse(storedRecipes);
    }
  }
}