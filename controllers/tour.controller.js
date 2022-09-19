const { createTourServices } = require('../services/tour.services');

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
