const express = require('express');
const router = express.Router();
const controller = require('./controller');

// Define routes
/**
 * @swagger
 * /restaurants:
 *   get:
 *     summary: Get all restaurants
 *     description: Retrieves a list of all restaurants.
 *     tags:
 *       - Restaurants
 *     responses:
 *       200:
 *         description: A list of restaurants
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Restaurant'
 */
router.get('/restaurants', controller.getAllRestaurants);

/**
 * @swagger
 * /restaurants/{id}:
 *   get:
 *     summary: Get a restaurant by ID
 *     description: Retrieves a restaurant by their ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the restaurant
 *     tags:
 *       - Restaurants
 *     responses:
 *       200:
 *         description: The restaurant with the specified ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Restaurant'
 *       404:
 *         description: Restaurant not found
 */
router.get('/restaurants/:id', controller.getRestaurantById);

/**
 * @swagger
 * /restaurants:
 *   post:
 *     summary: Create a new restaurant
 *     description: Creates a new restaurant with the provided information.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Restaurant'
 *     tags:
 *       - Restaurants
 *     responses:
 *       201:
 *         description: The created restaurant
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Restaurant'
 */
router.post('/restaurants', controller.createRestaurant);

/**
 * @swagger
 * /restaurants/{id}:
 *   put:
 *     summary: Update a restaurant by ID
 *     description: Updates a restaurant with the specified ID using the provided information.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the restaurant to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Restaurant'
 *     tags:
 *       - Restaurants
 *     responses:
 *       200:
 *         description: The updated restaurant
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Restaurant'
 *       404:
 *         description: Restaurant not found
 */
router.put('/restaurants/:id', controller.updateRestaurant);

/**
 * @swagger
 * /restaurants/{id}:
 *   delete:
 *     summary: Delete a restaurant by ID
 *     description: Deletes a restaurant with the specified ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the restaurant to delete
 *     tags:
 *       - Restaurants
 *     responses:
 *       204:
 *         description: The restaurant was deleted successfully
 *       404:
 *         description: Restaurant not found
 */
router.delete('/restaurants/:id', controller.deleteRestaurant);

module.exports = router;