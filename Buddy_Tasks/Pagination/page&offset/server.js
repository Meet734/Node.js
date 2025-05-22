const express = require('express');

const dataRouter = require('./routes/dataRoute');

const app = express();
app.use(express.json());

app.use('/data', dataRouter);

app.listen(3000, () => {
    console.log("Server is listening on port 3000...");
});