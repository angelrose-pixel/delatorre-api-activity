const booking = require('../models/bookingModel');

const getAllbooks = async (req, res) => {
    try {
        const booking = await booking.find();
        res.status(200).json(booking);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// 2. CREATE: Create a new room
const createbooks = async (req, res) => {
    try {
        const newbooking = await booking.create(req.body);
        res.status(201).json(newbooking);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    getAllbooks,
    createbooks,
};