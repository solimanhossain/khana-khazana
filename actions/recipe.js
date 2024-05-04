import connectMongo from "@/dbConnect/connectMongo";
import recipeModel from "@/models/recipe-model";

export async function allRecipes() {
    try {
        await connectMongo();
        return await recipeModel.find().lean();
    } catch (err) {
        console.log(err);
    }
}

export async function singleRecipe(recipeId) {
    try {
        await connectMongo();
        return await recipeModel.findById(recipeId).lean();
    } catch (err) {
        console.log(err);
    }
}

export async function recipeByCategory(category) {
    try {
        return await recipeModel.find({ category });
    } catch (err) {
        console.log(err);
    }
}
