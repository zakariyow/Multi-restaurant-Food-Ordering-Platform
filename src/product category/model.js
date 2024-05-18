const mongoose = require('mongoose');

const productCategorySchema = new mongoose.Schema({
    CategoryName: {
        type: String,
        required: true,
        unique: true
    }
}, { timestamps: true });

// Create the model from the schema
const ProductCategory = mongoose.model('ProductCategory', productCategorySchema);

module.exports = ProductCategory;