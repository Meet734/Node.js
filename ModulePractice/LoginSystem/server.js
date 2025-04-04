const express = require('express');
const handlePost = require('./handlePost');
const {adminHandler, clientHandler, devHandler} = require('./userReqHandler');
const cookieParser = require('cookie-parser');

const PORT = 3000;

const app = express();
app.use(express.json());
app.use(cookieParser());


app.get('/admin', adminHandler);
app.get('/client', clientHandler);
app.get('/dev', devHandler);
app.post('/login', handlePost);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})