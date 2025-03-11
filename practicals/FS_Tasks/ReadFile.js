let fs = require('fs')

function printFileAsync(path){
    //Asynchronous file read
    fs.readFile(path, 'utf8',function (error, data) {
        if(error){
            return console.log(error.message);
        }
        console.log("Asynchronous read: ", data.toString());
    });
}

function printFileSync(path){
    //synchronous file read
    try{
        let data = fs.readFileSync(path);
        console.log("Synchronous read:", data.toString());
        
        console.log("file reading complete")
    }
    catch(error){
        console.log(error.message);
    }
}

printFileAsync("./ReadFile.js");
printFileSync("./newFolder");