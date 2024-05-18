const Product = require('./model');

// Get all products
exports.getAllProducts = async(req, res) => {
    try {
        const products = await Product.find().populate('RestOwner');
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get a single product by ID
exports.getProductById = async(req, res) => {
    try {
        const product = await Product.findById(req.params.id).populate('RestOwner');
        if (!product) return res.status(404).json({ message: 'Product not found' });
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Create a new product
exports.createProduct = async(req, res) => {
    const product = new Product({
        ProID: req.body.ProID,
        ProName: req.body.ProName,
        ProImage: req.body.ProImage,
        ProdCategory: req.body.ProdCategory,
        ProDesc: req.body.ProDesc,
        ProdCostPrice: req.body.ProdCostPrice,
        ProductSellsPrice: req.body.ProductSellsPrice,
        RestOwner: req.body.RestOwner
    });

    try {
        const newProduct = await product.save();
        res.status(201).json(newProduct);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Update a product
exports.updateProduct = async(req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ message: 'Product not found' });

        product.ProID = req.body.ProID || product.ProID;
        product.ProName = req.body.ProName || product.ProName;
        product.ProImage = req.body.ProImage || product.ProImage;
        product.ProdCategory = req.body.ProdCategory || product.ProdCategory;
        product.ProDesc = req.body.ProDesc || product.ProDesc;
        product.ProdCostPrice = req.body.ProdCostPrice || product.ProdCostPrice;
        product.ProductSellsPrice = req.body.ProductSellsPrice || product.ProductSellsPrice;
        product.RestOwner = req.body.RestOwner || product.RestOwner;

        const updatedProduct = await product.save();
        res.status(200).json(updatedProduct);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete a product
exports.deleteProduct = async(req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ message: 'Product not found' });

        await product.remove();
        res.status(200).json({ message: 'Product deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};