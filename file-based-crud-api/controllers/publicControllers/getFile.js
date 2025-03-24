const fs = require('fs');
const {eventEmitter, generateResponse} = require('../../helper');

function getFile(req, res) {
    if(!req || !res){
        return;
    }
    if(req.method === 'GET' && (req.url).startsWith('/public/')){
        let sFileName = req.url.split('/').pop();
        console.log(sFileName);
        if(!sFileName){
            eventEmitter.emit('error');
            generateResponse(res, 400, "application/json", "Invalid FileName...");
            return;
        }

        try{
            let sFileData = fs.readFileSync("./public/"+sFileName);
            // console.log(sFileData);
            if(sFileName === 'index.html'){
                generateResponse(res, 200, "text/html", sFileData);
            }
            else if(sFileName === 'style.css'){
                generateResponse(res, 200, "text/css", sFileData);
            }
            else if(sFileName === 'script.js'){
                generateResponse(res, 200, "text/javascript", sFileData);
            }
            return;
        }
        catch(error){
            eventEmitter.emit('error');
            generateResponse(res, 404, "application/json", "File not found or Error in file reading");
        }
    }
}

module.exports = getFile;