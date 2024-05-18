const Payment = require('./paymentModel');

// Get all payments
exports.getAllPayments = async(req, res) => {
    try {
        const payments = await Payment.find().populate('CusID');
        res.status(200).json(payments);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get a single payment by ID
exports.getPaymentById = async(req, res) => {
    try {
        const payment = await Payment.findById(req.params.id).populate('CusID');
        if (!payment) return res.status(404).json({ message: 'Payment not found' });
        res.status(200).json(payment);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Create a new payment
exports.createPayment = async(req, res) => {
    const payment = new Payment({
        PayId: req.body.PayId,
        PayDate: req.body.PayDate,
        CusID: req.body.CusID,
        AmountPay: req.body.AmountPay
    });

    try {
        const newPayment = await payment.save();
        res.status(201).json(newPayment);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Update a payment
exports.updatePayment = async(req, res) => {
    try {
        const payment = await Payment.findById(req.params.id);
        if (!payment) return res.status(404).json({ message: 'Payment not found' });

        payment.PayId = req.body.PayId || payment.PayId;
        payment.PayDate = req.body.PayDate || payment.PayDate;
        payment.CusID = req.body.CusID || payment.CusID;
        payment.AmountPay = req.body.AmountPay || payment.AmountPay;

        const updatedPayment = await payment.save();
        res.status(200).json(updatedPayment);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete a payment
exports.deletePayment = async(req, res) => {
    try {
        const payment = await Payment.findById(req.params.id);
        if (!payment) return res.status(404).json({ message: 'Payment not found' });

        await payment.remove();
        res.status(200).json({ message: 'Payment deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};