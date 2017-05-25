const express = require('express');
const morgan = require('morgan');
const compression = require('compression');
const bodyParser = require('body-parser');
const path = require('path');

module.exports = function() {
    var app = express();

    if (process.env.NODE_ENV === 'development') {
        app.use(morgan('dev'));
    } else {
        app.use(compression);
    }

    app.use(bodyParser.urlencoded({
        extended: true
    }));

    app.use(bodyParser.json());

    app.use('/api', require('../app/routers/index.route'));

    app.use(express.static(path.join(__dirname, './../../views')));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, './../../views/index.html'));
    });

    return app;
}