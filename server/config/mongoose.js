var config = require('./config');
var mongoose = require('mongoose');

module.exports = function() {
    mongoose.set('debug', config.debug);
    var db = mongoose.connect(config.mongoURL);

    require('../app/models/user.model');
    require('../app/models/invoice.model');

    return db;
}