const mongoose = require('mongoose');

const database = 'pet_shelter';

mongoose
    .connect(`mongodb://localhost/${database}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() =>
        console.log(
            "Database connection established\nYou're all clear, kid, now let's blow this thing and go home!",
        ),
    )
    .catch((err) =>
        console.log(
            'Something went wrong when connecting to the database',
            err,
        ),
    );
