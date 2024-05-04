import Image from "next/image";
import { singleRecipe } from "@/actions/recipe";
import RecipeDetails from "@/components/RecipeDetails";
import RecipeMakeSteps from "@/components/RecipeMakeSteps";
import { notFound } from "next/navigation";

export async function generateMetadata({ params: { id } }) {
    const recipeId = id.split("/").pop();
    const recipe = await singleRecipe(recipeId);
    return {
        title: `Khana khazana | ${recipe?.name}`,
    };
}

export default async function DetailsPage({ params: { id } }) {
    const recipeId = id.split("/").pop();
    const recipe = await singleRecipe(recipeId);
    if (!recipe) notFound();

    return (
        <main>
            <section>
                <div className="grid grid-cols-12 container gap-8 justify-items-center">
                    <div className="col-span-12 md:col-span-6">
                        <Image
                            src={recipe?.thumbnail}
                            alt="thumbnail"
                            width={300}
                            height={200}
                            className="w-full h-full rounded-lg object-contain"
                        />
                    </div>
                    <RecipeDetails recipe={recipe} />
                </div>
            </section>
            <RecipeMakeSteps steps={recipe?.steps} />
        </main>
    );
}
