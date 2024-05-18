const ProductCategory = require('./model');

// Get all product categories
exports.getAllProductCategories = async(req, res) => {
    try {
        const categories = await ProductCategory.find();
        res.status(200).json(categories);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get a single product category by ID
exports.getProductCategoryById = async(req, res) => {
    try {
        const category = await ProductCategory.findById(req.params.id);
        if (!category) return res.status(404).json({ message: 'Product category not found' });
        res.status(200).json(category);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Create a new product category
exports.createProductCategory = async(req, res) => {
    const category = new ProductCategory({
        CategoryName: req.body.CategoryName
    });

    try {
        const newCategory = await category.save();
        res.status(201).json(newCategory);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Update a product category
exports.updateProductCategory = async(req, res) => {
    try {
        const category = await ProductCategory.findById(req.params.id);
        if (!category) return res.status(404).json({ message: 'Product category not found' });

        category.CategoryName = req.body.CategoryName || category.CategoryName;

        const updatedCategory = await category.save();
        res.status(200).json(updatedCategory);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete a product category
exports.deleteProductCategory = async(req, res) => {
    try {
        const category = await ProductCategory.findById(req.params.id);
        if (!category) return res.status(404).json({ message: 'Product category not found' });

        await category.remove();
        res.status(200).json({ message: 'Product category deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};