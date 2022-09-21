const Tour = require('../models/Tour');

exports.createTourServices = async (data) => {
    const tour = await Tour.create(data);
    return tour;
};

exports.getTourServices = async () => {
    const tours = await Tour.find({});
    return tours;
};

exports.getTourDetailsServices = async (tourID) => {
    // const singleTour = await Tour.find({ _id: tourID });
    // return singleTour;
    const tour = await Tour.findById(tourID);
    let result = await Tour.updateOne({ _id: tourID }, { $set: { viewCount: tour.viewCount + 1 } });

    if (result.modifiedCount) {
        result = await Tour.findById(tourID);
    }

    return result;
};

exports.updateTourServices = async (tourID, updateData) => {
    const updatedTour = await Tour.updateOne(
        { _id: tourID },
        { $set: updateData },
        {
            runValidators: true,
            // eslint-disable-next-line prettier/prettier
        },
    );
    return updatedTour;
};

exports.trendingTourServices = async () => {
    const trendingTours = await Tour.find().sort({ viewCount: -1 }).limit(3);
    return trendingTours;
};

exports.cheapestTourServices = async () => {
    const cheapestTours = await Tour.find().sort({ price: 1 }).limit(3);
    return cheapestTours;
};
