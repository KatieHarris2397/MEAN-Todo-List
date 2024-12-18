const mongoose = require('mongoose');
require('dotenv').config();

async function connect() {
    try {
        const res = await mongoose.connect(process.env.MONGODB_URL);
        console.log("DB Connected >>>");
    } catch (err) {
        console.log(err);
    }
}

module.exports = { connect };