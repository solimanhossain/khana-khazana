import { allRecipes, findRecipeByCategory } from "@/actions/recipe";
import HeroSection from "@/components/HeroSection";
import RecipeCard from "@/components/RecipeCard";
import SideBar from "@/components/SideBar";
import categorizedRecipes from "@/utils/categorizedRecipes";

export function generateMetadata() {
    return {
        title: "Khana khazana | Home",
    };
}

export default async function HomePage() {
    const recipes = await allRecipes();

    return (
        <main>
            <HeroSection />

            <section className="container py-8">
                <div className="grid grid-cols-12 py-4">
                    <SideBar categorys={categorizedRecipes(recipes)} />

                    <div className="col-span-12 md:col-span-9">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8 justify-items-center">
                            {recipes.map((recipe) => (
                                <RecipeCard key={recipe._id} recipe={recipe} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
