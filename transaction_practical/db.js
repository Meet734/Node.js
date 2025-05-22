const mongoose = require('mongoose');
const {HOSTS, REPLICA_SET, DB_USERNAME, DB_PASSWORD, DB_CONNECTION_STRING} = require('./config');
const {AccountHolder, Passbook} = require('./models');

const URI = `mongodb://${DB_USERNAME}:${DB_PASSWORD}@${HOSTS}/test?replicaSet=${REPLICA_SET}`;

async function connectDb(){
    try{
        const connection = await mongoose.connect(DB_CONNECTION_STRING, {
            bufferTimeoutMS: 30000
        });
        console.log("DB connected...");
        
    }
    catch(error){
        console.log("DB connection failed...", error);
    }
}

function constructQuery(obj, queryType){
    const query = {};

    if(queryType === 'Account'){
        if(obj.type){
            query.type = obj.type;
        }
        if(obj.name){
            query.name = obj.name;
        }
        if(obj.email){
            query.email = obj.email;
        }
        if(obj.password){
            query.password = obj.password;
        }
    }
    else{
        if(obj.accountNumber){
            query.accountNumber = obj.accountNumber;
        }
    }
    return query;
}

async function runQuery(query, queryType, options = {}) {
    if(queryType === 'Account') {
        const dbRes = await AccountHolder.create([query], options);
        // console.log("DB: ", dbRes);
        return dbRes[0];
    }
    else {
        const dbRes = await Passbook.create([query], options);
        // console.log("DB: ", dbRes);
        return dbRes[0];
    }
}

async function findQuery(query, queryType){
    if(queryType === 'Account'){
        const Account = await AccountHolder.findOne(query);
        return Account;
    }
    else{
        const oPassbook = await Passbook.findOne(query);
        return oPassbook;
    }
}

module.exports = {
    connectDb,
    constructQuery,
    runQuery,
    findQuery
}