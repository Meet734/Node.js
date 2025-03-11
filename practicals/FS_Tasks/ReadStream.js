let fs = require('fs');

let reader = fs.createReadStream('tempFile.txt');

reader.on('data', (data) =>{
    console.log(data);
    console.log(data.toString());
}).on('end', () => {
    console.log("#File reading complete");
}).on('error', (error) => {
    console.log(error.message);
});