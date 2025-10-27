const express = require('express');
const router = express.Router();
const { createOrder, getOrderStatus } = require('../controllers/orderController');

router.post('/', createOrder);
router.get('/:orderId', getOrderStatus);

module.exports = router;