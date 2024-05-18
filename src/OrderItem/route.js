const express = require('express');
const router = express.Router();
const orderItemController = require('./controller');

// Define routes
/**
 * @swagger
 * /order-items:
 *   get:
 *     summary: Get all order items
 *     description: Retrieves a list of all order items.
 *     tags:
 *       - Order Items
 *     responses:
 *       200:
 *         description: A list of order items
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/OrderItem'
 */
router.get('/order-items', orderItemController.getAllOrderItems);

/**
 * @swagger
 * /order-items/{id}:
 *   get:
 *     summary: Get an order item by ID
 *     description: Retrieves an order item by their ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the order item
 *     tags:
 *       - Order Items
 *     responses:
 *       200:
 *         description: The order item with the specified ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/OrderItem'
 *       404:
 *         description: Order item not found
 */
router.get('/order-items/:id', orderItemController.getOrderItemById);

/**
 * @swagger
 * /order-items:
 *   post:
 *     summary: Create a new order item
 *     description: Creates a new order item with the provided information.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/OrderItem'
 *     tags:
 *       - Order Items
 *     responses:
 *       201:
 *         description: The created order item
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/OrderItem'
 */
router.post('/order-items', orderItemController.createOrderItem);

/**
 * @swagger
 * /order-items/{id}:
 *   put:
 *     summary: Update an order item by ID
 *     description: Updates an order item with the specified ID using the provided information.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the order item to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/OrderItem'
 *     tags:
 *       - Order Items
 *     responses:
 *       200:
 *         description: The updated order item
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/OrderItem'
 *       404:
 *         description: Order item not found
 */
router.put('/order-items/:id', orderItemController.updateOrderItem);

/**
 * @swagger
 * /order-items/{id}:
 *   delete:
 *     summary: Delete an order item by ID
 *     description: Deletes an order item with the specified ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the order item to delete
 *     tags:
 *       - Order Items
 *     responses:
 *       204:
 *         description: The order item was deleted successfully
 *       404:
 *         description: Order item not found
 */
router.delete('/order-items/:id', orderItemController.deleteOrderItem);

module.exports = router;