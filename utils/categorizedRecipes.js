export default function categorizedRecipes(recipes) {
    const recipesCategory = new Set();
    recipes?.forEach((recipe) => {
        recipesCategory.add(recipe.category);
    });
    return Array.from(recipesCategory);
}
