const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    roomNumber: {
        type: Number, // Num,ber: 101
        required: true,
        unique: true, // No duplicate room numbers allowed  
        min:[100, 'Room number must be 3 digits'], // Custom eerror message if room number is less than 100
    },

    type: {
        type: String, // Text: "Single", "Suite","
        required: true,
    },

    price: {
        type: Number,
        required: true,
        min:[0, 'Price cannot be negative'], // Custom error message if price is < 0
    },
    maintenance: [
        {
            date: { type: Date, default: Date.now },
            issue: String, // e.g., "Broken AC",    
            fixed: Boolean
        }
    ]
});

module.exports = mongoose.model('Room', roomSchema);