let fs = require('fs');

function fileRename(oldFile, newFile){
    fs.rename(oldFile, newFile, function (error){
        if(error){
            console.log(error.message);
        }
        else{
            console.log(`File ${oldFile} is renamed to ${newFile}...`);
        }
    });
}

fileRename("noName.txt", "Something.txt");