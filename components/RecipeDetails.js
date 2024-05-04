import RecipeCookServe from "@/components/RecipeCookServe";
import RecipeShareFavourite from "@/components/RecipeShareFavourite";
import Link from "next/link";

export default function RecipeDetails({
    recipe: { name, category, description, activeTime, totalTime, serves },
}) {
    return (
        <>
            <div class="col-span-12 md:col-span-6 py-8 flex flex-col justify-center">
                <h2 class="font-semibold text-4xl lg:w-8/12 leading-10">
                    {name}
                </h2>
                <p class="text-xs text-[#eb4a36] italic my-2">
                    <Link href={`/categorized/${category}`}>{category}</Link>
                </p>
                <p class="text-gray-600 text-sm my-6 leading-6">
                    {description}
                </p>

                <RecipeCookServe
                    activeTime={activeTime}
                    totalTime={totalTime}
                    serves={serves}
                />

                <RecipeShareFavourite />
            </div>
        </>
    );
}
