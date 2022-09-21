const express = require('express');

const router = express.Router();
const tourController = require('../controllers/tour.controller');
const visitCount = require('../middlewares/visitCount');

router.route('/').post(tourController.createTour).get(tourController.getTours);

router
    .route('/:id')
    .get(visitCount, tourController.getTourDetails)
    .patch(tourController.updateTour);

module.exports = router;
