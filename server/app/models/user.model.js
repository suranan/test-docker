var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    firstname: String,
    lastname: String,
    email: String,
    sex: String,
    birthday: String
});

mongoose.model('User', UserSchema);