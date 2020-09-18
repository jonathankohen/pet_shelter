const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const PetSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Name is required!'],
            minlength: [3, 'Name must be at least 3 characters.'],
            unique: true,
        },
        type: {
            type: String,
            required: [true, 'Type is required!'],
            minlength: [3, 'Type must be at least 3 characters.'],
        },
        desc: {
            type: String,
            required: [true, 'Description is required!'],
            minlength: [3, 'Description must be at least 3 characters.'],
        },
        skillOne: {
            type: String,
            default: '',
        },
        skillTwo: {
            type: String,
            default: '',
        },
        skillThree: {
            type: String,
            default: '',
        },
    },
    { timestamps: true },
);

PetSchema.plugin(uniqueValidator, {
    message: 'This pet is already in the shelter!',
});
const Pet = mongoose.model('Pet', PetSchema);
module.exports = Pet;
