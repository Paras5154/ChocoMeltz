const mongoose = require("mongoose");


const connectDB = (uri) => {
    return mongoose.connect(uri).then(() => {
        console.log("DB connection with Atlas completed successfully");
    }).catch((err) =>
        console.log(err)
    );
};

module.exports = connectDB;