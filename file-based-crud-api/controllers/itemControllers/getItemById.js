const fs = require('fs');
const uuid = require('uuid');

function getItemById(req, res) {
    if(!req || !res){
        return;
    }
    if(req.method === 'GET' && (req.url).startsWith('/api/data')){
        let iId = (req.url).split('/').pop();
        // console.log("Validate id: ", uuid.validate(iId));
        // console.log("version of id: ", uuid.version(iId));
        if(!(uuid.validate(iId))){
            res.writeHead(400, {"content-type": "application/json"});
            res.write('Invalid itemId');
            res.end();
            return;
        }

        try{
            let data = fs.readFileSync('data.json');
            data = JSON.parse(data);
            
            //checking the data with particular id is present and is not deleted
            data = data.filter((item) => {
                return (item.iId === iId && !item.isDeleted);
            });
    
            // console.log(data.length);
            //if data is not available to show
            if(!data.length){
                console.log("No data found with this id");
                res.writeHead(404, {"content-type": "application/json"});
                res.write("No Item found with this ID");
                res.end();
                return;
            }
    
            //if the data is available to show
            res.writeHead(200, {"content-type": "application/json"});
            res.write(JSON.stringify(data[0]));
            res.end();
        }
        catch(error){
            console.log("Error in reading data: ", error.message);
            res.writeHead(500, {"content-type": "application/json"});
            res.write("Error: "+error.message);
            res.end();
        }
    }
}

module.exports = getItemById;