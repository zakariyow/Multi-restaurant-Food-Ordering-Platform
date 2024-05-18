const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    PayId: {
        type: String,
        required: true,
        unique: true
    },
    PayDate: {
        type: Date,
        required: true,
        default: Date.now
    },
    CusID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer',
        required: true
    },
    AmountPay: {
        type: Number,
        required: true
    }
}, { timestamps: true });

// Create the model from the schema
const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;