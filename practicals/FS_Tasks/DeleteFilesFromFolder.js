let fs = require('fs');

function deleteAllFiles(path){
    let files = fs.readdirSync(path);
    console.log(files);

    files = files.filter((file) => {
        if(fs.statSync(file).isFile()){
            console.log("1");
            fs.unlinkSync(file, function (error){
                console.log("2");
                if(error){
                    return console.log(error.message);
                }
                console.log("Files deleted from the folder...");
            });
            return true;
        }
        return false;
    });
    console.log("Files removed: ", files);
}

deleteAllFiles(".");