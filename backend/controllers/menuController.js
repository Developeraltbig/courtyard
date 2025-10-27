const MenuItem = require('../models/MenuItem');
const Category = require('../models/Category');

exports.getMenu = async (req, res) => {
    try {
        const categories = await Category.find();
        const menuItems = await MenuItem.find().populate('category');
        res.json({ categories, menuItems });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};