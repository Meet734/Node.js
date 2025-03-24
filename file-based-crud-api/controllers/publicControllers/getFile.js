const fs = require('fs');
const {eventEmitter} = require('../../helper');

function getFile(req, res) {
    if(!req || !res){
        return;
    }
    if(req.method === 'GET' && (req.url).startsWith('/public/')){
        let sFileName = req.url.split('/').pop();
        console.log(sFileName);
        if(!sFileName){
            eventEmitter.emit('error');
            res.writeHead(400, {"content-type": "application/json"});
            res.write("Invalid FileName");
            res.end();
            return;
        }

        try{
            let sFileData = fs.readFileSync("./public/"+sFileName);
            // console.log(sFileData);
            if(sFileName === 'index.html'){
                res.writeHead(200, {"content-type": "text/html"});
            }
            else if(sFileName === 'style.css'){
                res.writeHead(200, {"content-type": "text/css"});
            }
            else if(sFileName === 'script.js'){
                res.writeHead(200, {"content-type": "text/javascript"});
            }
            res.write(sFileData);
            res.end();
        }
        catch(error){
            eventEmitter.emit('error');
            // console.log(error.message);
            res.writeHead(404, {"content-type": "application/json"});
            res.write("File not found or Error in file reading");
            res.end();
        }
    }
}

module.exports = getFile;