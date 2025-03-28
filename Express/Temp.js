// Use require(‘express’) to import the Express module.
// Call express() to create an Express application instance.
// Define the port for the application, typically 3000.
// Set up a basic GET route with app.get(‘/’, (req, res) => res.send(‘Hello World!’)).
// Use app.listen method to listen to your desired PORT and to start the server.

const express = require('express');
const fs = require('fs');
const path = require('path');

// console.log(express);
let app = express();
const PORT = 3000;


app.use('/getFile', express.static(__dirname));
app.use(express.json());

app.use('/', (req, res, next) => {
    console.log("Hello...");
    next();
})

app.listen(PORT, (error) => {
    if(error){
        console.log("Error occurred...");
    }
    else{
        console.log(`Server is listening on port number: ${PORT}...`);
    }
});



app.get('/', (req, res) => {
    console.log("Get request...");
    res.statusCode = 200;
    res.send("Correct!!!");
    console.log(__dirname);
    // res.write("Also correct!!!");
    // res.end();
});


app.get('/health', (req, res) => {
    console.log("Health check...");
    res.send("<h2>Server is listening, routes are resolved...</h2>");
});

let data = "";
try{
    data = fs.readFileSync('./temp.txt').toString();
    console.log(data);
}
catch(error){
    console.log("Error: ", error.message);
}


app.get('/temp.txt', (req, res) => {
    console.log("Reading the temp.txt file...");
    res.send(data);
});

app.post('/', (req, res) => {
    console.log("Post method...");
    const {name} = req.body;
    console.log(name);
    res.send(name);
});

app.get('/getFile', (req, res) => {
    console.log("response in the fileURLToPath...");
    // res.sendFile(path.join(__dirname,'temp.txt'));
    res.sendFile('temp.txt');
});