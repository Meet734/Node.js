const mongoose = require('mongoose');
const {ACCOUNT_TYPES} = require('../config');

const AccHolderSchema = new mongoose.Schema({
    AccountType: {
        type: String,
        require: true,
        enum: ACCOUNT_TYPES
    },
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    balance: {
        type: Number,
        default: 0
    }
}, {collection: 'users'});

const AccountHolder = mongoose.model("Account", AccHolderSchema);

module.exports = {
    AccountHolder
}