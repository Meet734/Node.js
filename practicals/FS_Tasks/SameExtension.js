let fs = require('fs');

function findExtension(path, extension){
    fs.readdir(path, function(error, files){
        if(error){
            console.error(error);
        }
        console.log(files);
        
        files = files.filter((file) => {
            // console.log(file.split(".").pop())
            return (file.split(".").pop() === extension);
        });
        console.log(`files with extension .${extension}: `, files);
    });
}

findExtension(".", "js");