import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    favourites: {
        type: Array,
        default: [],
    },
});

const userModel = mongoose.models.users ?? mongoose.model("users", userSchema);

export default userModel;
