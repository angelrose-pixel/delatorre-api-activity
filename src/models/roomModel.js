const mongoose = require('mongose');

// This is the *Ruole Book* for a Room
const roomSchema = new  mongoose.Schema({
    roomNumber: {
        type: Number, // Number: 101
        required: true,
        unique: true, // No duplicate room numbers allowed
    },

    type: {
        type: String, // Text: "Single", "Suite"
        required: true,
    },
})

