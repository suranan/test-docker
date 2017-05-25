export interface Invoice {
    _id: String
    invoice_code: String,
    date: String
    user_code: {
        _id: String,
        firstname: String,
        lastname: String,
        email: String, sex: String,
        birthday: String
    },
    detail: [{
        product_name: String,
        product_price: String,
        product_qty: String
    }]
}