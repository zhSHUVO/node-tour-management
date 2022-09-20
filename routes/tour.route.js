const express = require('express');

const router = express.Router();
const tourController = require('../controllers/tour.controller');

router.route('/').post(tourController.createTour).get(tourController.getTours);

router.route('/:id').get(tourController.getTourDetails);

module.exports = router;
