import Link from "next/link";
import RecipeCookServe from "@/components/RecipeCookServe";
import RecipeShareFavourite from "@/components/RecipeShareFavourite";

export default function RecipeDetails({
    recipe: { _id, name, category, description, activeTime, totalTime, serves },
}) {
    return (
        <div className="col-span-12 md:col-span-6 py-8 flex flex-col justify-center">
            <h2 className="font-semibold text-4xl lg:w-8/12 leading-10">
                {name}
            </h2>
            <p className="text-xs text-[#eb4a36] italic my-2">
                <Link href={`/categorized/${category}`}>{category}</Link>
            </p>
            <p className="text-gray-600 text-sm my-6 leading-6">
                {description}
            </p>

            <RecipeCookServe
                activeTime={activeTime}
                totalTime={totalTime}
                serves={serves}
            />
            <div className="flex gap-4 justify-end">
                <RecipeShareFavourite id={_id.toString()} />
            </div>
        </div>
    );
}
