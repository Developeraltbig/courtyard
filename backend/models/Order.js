const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    tableNumber: { type: Number, required: true },
    customer: {
        name: { type: String, required: true },
        phone: { type: String, required: true }
    },
    items: [{
        menuItem: { type: Schema.Types.ObjectId, ref: 'MenuItem' },
        quantity: { type: Number, required: true }
    }],
    totalAmount: { type: Number, required: true },
    status: {
        type: String,
        enum: ['Received', 'Preparing', 'Ready', 'Completed'],
        default: 'Received'
    },
    estimatedReadyTime: { type: Date },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', OrderSchema);