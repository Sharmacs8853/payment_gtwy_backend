import mongoose from "mongoose";

const gstSchema = new mongoose.Schema({
    service: { type: String, required: true },
    company: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    adhar: { type: String, required: true },
    pan: { type: String, required: true },
});

export const Gst = mongoose.model("Gst", gstSchema);