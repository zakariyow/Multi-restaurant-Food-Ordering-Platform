const mongoose = require("mongoose").default;


// Define the schema for the Restaurants (Vendors) table
const restaurantSchema = new mongoose.Schema({
    useName: {
        type: String,
        required: [true, "Username is required"],
        unique: true,
        trim: true,
        lowercase: true,
        minlength: [3, "Username must be at least 3 characters"],
        maxlength: [30, "Username must be at most 30 characters"],
        match: [/^[a-zA-Z0-9]+$/, "Username must be alphanumeric"],
    },
    location: {
        type: String,
        required: false
    },
    merchant: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [4, "Password must be at least 4 characters long"],
        select: false,
    },
    user: {
        type: String,
        required: false
    }
});

// Create the model from the schema
const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;