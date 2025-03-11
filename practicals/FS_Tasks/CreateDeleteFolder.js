let fs = require('fs');

function createFolder(path){
    try{
        fs.mkdirSync(path)
        console.log("Folder created successfully");
    }
    catch(error){
        console.log("Folder already exist");
    }
}

function deleteFolder(path){
    try{
        fs.rmdirSync(path);
        console.log("Folder deleted successfully");
    }
    catch(error){
        console.log(error);
        console.log("Folder does not exist");
    }
}
createFolder("./newFolder");
// deleteFolder("./newFolder");