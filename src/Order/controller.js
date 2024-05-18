const Order = require('./model');

// Get all orders
exports.getAllOrders = async(req, res) => {
    try {
        const orders = await Order.find().populate('customerID');
        res.status(200).json(orders);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get a single order by ID
exports.getOrderById = async(req, res) => {
    try {
        const order = await Order.findById(req.params.id).populate('customerID');
        if (!order) return res.status(404).json({ message: 'Order not found' });
        res.status(200).json(order);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Create a new order
exports.createOrder = async(req, res) => {
    const order = new Order({
        OrId: req.body.OrId,
        Orpy: req.body.Orpy,
        customerID: req.body.customerID
    });

    try {
        const newOrder = await order.save();
        res.status(201).json(newOrder);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Update an order
exports.updateOrder = async(req, res) => {
    try {
        const order = await Order.findById(req.params.id);
        if (!order) return res.status(404).json({ message: 'Order not found' });

        order.OrId = req.body.OrId || order.OrId;
        order.Orpy = req.body.Orpy || order.Orpy;
        order.customerID = req.body.customerID || order.customerID;

        const updatedOrder = await order.save();
        res.status(200).json(updatedOrder);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete an order
exports.deleteOrder = async(req, res) => {
    try {
        const order = await Order.findById(req.params.id);
        if (!order) return res.status(404).json({ message: 'Order not found' });

        await order.remove();
        res.status(200).json({ message: 'Order deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};