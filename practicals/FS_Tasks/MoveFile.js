let fs = require('fs');

function moveFile(oldPath, newPath){
    try{
        fs.renameSync(oldPath, newPath)
        console.log("file moved successfully...");
    }
    catch(error){
        console.log(error.message);
    }
}

moveFile("fileToBeMove.txt", "../fileAlreadyMoved.txt");
