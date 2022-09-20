const { createTourServices, getTourServices } = require('../services/tour.services');

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
        res.send('Failed to fetch the data.');
    }
};
