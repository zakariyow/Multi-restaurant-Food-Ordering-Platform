const Customer = require('./model.js');

// Get all customers
exports.getAllCustomers = async(req, res) => {
    try {
        const customers = await Customer.find();
        res.status(200).json(customers);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get a single customer by ID
exports.getCustomerById = async(req, res) => {
    try {
        const customer = await Customer.findById(req.params.id);
        if (!customer) return res.status(404).json({ message: 'Customer not found' });
        res.status(200).json(customer);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Create a new customer
exports.createCustomer = async(req, res) => {
    const customer = new Customer({
        name: req.body.name,
        mobile: req.body.mobile,
        location: req.body.location,
        OTP: req.body.OTP
    });

    try {
        const newCustomer = await customer.save();
        res.status(201).json(newCustomer);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Update a customer
exports.updateCustomer = async(req, res) => {
    try {
        const customer = await Customer.findById(req.params.id);
        if (!customer) return res.status(404).json({ message: 'Customer not found' });

        customer.name = req.body.name || customer.name;
        customer.mobile = req.body.mobile || customer.mobile;
        customer.location = req.body.location || customer.location;
        customer.OTP = req.body.OTP || customer.OTP;

        const updatedCustomer = await customer.save();
        res.status(200).json(updatedCustomer);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete a customer
exports.deleteCustomer = async(req, res) => {
    try {
        const customer = await Customer.findById(req.params.id);
        if (!customer) return res.status(404).json({ message: 'Customer not found' });

        await customer.remove();
        res.status(200).json({ message: 'Customer deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};