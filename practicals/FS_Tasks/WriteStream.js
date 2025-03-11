let fs = require('fs');

let writer = fs.createWriteStream('tempFile.txt');

let chunk = "Europe: France, Germany, Italy, Finland, Britain";
writer.write(chunk, function (error){
    if(error){
        console.log(error.message)
    }
});
writer.close(function (error){
    if(error){
        console.log(error.message);
    }
});
console.log("#Data written to the file...");

writer.e