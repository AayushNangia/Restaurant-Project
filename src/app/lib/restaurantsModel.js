import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    city: String,
    address: String,
    phoneNumber: String
});

export const Restaurant =
    mongoose.models.Restaurant ||
    mongoose.model("Restaurant", restaurantSchema);