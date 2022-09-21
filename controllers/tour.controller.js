const {
    createTourServices,
    getTourServices,
    getTourDetailsServices,
    updateTourServices,
    trendingTourServices,
} = require('../services/tour.services');

exports.createTour = async (req, res) => {
    try {
        const newTour = await createTourServices(req.body);
        newTour.logger();
        res.send('success');
    } catch (error) {
        console.log(error);
        res.send('not successfull');
    }
};

exports.getTours = async (req, res) => {
    try {
        const tours = await getTourServices();
        res.send(tours);
    } catch (error) {
        res.send('Failed to fetch tour list.');
    }
};

exports.getTourDetails = async (req, res) => {
    try {
        const { id } = req.params;
        const singleTour = await getTourDetailsServices(id);
        res.send(singleTour);
    } catch (error) {
        res.send(error);
    }
};

exports.updateTour = async (req, res) => {
    try {
        const { id } = req.params;
        await updateTourServices(id, req.body);
        res.send('update done');
    } catch (error) {
        res.send("couldn't update");
        console.log(error);
    }
};

exports.trendingTours = async (req, res) => {
    try {
        const trendingTours = await trendingTourServices();
        res.send(trendingTours);
    } catch (error) {
        res.send('failed to get trending tour list');
    }
};
