let fs = require('fs');

fs.readdir(".", function (error, files){
    if(error){
        return console.log(error);
    }
    // console.log(files);
    // files = [];
    
    files = files.filter((file) => {
        // console.log(file);
        // let stat = fs.statSync(`./${file}`).isFile();
        // console.log(stat);
        // return stat.isFile();
        return fs.statSync(file).isFile();
    });

    console.log(files);
});