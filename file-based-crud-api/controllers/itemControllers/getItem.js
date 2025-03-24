const fs = require('fs');
const http = require('http');

function getItem(req, res){
    if(!req || !res){
        return;
    }
    console.log("Inside the getItem controller...");
    if(req.method === 'GET' && (req.url === '/api/data' || req.url === '/api/data/')){
        try{
            let sData = fs.readFileSync('data.json');
            let aItemData = JSON.parse(sData);
            //checking the data is not deleted
            aItemData = aItemData.filter((item) => {
                return (!item.isDeleted);
            });
    
            if(!aItemData.length){
                res.writeHead(200, {"content-type": "application/json"});
                res.write("No data available");
                res.end();
                return;
            }
            //filtered only available data
            res.writeHead(200, {"content-type": "application/json"});
            res.write(JSON.stringify(aItemData));
            res.end();
        }
        catch(error){
            console.log("Error in reading data: ", error.message);
            res.writeHead(500, {"content-type": "application/json"});
            res.write("Error in reading data: "+error.message);
            res.end();
        }
    }
    else{
        res.writeHead(404, {"content-type": "application/json"});
        res.write("Invalid path");
        res.end();
    }
}

module.exports = getItem;