const mongoose = require('mongoose');

async function connect() {
    try {
        const res = await mongoose.connect("mongodb://mongo:passw0rd@127.0.0.1:27017/todo");
        console.log("DB Connected >>>");
    } catch (err) {
        console.log(err);
    }
}

module.exports = { connect };