let fs = require('fs');

function writeToFile(path, data){
    fs.writeFile(path, data, "utf8", function (error){
        if(error){
            console.log(error.message);
        }
        console.log("Something written on the file");
    });
}

let data = "Asia: Japan, India, China, UAE";
writeToFile("tempFile.txt", data);