const http = require('http');

class User {
    constructor(id, name){
        this.id = id;
        this.name = name;
    }
}
const users = [
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

    if(req.method === 'GET' && req.url === '/Users'){
        // res.writeHead(200, {"Content-Type": "application/json"});
        res.statusCode = 200;
        res.end(JSON.stringify(users));

        console.log({users});
    }
    else if(req.method === 'POST' && req.url === '/Register'){
        console.log("Registering data...");
        // res.writeHead(200, {"Content-Type": "text/plain"});
        res.statusCode = 200;
        // res.write("User Registeered successfully...");
        res.end();
    }
    else if(req.method === 'PATCH' && /^\/Update\/\d+$/.test(req.url)){
        const urlComponets = (req.url).split('/');
        console.log(`Updating user data with UserId: ${urlComponets[2]}"`);
        // console.log(urlComponets);
    }
    else if(req.method === 'DELETE' && /^\/Delete\/\d+$/.test(req.url)){
        const urlComponents = (req.url).split('/');
        console.log(`Deleting user data with UserId: ${urlComponents[2]}"`);

    }
    else{
        //handle the invalid request...
        res.writeHead(404, {"Content-Type": "text/plain"});
        res.write("#No details found...");
        res.end();
    }
});

server.listen(3000);