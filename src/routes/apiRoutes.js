const express = require('express');
const router = express.Router();
const { protect, authorize } = require('../middleware/authMiddleware');
// Import the controller
const {
  getAllRooms,
  createRoom,
  getRoomById,
  updateRoom,
  deleteRoom
} = require('../controllers/roomController');

const {
  getAllbooks,
    createbooks,
} = require('../controllers/bookingController');

router.get("/bookings", getAllbooks);
router.post("/bookings", protect, authorize('admin', 'manager'), createbooks);


// Routes
router.get("/rooms", getAllRooms);
router.post("/rooms", protect, authorize('admin', 'manager'), createRoom);
router.get("/rooms/:id", getRoomById);
router.put("/rooms/:id", protect, authorize('admin', 'manager'), updateRoom);
router.delete("/rooms/:id", protect, authorize('admin', 'manager'), deleteRoom);

module.exports = router;
