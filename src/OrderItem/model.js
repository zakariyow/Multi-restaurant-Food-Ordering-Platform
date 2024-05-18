const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderItemSchema = new Schema({
    OrderId: {
        type: Schema.Types.ObjectId,
        ref: 'Order',
        required: true
    },
    OrderItemID: {
        type: String,
        required: true,
        unique: true
    },
    Item: {
        type: String,
        required: true
    },
    Quantity: {
        type: Number,
        required: true
    },
    Price: {
        type: Number,
        required: true
    },
    TotalAmount: {
        type: Number,
        required: true
    }
}, { timestamps: true });

// Create the model from the schema
const OrderItem = mongoose.model('OrderItem', orderItemSchema);

module.exports = OrderItem;