import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    full_name: { type: String, required: true },
    email: { type: String, required: true },
    mobile: { type: String, required: true },
    password: { type: String, required: true },
});

export const User = mongoose.model("User", userSchema);
