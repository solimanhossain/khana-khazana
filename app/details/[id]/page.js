import Image from "next/image";
import { singleRecipe } from "@/actions/recipe";
import RecipeDetails from "@/components/RecipeDetails";
import RecipeMakeSteps from "@/components/RecipeMakeSteps";
import { notFound } from "next/navigation";

export function generateMetadata() {
    return {
        title: "Khana khazana | Recipe Details",
    };
}

export default async function DetailsPage({ params: { id } }) {
    const recipeId = id.split("/").pop();
    const recipe = await singleRecipe(recipeId);
    if (!recipe) notFound();

    return (
        <main>
            <section>
                <div class="grid grid-cols-12 container gap-8 justify-items-center">
                    <div class="col-span-12 md:col-span-6">
                        <Image
                            src={recipe?.thumbnail}
                            alt="thumbnail"
                            width={300}
                            height={200}
                            class="w-full h-full rounded-lg object-contain"
                        />
                    </div>
                    <RecipeDetails recipe={recipe} />
                </div>
            </section>
            <RecipeMakeSteps steps={recipe?.steps} />
        </main>
    );
}
