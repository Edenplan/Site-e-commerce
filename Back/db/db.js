const mongoose = require('mongoose');
const {connect} = require ('mongoose');
require('dotenv').config();

async function dbConnexion() {
    try {
        const uri = process.env.MONGO_URI;
        await mongoose.connect(uri);
        console.log("Database connection established");
    } catch (error) {
        console.error("Database connection error:", error);
    }
}

module.exports = dbConnexion;