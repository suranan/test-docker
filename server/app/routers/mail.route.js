module.exports = function(router) {
    var mail = require('../controllers/mail.controller');
    router.route('/mail').get(mail.send);
}