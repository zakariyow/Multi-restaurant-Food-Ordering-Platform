const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    ProID: {
        type: String,
        required: true,
        unique: true
    },
    ProName: {
        type: String,
        required: true
    },
    ProImage: {
        type: String,
        required: true
    },
    ProdCategory: {
        type: String,
        required: true
    },
    ProDesc: {
        type: String,
        required: true
    },
    ProdCostPrice: {
        type: Number,
        required: true
    },
    ProductSellsPrice: {
        type: Number,
        required: true
    },
    RestOwner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Restaurant',
        required: true
    }
}, { timestamps: true });

// Create the model from the schema
const Product = mongoose.model('Product', productSchema);

module.exports = Product;