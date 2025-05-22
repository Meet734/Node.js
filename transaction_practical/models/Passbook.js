const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PassbookSchema = new Schema({
    accountNumber: {
        type: String,
        require: true,
        unique: true,
        ref: 'account'
    },
    transactionDate: {
        type: Schema.Types.Array,
        default: []
    },
    transactionAmount: {
        type: Schema.Types.Array,
        default: []
    }
});

const Passbook = mongoose.model('passbook', PassbookSchema);

module.exports = {
    Passbook
}