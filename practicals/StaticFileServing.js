let http = require('http');
let fs = require('fs');

const BASE_DIR = './FS_Tasks/newFolder';

function getFile(url1){
    console.log(url1);
    let fileName = url1.split('/').pop();

    let files = fs.readdirSync(BASE_DIR);
    console.log(files);
    files = files.filter((file) => {
        console.log(file);
        return fs.statSync(BASE_DIR+'/'+file).isFile();
    });
    console.log(files);
    let availableFile = files.find((file) => {
        return file === fileName;
    });
    
    console.log("file available: ", availableFile);
    return availableFile;
}

function readData(base, file){
    console.log("Reading: ",base+'/'+file);
    return fs.readFileSync(base+"/"+file);
}

const server = http.createServer((request, response) => {
    console.log("Url: ",request.url);
    if(!getFile(request.url)){
        response.statusCode = 404;
        response.write(readData('.', 'Error.html'));
        response.end();
        return;
    }
    
    try{
        let data = readData(BASE_DIR, (request.url).split('/').pop());
        response.writeHead(200, {"content-type": "text/html"});
        response.write(data);
        response.end();
    }
    catch(error){
        console.log("Error: ",error.message);
        response.writeHead(404, {"content-type": "text/html"});
        response.write(readData('.', 'Error.html'));
        response.end();
    }
});

server.listen(3000, (error) => {
    if(error){
        console.log(error);
        return;
    }
    console.log("Server is running on port 3000");
});