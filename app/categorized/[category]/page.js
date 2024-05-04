import { recipeByCategory } from "@/actions/recipe";
import RecipeCard from "@/components/RecipeCard";
import { notFound } from "next/navigation";

export function generateMetadata({ params: { category } }) {
    return {
        title: `Khana khazana | ${category}`,
    };
}

export default async function CategoryPage({ params: { category } }) {
    const categoryName = decodeURIComponent(category);
    const recipes = await recipeByCategory(categoryName);
    if (recipes.length === 0) notFound();

    return (
        <main>
            <section class="container py-8">
                <div>
                    <h3 class="font-semibold text-xl">{categoryName}</h3>

                    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8 justify-items-center">
                        {recipes?.map((recipe) => (
                            <RecipeCard key={recipe._id} recipe={recipe} />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
