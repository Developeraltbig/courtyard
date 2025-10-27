const Order = require('../models/Order');

exports.createOrder = async (req, res) => {
    const { tableNumber, customer, items, totalAmount } = req.body;

    try {
        // Find the maximum preparation time among all items in the order
        let maxPrepTime = 0;
        for (const item of items) {
            const menuItem = await MenuItem.findById(item.menuItem);
            if (menuItem && menuItem.estimatedPrepTime > maxPrepTime) {
                maxPrepTime = menuItem.estimatedPrepTime;
            }
        }

        // Calculate the estimated ready time
        const estimatedReadyTime = new Date(Date.now() + maxPrepTime * 60000); // Convert minutes to milliseconds

        const newOrder = new Order({
            tableNumber,
            customer,
            items,
            totalAmount,
            estimatedReadyTime // Add the calculated time to the new order
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