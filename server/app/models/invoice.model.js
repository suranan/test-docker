var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var InvoiceSchema = new Schema({
    invoice_code: String,
    date: String,
    detail: [{
        product_name: String,
        product_price: String,
        product_qty: String
    }],
    user_code: { type: Schema.Types.ObjectId, ref: 'User' }
});

mongoose.model('Invoice', InvoiceSchema);