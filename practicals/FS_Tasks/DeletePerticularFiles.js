let fs = require('fs');


function deleteAllFiles(path, extension){
    let files = fs.readdirSync(path);
    console.log(files);

    files = files.filter((file) => {
        let stats = fs.statSync(file);
        if(stats.isFile() && file.split(".").pop() === extension){
            console.log("1");
            fs.unlinkSync(file);
                console.log("Files deleted from the folder...");
            return true;
        }
        return false;
    });
    console.log("Files removed: ", files);
}

deleteAllFiles(".", "txt");