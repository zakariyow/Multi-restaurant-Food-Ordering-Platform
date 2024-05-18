const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    OrId: {
        type: String,
        required: true,
        unique: true
    },
    Orpy: {
        type: String,
        required: true
    },
    customerID: {
        type: Schema.Types.ObjectId,
        ref: 'Customer',
        required: true
    }
}, { timestamps: true });

// Create the model from the schema
const Order = mongoose.model('Order', orderSchema);

module.exports = Order;