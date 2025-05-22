const express = require('express');
const apecricket = require('ape-cricket');

const api_key = "f3101013-034a-4a55-8807-41c4fdf7a382";
const app = express();

app.use(express.json());

app.get('/info', function(req, res){
    apecricket.playerStats(api_key, 100, function(response){
        console.log(response);
        res.send(response);
        res.end();
    });
});

app.listen(3000, () => {
    console.log("Server is listening at port 3000...");
});