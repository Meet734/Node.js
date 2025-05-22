const fs = require('fs');
const path = require('path');
const {status} = require('http-status');
const mongoose = require('mongoose');

const {Passbook, AccountHolder} = require('../models');
const generateResponse = require('../helpers/responseHandler');

async function transferAmount(req, res){
    const senderId = req.cookies.auth;
    const {receiverId, amount} = req.body;

    // console.log("senderId: ", senderId);
    // console.log("receiverId: ", receiverId);
    // console.log("Amount: ", amount);

    const session = await mongoose.startSession();
    session.startTransaction();

    try{
        console.log("Transaction begin...");
        
        const senderAccount = await AccountHolder.findOneAndUpdate({email: senderId}, {$inc: {balance: -amount}}, {session, new: true});
        await Passbook.updateOne({accountNumber: senderId}, {$push: {transactionAmount: -amount, transactionDate: new Date()}}, {session});
        
        if(senderAccount.balance < 0){
            throw new Error("Insufficient amount...");
        }

        const receiverAccount = await AccountHolder.findOneAndUpdate({email: receiverId}, {$inc: {balance: amount}}, {session, new: true});
        if(!receiverAccount){
            throw new Error("Invalid receiver...");
        }
        await Passbook.updateOne({accountNumber: receiverId}, {$push: {transactionAmount: amount}, $push: {transactionDate: new Date()}}, {session});
        await session.commitTransaction();
        
        return generateResponse(res, status.OK, 'Amount transferred successfully...');
    }
    catch(error){
        await session.abortTransaction();
        console.log("Transaction failed...", error.message);
        return generateResponse(res, status.INTERNAL_SERVER_ERROR, error.message);
    }
    finally{
        await session.endSession();
        console.log("Session ended...");
    }
}

async function creditAmount(req, res){
    const AccountHolderId = req.cookies.auth;
    const {amount} = req.body;

    if(amount <= 0){
        return generateResponse(res, status.BAD_REQUEST, 'Credit amount can not be zero or less...');
    }

    const session = await mongoose.startSession();
    session.startTransaction();

    try{
        const Account = await AccountHolder.findOneAndUpdate({email: AccountHolderId}, {$inc: {balance: amount}}, {session, new: true});
        if(!Account){
            return generateResponse(res, status.BAD_REQUEST, 'Account not found');
        }

        await session.commitTransaction();
        return generateResponse(res, status.OK, 'Amount credited successfully...', Account);
    }
    catch(error){
        console.log("Transaction failed...");
        await session.abortTransaction();
        console.log(error);
        return generateResponse(res, status.INTERNAL_SERVER_ERROR, error.message);
    }
    finally{
        await session.endSession();
    }
}

module.exports = {
    transferAmount,
    creditAmount
}