'use strict';

import * as express from 'express';
import * as morgan from 'morgan';
import * as compression from 'compression';
import * as bodyParser from 'body-parser';
import * as path from 'path';

export = function() {
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

    app.use(express.static(path.join(__dirname, './../../views/dist')));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, './../../views/dist/index.html'));
    });

    return app;
}