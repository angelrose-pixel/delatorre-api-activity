const mongoose = require('mongoose');
const guestSchema = new mongoose.Schema({
    room: {type: mongoose.Schema.Types.ObjectId, ref: 'Room'},
    guest: {type: mongoose.Schema.Types.ObjectId, ref: 'Guest'},
    checkIn: Date,
    checkOut: Date,
});

module.exports = mongoose.model('Booking', guestSchema);