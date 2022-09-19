const mongoose = require('mongoose');

const tourSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please provide a name for this tour.'],
            trim: true,
            unique: [true, 'Name must be unique'],
        },
        location: {
            type: String,
            required: [true, 'Please provide a tour location.'],
            trim: true,
        },
        image: {
            type: String,
            required: [true, 'Please provide a image of the tour location.'],
        },
        price: {
            type: Number,
            rquired: true,
            min: [0, 'Price is needed.'],
        },
    },
    {
        timestamps: true,
        // eslint-disable-next-line prettier/prettier
    },
);

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
