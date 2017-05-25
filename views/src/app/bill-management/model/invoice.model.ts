export interface Invoice {
    _id: String
    invoice_code: String,
    user: {
        _id: String,
        firstname: String,
        lastname: String,
        email: String, sex: String,
        birthday: String
    },
    date: String,
    total_product:String

}