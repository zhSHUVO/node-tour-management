const Tour = require('../models/Tour');

const visitCount = async (req, res, next) => {
    try {
        const { id } = req.params;

        await Tour.findByIdAndUpdate(id, { $inc: { viewCount: 1 } }, { new: true });
        next();
    } catch (error) {
        res.send('failed to count');
    }
};

module.exports = visitCount;
