const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true,
        unique: true
    },
    location: {
        type: String,
        required: false
    },
    OTP: {
        type: String,
        required: true
    }
}, { timestamps: true });

// Create the model from the schema
const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;