const fs = require('fs');
const path = require('path');
const {status} = require('http-status');
const mongoose = require('mongoose');

const {constructQuery, runQuery, findQuery} = require('../db');
const generateResponse = require('../helpers/responseHandler');

async function registerUser(req, res){
    const {type, name, email, password} = req.body;

    const session = await mongoose.startSession();
    session.startTransaction();

    try{
        console.log("Session started...");
        const query = constructQuery({type, name, email, password}, 'Account');
        
        const Account = await runQuery(query, 'Account', { session });
        console.log("Data is inserted to the db: ", Account);
        
        const passbookQuery = constructQuery({"accountNumber": Account.email}, 'Passbook');
        const passbook = await runQuery(passbookQuery, 'Passbook', { session });
        
        await session.commitTransaction();
        console.log("Transaction committed successfully");
        
        res.cookie('auth', Account.email);
        return generateResponse(res, status.ACCEPTED, 'Account has been created...', {Account, passbook});
    }
    catch(error){
        await session.abortTransaction();
        console.log("Transaction failed...", error);
        return generateResponse(res, status.INTERNAL_SERVER_ERROR, 'Transaction failed...');
    }
    finally{
        await session.endSession();
        console.log("Session ended...");
    }
}

function loginUser(req, res){
    const {email, password} = req.body;

    const query = constructQuery({email, password}, 'Account');
    findQuery(query, 'Account')
        .then(account => {
            if(!account){
                return generateResponse(res, status.UNAUTHORIZED, 'Login failed...');
            }
            res.cookie('auth', account.email);
            console.log("Acc: ", account);
            return generateResponse(res, status.OK, 'Login successfull...', account);
        })
        .catch(error => {
            return generateResponse(res, status.INTERNAL_SERVER_ERROR, 'Server error...', error.message);
        })
}

module.exports = {
    registerUser,
    loginUser
}