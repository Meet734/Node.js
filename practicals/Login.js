const http = require('http');
let userId = 0;

class User {
    constructor(name, password) {
        this.userId = ++userId;
        this.name = name;
        this.password = password;
    }
}

let users = [new User('Meet', 'Meet123')];

http.createServer(function (req, res) {

    if (req.method === 'POST' && req.url === '/Register') {
        let body = '';

        // Collect the data chunks
        req.on('data', chunk => {
            body += chunk.toString();
        });

        // When all data is received
        req.on('end', () => {
            try {
                const userData = JSON.parse(body); // Parse JSON data
                let userDetail = new User(userData.name, userData.password);
                if(!validUser(userData)){
                    res.statusCode = 400;
                    res.write("Invalid UserName or Password");
                    res.end();
                    return;
                }

                users.push(userDetail); // Store user data

                console.log("New User:", userDetail); // Debugging log

                
                res.statusCode = 200;
                // res.end(JSON.stringify({ message: "User created successfully", user: userData }));
                res.write(`Welcome ${userData.name}`);
                console.log({users});
                res.end();
            } catch (error) {
                console.error("JSON Parsing Error:", error.message); // Debugging
                res.writeHead(400, { "Content-Type": "application/json" });
                res.end(JSON.stringify({ message: "Invalid JSON format" }));
            }
        });
    }
    else if(req.method === 'GET' && req.url === '/Users'){
        console.log(req.body);-
        // res.write("Something");
        res.write(JSON.stringify(users));
        res.end();
    }
    else if(req.method === 'GET' && /^\/Users\/\d+$/.test(req.url)){
        const uId = parseInt(req.url.split('/')[2]);
        console.log(userId);
        
        let user = "";
        for(let i=0;i<users.length;i++){
            if(users[i].userId === uId){
                user = users[i];
                break;
            }
        }

        if(user){
            res.writeHead(200, {"Content-Type": "application/json"})
            res.end(JSON.stringify(user));
        }
        else{
            res.writeHead(202, {"Content-Type": "application/json"})
            console.log(uId);
            res.end(`User with UserID: ${uId} not found`);
        }
    }
    else if(req.method === 'GET' && req.url === '/Users/Profile'){
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(users[0])); // Convert the object to a JSON string
    }
    else if(req.method === 'PATCH' && /^\/Users\/Update\/\d+$/.test(req.url)){
        console.log(req.body);
        let body = '';

        // Collect the data chunks
        req.on('data', chunk => {
            body += chunk.toString();
        });

        // When all data is received
        req.on('end', () => {
            try {
                const uId = parseInt(req.url.split('/')[3]);
                const updatedData =  JSON.parse(body);

                if(!validUser(updatedData)){
                    res.statusCode = 400;
                    res.write("Invalid UserName or Password");
                    res.end();
                    return;
                }

                for(let i=0;i<users.length;i++){
                    if(users[i].userId === uId){
                        users[i] = {...users[i], ...updatedData};
                        break;
                    }
                }
                
                users.push(userDetail); // Store user data

                console.log("New User:", userDetail); // Debugging log

                
                res.statusCode = 200;
                // res.end(JSON.stringify({ message: "User created successfully", user: userData }));
                res.write(`Welcome ${userData.name}`);
                console.log({users});
                res.end();
            } catch (error) {
                console.error("JSON Parsing Error:", error.message); // Debugging
                res.writeHead(400, { "Content-Type": "application/json" });
                res.end(JSON.stringify({ message: "Invalid JSON format" }));
            }
        });
    }
    else {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        console.log(req.url);
        res.end('Hello, world!!!');
    }
}).listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});


function validUser(newUser){
    console.log({newUser});
    let nameRE = /^[a-zA-Z]{3,16}$/;
    let passwordRE = /^[a-zA-Z0-9]+$/;
    return (nameRE.test(newUser.name) && passwordRE.test(newUser.password));
}