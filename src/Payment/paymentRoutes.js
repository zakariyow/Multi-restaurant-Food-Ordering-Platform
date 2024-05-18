const express = require('express');
const router = express.Router();
const paymentController = require('./paymentController');

// Define routes
/**
 * @swagger
 * /payments:
 *   get:
 *     summary: Get all payments
 *     description: Retrieves a list of all payments.
 *     tags:
 *       - Payments
 *     responses:
 *       200:
 *         description: A list of payments
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Payment'
 */
router.get('/payments', paymentController.getAllPayments);

/**
 * @swagger
 * /payments/{id}:
 *   get:
 *     summary: Get a payment by ID
 *     description: Retrieves a payment by their ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the payment
 *     tags:
 *       - Payments
 *     responses:
 *       200:
 *         description: The payment with the specified ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Payment'
 *       404:
 *         description: Payment not found
 */
router.get('/payments/:id', paymentController.getPaymentById);

/**
 * @swagger
 * /payments:
 *   post:
 *     summary: Create a new payment
 *     description: Creates a new payment with the provided information.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Payment'
 *     tags:
 *       - Payments
 *     responses:
 *       201:
 *         description: The created payment
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Payment'
 */
router.post('/payments', paymentController.createPayment);

/**
 * @swagger
 * /payments/{id}:
 *   put:
 *     summary: Update a payment by ID
 *     description: Updates a payment with the specified ID using the provided information.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the payment to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Payment'
 *     tags:
 *       - Payments
 *     responses:
 *       200:
 *         description: The updated payment
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Payment'
 *       404:
 *         description: Payment not found
 */
router.put('/payments/:id', paymentController.updatePayment);

/**
 * @swagger
 * /payments/{id}:
 *   delete:
 *     summary: Delete a payment by ID
 *     description: Deletes a payment with the specified ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the payment to delete
 *     tags:
 *       - Payments
 *     responses:
 *       204:
 *         description: The payment was deleted successfully
 *       404:
 *         description: Payment not found
 */
router.delete('/payments/:id', paymentController.deletePayment);

module.exports = router;