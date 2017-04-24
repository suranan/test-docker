module.exports = function(router) {
    var user = require('../controllers/user.controller');
    router.route('/user').get(user.list).post(user.create);
    router.route('/user/update').post(user.update);
    router.route('/user/delete').post(user.delete);
    router.route('/user/:usercode').get(user.list);
    router.param('usercode', user.read);
}