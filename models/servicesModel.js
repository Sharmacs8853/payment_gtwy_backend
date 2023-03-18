import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
    service_type: { type: String, required: true },
    service_amount: { type: Number, required: true }
});

export const Service = mongoose.model("Service", serviceSchema);
