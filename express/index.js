const express = require('express');
const bodyParser = require('body-parser');
const employeeRouters = require('./controllers/employeeRouters.js')();
const cors = require('cors');

const app = express();
const port = 3000;

// CORS configuration
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Methods',
        'GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE'
    );
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, x-access-token, x-refresh-token, _id'
    );

    res.header(
        'Access-Control-Expose-Headers',
        'x-access-token, x-refresh-token'
    );

    next();
});

app.use(bodyParser.json());

// Routes
app.use('/api/tasks', employeeRouters);

app.on('error', (err) => {
    console.error(`Error during startup: ${err.message}`);
});

app.listen(port, () => {
    console.log(`App has started on port ${port}`);
});