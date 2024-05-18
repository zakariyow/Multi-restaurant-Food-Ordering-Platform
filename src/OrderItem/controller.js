const OrderItem = require('./path/to/orderItemModel'); // Adjust the path as necessary

// Get all order items
exports.getAllOrderItems = async(req, res) => {
    try {
        const orderItems = await OrderItem.find().populate('OrderId');
        res.status(200).json(orderItems);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get a single order item by ID
exports.getOrderItemById = async(req, res) => {
    try {
        const orderItem = await OrderItem.findById(req.params.id).populate('OrderId');
        if (!orderItem) return res.status(404).json({ message: 'Order item not found' });
        res.status(200).json(orderItem);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Create a new order item
exports.createOrderItem = async(req, res) => {
    const orderItem = new OrderItem({
        OrderId: req.body.OrderId,
        OrderItemID: req.body.OrderItemID,
        Item: req.body.Item,
        Quantity: req.body.Quantity,
        Price: req.body.Price,
        TotalAmount: req.body.Quantity * req.body.Price
    });

    try {
        const newOrderItem = await orderItem.save();
        res.status(201).json(newOrderItem);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Update an order item
exports.updateOrderItem = async(req, res) => {
    try {
        const orderItem = await OrderItem.findById(req.params.id);
        if (!orderItem) return res.status(404).json({ message: 'Order item not found' });

        orderItem.OrderId = req.body.OrderId || orderItem.OrderId;
        orderItem.OrderItemID = req.body.OrderItemID || orderItem.OrderItemID;
        orderItem.Item = req.body.Item || orderItem.Item;
        orderItem.Quantity = req.body.Quantity || orderItem.Quantity;
        orderItem.Price = req.body.Price || orderItem.Price;
        orderItem.TotalAmount = (req.body.Quantity || orderItem.Quantity) * (req.body.Price || orderItem.Price);

        const updatedOrderItem = await orderItem.save();
        res.status(200).json(updatedOrderItem);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete an order item
exports.deleteOrderItem = async(req, res) => {
    try {
        const orderItem = await OrderItem.findById(req.params.id);
        if (!orderItem) return res.status(404).json({ message: 'Order item not found' });

        await orderItem.remove();
        res.status(200).json({ message: 'Order item deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};