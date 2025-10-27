const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MenuItemSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
    imageUrl: { type: String, default: 'https://via.placeholder.com/300' },
     estimatedPrepTime: { type: Number, required: true, default: 15 } // Time in minutes
});

module.exports = mongoose.model('MenuItem', MenuItemSchema);