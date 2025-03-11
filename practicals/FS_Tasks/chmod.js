let fs = require('fs');

fs.chmod('tempFile.txt', 0o0, function (error){
    if(error){
        console.log(error.message);
    }

    try{
        console.log("File read...");
        let data = fs.readFileSync('tempFile.txt');
        console.log(data.toString());
    }
    catch(error){
        console.log(error.message);
    }

    console.log("------------");
    
    try{
        fs.writeFileSync('tempFile.txt', "Asia: Japan, India, China");
        console.log("File write...");
    }
    catch(error){
        console.log(error.message);
    }
});