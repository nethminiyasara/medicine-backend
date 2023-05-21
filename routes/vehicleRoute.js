const express = require('express');
const router = express.Router();
const protect = require('../middleWare/authMiddleware');
const { getVehicles } = require('../controllers/vehicleController');

router.get('/all', protect, getVehicles);

module.exports = router;
