import * as config from './config';
import * as mongoose from 'mongoose';

module.exports = function() {
    mongoose.set('debug', config.config.debug);
    var db = mongoose.connect(config.config.mongoURL);

    require('../app/models/user.model');
    require('../app/models/invoice.model');

    return db;
}