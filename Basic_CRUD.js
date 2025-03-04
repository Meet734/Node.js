const http = require('http');

class User {
    constructor(id, name){
        this.id = id;
        this.name = name;
    }
}
let users = [
    new User(1, 'Meet'),
    new User(2, 'Alice'),
    new User(3, 'Bob')
];

const server = http.createServer(function (req, res) {
    console.log("Server is on...");
    // res.write("something...");
    console.log(req.method);
    console.log(req.url);
    // console.log(users);

    if(req.method === 'GET' && req.url === '/users'){//smallcase
        if(users.length == 0){
            res.statusCode = 500;
            res.end(JSON.stringify("No user data is available"));
            return;
        }
        res.statusCode = 200;
        res.end(JSON.stringify(users));

        console.log({users});
    }
    else if(req.method === 'POST' && req.url === '/register'){
        console.log("Registering data...");

        let userIP = "";
        req.on('data', (chunk) => {
            userIP += chunk.toString();
        });
        req.on('end', () => {
            try{
                let userData = JSON.parse(userIP);
                let userId = userData.id;
                let userName = userData.name;
                // console.log(/^\d+$/.test(userId));
                // console.log(/[a-zA-Z]{3,16}/.test(userName));
                if(!(/^\d+$/.test(userId) && /[a-zA-Z]{3,16}/.test(userName))){
                    res.writeHead(400, {"content-type": "application/json"});
                    res.write("Invalid userId or userName...");
                    res.end();
                    return;
                }

                for(let i=0;i<users.length;i++){
                    console.log(users[i].id == userId);
                    if(users[i].id == userId){
                        res.writeHead(400, {"content-type": "application/json"});
                        res.write(`User with userId: ${userId} already exist`);
                        res.end();
                        return;
                    }
                }
                let newUser = new User(userId, userName);
                users.push(newUser);

                res.writeHead(200, {"content-type": "application/json"});
                res.write(`Welcome ${userName}, your data is stored...`);
                res.end();
            }
            catch(error){
                res.end();
                console.log({error});
            }
        });
    }
    else if(req.method === 'PUT' && /^\/update\/\d+$/.test(req.url)){
        const userId = (req.url).split('/').pop();

        if(!(/^\d+$/.test(userId))){
            res.writeHead(400, {"content-type": "application/json"});
            res.write("Invalid userId or userName...");
            res.end();
            return;
        }

        let userIP = "";
        req.on('data', (chunk) => {
            userIP += chunk.toString();
        });
        req.on('end', () => {

            try{
                
                for(let i=0;i<users.length;i++){
                    if(users[i].id == userId){
                        console.log(`Updating user data with UserId: ${urlComponets[2]}"`);
        
                        res.writeHead(200, {"content-type": "application/json"});
                        res.write(`User with userId: ${userId} updated...`);
                        res.end();
                        return;
                    }
                }

                res.writeHead(404, {"content-type": "application/json"});
                res.write("No such userId found...");
                res.end();
            }
            catch(error){
                res.write("Some error");
                res.end();
                console.log({error});
            }
        });
    }
    else if(req.method === 'DELETE' && /^\/Delete\/\d+$/.test(req.url)){
        const userId = (req.url).split('/').pop();

        if(!(/^\d+$/.test(userId))){
            res.writeHead(400, {"content-type": "application/json"});
            res.write("Invalid userId or userName...");
            res.end();
            return;
        }

        console.log(`Deleting user data with UserId: ${userId}"`);
        
        for(let i=0;i<users.length;i++){
            console.log(users[i].id, " ", userId);
            if(users[i].id == userId){
                users[i].isDeleted = true;
                res.writeHead(200, {"content-type": "application/json"});
                res.write("User deleted successfully...");
                res.end();
                return;
            }
        }

        res.writeHead(400, {"content-type": "application/json"});
        res.write("User data not found...");
        res.end();
    }
    else{
        //handle the invalid request...
        res.writeHead(404, {"Content-Type": "text/plain"});
        res.write("#No details found...");
        res.end();
    }
});

server.listen(3000);