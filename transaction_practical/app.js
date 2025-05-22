const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser');

const {PORT} = require('./config')
const {connectDb} = require('./db');

// const budgetRoute = require('./routes/budget')
const transactionRoute = require('./routes/transaction')
const userRoute = require('./routes/user');

const app = express();

app.use(express.json());
app.use(cookieParser());
// app.use('/api/budgets', budgetRoute);

app.use('/transaction', transactionRoute);
app.use('/user', userRoute);


connectDb()
    .then(() => {
        app.listen(PORT, ()=> {
            console.log("Server is listening...");
        })
    })
    .catch(() => {
        console.log("Server connection failed...");
    });

