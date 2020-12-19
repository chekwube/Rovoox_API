var mongoose = require('mongoose');
require('dotenv').config();
const uri = process.env.DB_URI;


module.exports = function init() {
    if (uri) {
        mongoose.connect(
            uri, {
                useNewUrlParser: true,
                useCreateIndex: true,
                useUnifiedTopology: true
            },
            (err) => {
                if (err) {
                    console.log("DATABASE CONNECTION FAILED->", err);
                } else {
                    console.log("SUCCESSFULLY CONNECTED TO THE DATABASE");
                }
            }

        );
    } else {
        throw new Error("DB URI not found, please kindly check your connection strings to mongoose");
    }
}