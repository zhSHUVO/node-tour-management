const express = require('express');

const router = express.Router();
const tourController = require('../controllers/tour.controller');

router.route('/tours').post(tourController.createTour).get(tourController.getTours);

router.route('/tours/:id').get(tourController.getTourDetails);

router.route('/tour/:id').patch(tourController.updateTour);

router.route('/tour/trending').get(tourController.trendingTours);

module.exports = router;
