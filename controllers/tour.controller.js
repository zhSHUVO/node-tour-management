const {
    createTourServices,
    getTourServices,
    getTourDetailsServices,
    updateTourServices,
    trendingTourServices,
    cheapestTourServices,
} = require('../services/tour.services');

exports.createTour = async (req, res) => {
    try {
        const newTour = await createTourServices(req.body);
        newTour.logger();
        res.status(200).json({
            status: 'Succeed',
            message: 'Tour info added to the database.',
            data: newTour,
        });
    } catch (error) {
        res.status(400).json({
            status: 'Failed',
            message: " Tour info didn't added to the database.",
            error: error.message,
        });
    }
};

exports.getTours = async (req, res) => {
    try {
        const tours = await getTourServices(req.query);
        res.send(tours);
    } catch (error) {
        res.status(400).json({
            status: 'Failed',
            message: " Couldn't get all the tours data.",
            error: error.message,
        });
    }
};

exports.getTourDetails = async (req, res) => {
    try {
        const { id } = req.params;
        const singleTour = await getTourDetailsServices(id);
        res.send(singleTour);
    } catch (error) {
        res.status(400).json({
            status: 'Failed',
            message: " Couldn't get the tour info.",
            error: error.message,
        });
    }
};

exports.updateTour = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedTour = await updateTourServices(id, req.body);
        res.status(200).json({
            status: 'Succeed',
            message: 'Tour info updated successfully!',
            data: updatedTour,
        });
    } catch (error) {
        res.status(400).json({
            status: 'Failed',
            message: "Couldn't update the tour data.",
            error: error.message,
        });
    }
};

exports.trendingTours = async (req, res) => {
    try {
        const trendingTours = await trendingTourServices();
        res.status(200).json({
            status: 'Succeed',
            message: 'Here is top 3 trending tours list.',
            data: trendingTours,
        });
    } catch (error) {
        res.status(400).json({
            status: 'Failed',
            message: "Couldn't get the trending tour list.",
            error: error.message,
        });
    }
};

exports.cheapestTours = async (req, res) => {
    try {
        const cheapestTour = await cheapestTourServices();
        res.status(200).json({
            status: 'Succeed',
            message: 'Here is the list of 3 cheapest tour list.',
            data: cheapestTour,
        });
    } catch (error) {
        res.status(400).json({
            status: 'Failed',
            message: "Couldn't get the cheapest tour list.",
            error: error.message,
        });
    }
};
