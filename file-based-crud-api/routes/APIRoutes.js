const addItem = require('../controllers/itemControllers/addItem');
const deleteItem = require('../controllers/itemControllers/deleteItem');
const updateItem = require('../controllers/itemControllers/updateItem');
const getItem = require('../controllers/itemControllers/getItem');
const getItemById = require('../controllers/itemControllers/getItemById');
const getFile = require('../controllers/publicControllers/getFile');
const uuid = require('uuid');

let router = {
    'GET/api/data': getItem,
    'GET/api/data/:id': getItemById,

    'POST/api/data': addItem,
    'OPTIONS/api/data': addItem,

    'PUT/api/data/:id': updateItem,

    'DELETE/api/data/:id': deleteItem,

    'GET/public': getFile
};

function resolveRoute(req, res) {
    console.log("Inside the resolve route...");
    // console.log({req});
    console.log(req.url, "*")
    let reqUrl = req.url.split('/');
    console.log(reqUrl);
    let reqMethod = req.method;

    if(reqUrl[1] === 'public'){
        reqUrl.pop();
        reqUrl = reqUrl.join('/');
    }
    else if(!reqUrl[reqUrl.length-1]){
        reqUrl.pop();
        reqUrl = reqUrl.join('/');
    }
    else if(uuid.validate(reqUrl[reqUrl.length-1])){
        reqUrl.pop();
        reqUrl = reqUrl.join('/');
        reqUrl += '/:id';
    }
    else{
        reqUrl = reqUrl.join('/');
    }

    let route = reqMethod+reqUrl;
    console.log("Route: ", route);

    router[route](req, res);
    console.log("Back to the route");
}
module.exports = resolveRoute;
