var User = require('mongoose').model('User');

exports.create = function(req, res, next) {
    let user = new User(req.body);
    user.save((err, respon) => {
        if (!err) {
            res.json({ 'status': true, 'massage': 'เรียบร้อย', 'respond': respon });

        } else {
            res.json({ 'status': false, 'massage': 'ผิดพลาด', 'respond': err });
        }
    });
};

exports.list = function(req, res, next) {
    User.aggregate([{
            $lookup: {
                from: "invoices",
                localField: "_id",
                foreignField: "user_code",
                as: "invoice"
            }
        },
        { $project: { _id: 1, firstname: 1, lastname: 1, email: 1, sex: 1, birthday: 1, total_invoice: { $size: '$invoice' } } }
    ]).exec((err, docs) => {
        if (err) {
            console.log(err);
        } else {
            res.json(docs);
        }
    });
};

exports.update = function(req, res, next) {
    let ObjectId = require('mongoose').Types.ObjectId;
    var user = new User(req.body);
    User.update({ '_id': new ObjectId(req.body.id) }, { 'firstname': req.body.firstname, 'lastname': req.body.lastname, 'email': req.body.email, 'sex': req.body.sex, 'birthday': req.body.birthday }, (err, docs) => {

        if (!err) {
            res.json({ 'status': true, 'massage': 'เรียบร้อย', 'respond': docs });

        } else {
            res.json({ 'status': false, 'massage': 'ผิดพลาด', 'respond': err });
        }
    });

};

exports.delete = function(req, res, next) {
    let ObjectId = require('mongoose').Types.ObjectId;
    User.remove({ '_id': new ObjectId(req.body.id) }, (err, docs) => {

        if (!err) {
            res.json({ 'status': true, 'massage': 'เรียบร้อย', 'respond': docs });

        } else {
            res.json({ 'status': false, 'massage': 'ผิดพลาด', 'respond': err });
        }
    });

};

exports.read = function(req, res, next, usercode) {
    let ObjectId = require('mongoose').Types.ObjectId;
    User.findOne({ '_id': new ObjectId(usercode) }, '__id firstname lastname email sex birthday', (err, docs) => {
        if (err) {
            console.log('error!!');
        } else {
            res.json(docs);
        }
    });
};