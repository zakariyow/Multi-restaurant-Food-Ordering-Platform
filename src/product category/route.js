const express = require('express');
const router = express.Router();
const productCategoryController = require('./productCategoryController');

// Define routes
/**
 * @swagger
 * /product-categories:
 *   get:
 *     summary: Get all product categories
 *     description: Retrieves a list of all product categories.
 *     tags:
 *       - Product Categories
 *     responses:
 *       200:
 *         description: A list of product categories
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/ProductCategory'
 */
router.get('/product-categories', productCategoryController.getAllProductCategories);

/**
 * @swagger
 * /product-categories/{id}:
 *   get:
 *     summary: Get a product category by ID
 *     description: Retrieves a product category by their ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the product category
 *     tags:
 *       - Product Categories
 *     responses:
 *       200:
 *         description: The product category with the specified ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ProductCategory'
 *       404:
 *         description: Product category not found
 */
router.get('/product-categories/:id', productCategoryController.getProductCategoryById);

/**
 * @swagger
 * /product-categories:
 *   post:
 *     summary: Create a new product category
 *     description: Creates a new product category with the provided information.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ProductCategory'
 *     tags:
 *       - Product Categories
 *     responses:
 *       201:
 *         description: The created product category
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ProductCategory'
 */
router.post('/product-categories', productCategoryController.createProductCategory);

/**
 * @swagger
 * /product-categories/{id}:
 *   put:
 *     summary: Update a product category by ID
 *     description: Updates a product category with the specified ID using the provided information.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the product category to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ProductCategory'
 *     tags:
 *       - Product Categories
 *     responses:
 *       200:
 *         description: The updated product category
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ProductCategory'
 *       404:
 *         description: Product category not found
 */
router.put('/product-categories/:id', productCategoryController.updateProductCategory);

/**
 * @swagger
 * /product-categories/{id}:
 *   delete:
 *     summary: Delete a product category by ID
 *     description: Deletes a product category with the specified ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the product category to delete
 *     tags:
 *       - Product Categories
 *     responses:
 *       204:
 *         description: The product category was deleted successfully
 *       404:
 *         description: Product category not found
 */
router.delete('/product-categories/:id', productCategoryController.deleteProductCategory);

module.exports = router;