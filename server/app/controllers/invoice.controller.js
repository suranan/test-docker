var Invoice = require('mongoose').model('Invoice');
var User = require('mongoose').model('User');

exports.list = function(req, res, next) {
    Invoice.aggregate([{
            $lookup: {
                from: "users",
                localField: "user_code",
                foreignField: "_id",
                as: "user"
            }
        },
        {
            $unwind: "$user"
        },
        {
            $project: {
                _id: 1,
                invoice_code: 1,
                user: 1,
                date: 1,
                total_product: {
                    $size: '$detail'
                }
            }
        }
    ]).exec((err, docs) => {
        if (err) {
            console.log(err);
        } else {
            res.json(docs);
        }
    });

}

exports.create = function(req, res, next) {
    let bill = new Invoice(req.body);

    bill.save((err, respon) => {
        if (!err) {
            res.json({ 'status': true, 'massage': 'เรียบร้อย', 'respond': respon });

        } else {
            res.json({ 'status': false, 'massage': 'ผิดพลาด', 'respond': err });
        }
    });

};


exports.read = function(req, res, next) {
    let ObjectId = require('mongoose').Types.ObjectId;
    Invoice.aggregate([{
            $match: {
                _id: ObjectId(req.body.id)
            }
        }, {
            $lookup: {
                from: "users",
                localField: "user_code",
                foreignField: "_id",
                as: "user_code"
            }
        },
        {
            $unwind: "$user_code"
        }

    ]).exec((err, docs) => {
        if (err) {
            console.log(err);
        } else {
            res.json(docs[0]);
        }
    });
};