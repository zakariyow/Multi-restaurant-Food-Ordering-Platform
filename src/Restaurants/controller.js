const Restaurant = require('./model.js');

// Get all restaurants
exports.getAllRestaurants = async(req, res) => {
    try {
        const restaurants = await Restaurant.find();
        res.status(200).json(restaurants);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get a single restaurant by ID
exports.getRestaurantById = async(req, res) => {
    try {
        const restaurant = await Restaurant.findById(req.params.id);
        if (!restaurant) return res.status(404).json({ message: 'Restaurant not found' });
        res.status(200).json(restaurant);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Create a new restaurant
exports.createRestaurant = async(req, res) => {
    const restaurant = new Restaurant({
        useName: req.body.useName,
        location: req.body.location,
        merchant: req.body.merchant,
        pass: req.body.pass,
        user: req.body.user
    });

    try {
        const newRestaurant = await restaurant.save();
        res.status(201).json(newRestaurant);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Update a restaurant
exports.updateRestaurant = async(req, res) => {
    try {
        const restaurant = await Restaurant.findById(req.params.id);
        if (!restaurant) return res.status(404).json({ message: 'Restaurant not found' });

        restaurant.useName = req.body.useName || restaurant.useName;
        restaurant.location = req.body.location || restaurant.location;
        restaurant.merchant = req.body.merchant || restaurant.merchant;
        restaurant.pass = req.body.pass || restaurant.pass;
        restaurant.user = req.body.user || restaurant.user;

        const updatedRestaurant = await restaurant.save();
        res.status(200).json(updatedRestaurant);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete a restaurant
exports.deleteRestaurant = async(req, res) => {
    try {
        const restaurant = await Restaurant.findById(req.params.id);
        if (!restaurant) return res.status(404).json({ message: 'Restaurant not found' });

        await restaurant.remove();
        res.status(200).json({ message: 'Restaurant deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};