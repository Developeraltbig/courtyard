const Order = require('../models/Order');

exports.createOrder = async (req, res) => {
    const { tableNumber, customer, items, totalAmount } = req.body;

    try {
        const newOrder = new Order({
            tableNumber,
            customer,
            items,
            totalAmount
        });

        const order = await newOrder.save();
        res.status(201).json(order);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

exports.getOrderStatus = async (req, res) => {
    try {
        const order = await Order.findById(req.params.orderId).populate('items.menuItem');
        if (!order) {
            return res.status(404).json({ msg: 'Order not found' });
        }
        res.json(order);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};