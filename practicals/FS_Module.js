let fs = require('node:fs');

//Asynchronous file read
/*fs.readFile('input.txt', 'utf8',function (error, data) {
    if(error){
        return console.error(error);
    }
    console.log("Asynchronous read: ", data.toString());
});*/

//synchronous file read
/*let data = fs.readFileSync('input.txt');
console.log("Synchronous read:", data.toString());

console.log("file reading complete")

setTimeout(()=>{
    console.log("Hello");
}, 5000);*/


//Open file, flags, access permission
/*fs.open('input.txt', 'r', function (error, fd){
    if(error){
        return console.log(error);
    }
    console.log("File opened...");
});*/

//file stats
/*fs.stat('input.txt', function (error, stats){
    if(error){
        return console.log(error);
    }
    // console.log(stats);
    console.log(stats.isFile());
    console.log(stats.isDirectory());
    console.log(stats.isSymbolicLink());

    console.log(stats.mode);
});*/

//copy file
/*fs.copyFile('script.js', 'destination.txt', function (error){
    if(error){
        return console.log(error);
    }
    console.log("File copied successfully");
})*/

/*
let fp = fs.open('input.txt', 'r', function (error, data){
    if(error){
        return console.log(error);
    }
    console.log("File is open...");
});

let data = "Some data to insert...";
fs.writeFile('input.txt', data, 'utf8', function (error, data){
    if(error){
        return console.log(error);
    }
    console.log("Data is written to the file");
});*/

//delete file
/*fs.unlink('./practicals/newFile.txt', function (error) {
    if (error) {
        return console.log(error);
    }
    console.log("File deleted successfully");
});*/

//Append data to the file
/*
let data = "\n#Input data to append in the file";

fs.appendFile("input.txt", data, function (error){
    if(error){
        return console.error(error);
    }
    console.log("Data appended to the file...");
});*/

//read a directory

/*fs.readdir(".", function (error, files){
    if(error){
        return console.error(error);
    }
    else{
        console.log(files);
        console.log(files[5]);
    }
});*/


// let data = "##################";
// let buf = new Buffer.from(data);

// fs.open("input.txt", "r+", function (error, fd){
//     if(error){
//         return console.log(error);
//     }
//     fs.write(fd, buf, buf.length, 0, function (error, bytes){
//         if(error){
//             return console.log(error);
//         }
//         console.log(`Data ${bytes} written to the file...`);
//     });
// });
