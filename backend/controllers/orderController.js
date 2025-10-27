const Order = require('../models/Order');
const MenuItem = require('../models/MenuItem'); // <-- THE CRITICAL FIX: This line was missing.

/**
 * @desc    Create a new order
 * @route   POST /api/orders
 * @access  Public
 */
exports.createOrder = async (req, res) => {
    const { tableNumber, customer, items, totalAmount } = req.body;

    try {
        // Find the maximum preparation time among all items in the order
        let maxPrepTime = 0;
        for (const item of items) {
            // This line will now work correctly because MenuItem is imported
            const menuItem = await MenuItem.findById(item.menuItem);
            
            // A defensive check to ensure the item exists before accessing its properties
            if (menuItem && menuItem.estimatedPrepTime > maxPrepTime) {
                maxPrepTime = menuItem.estimatedPrepTime;
            }
        }

        // Calculate the estimated ready time by adding the max prep time to the current time
        const estimatedReadyTime = new Date(Date.now() + maxPrepTime * 60000); // Convert minutes to milliseconds

        const newOrder = new Order({
            tableNumber,
            customer,
            items,
            totalAmount,
            estimatedReadyTime // Add the calculated time to the new order
        });

        const order = await newOrder.save();

        // Send a '201 Created' status with the newly created order object
        res.status(201).json(order);

    } catch (err) {
        // If any error occurs in the 'try' block, it will be caught here
        console.error("Error creating order:", err); // Log the detailed error on the server
        res.status(500).send('Server Error'); // Send a generic error message to the client
    }
};

/**
 * @desc    Get the status of a specific order
 * @route   GET /api/orders/:orderId
 * @access  Public
 */
exports.getOrderStatus = async (req, res) => {
    try {
        // Find the order by its ID from the URL parameter
        // .populate() will replace the menuItem ID in the items array with the full menuItem document
        const order = await Order.findById(req.params.orderId).populate('items.menuItem');

        // If no order is found with that ID, return a 404 error
        if (!order) {
            return res.status(404).json({ msg: 'Order not found' });
        }
        
        // If found, send the order object back to the client
        res.json(order);

    } catch (err) {
        console.error("Error getting order status:", err);
        res.status(500).send('Server Error');
    }
};