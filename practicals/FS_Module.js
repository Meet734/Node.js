let fs = require('node:fs');
let path = require('node:path');
const { Stream, EventEmitter } = require('node:stream');

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


//Reading Large file
// let data = fs.readFileSync('demo.txt');


// // console.log(data.toString());
// console.log(data.toString().length)


// let reader = fs.createReadStream('demo.txt');

// let total = "";
// reader.on('data', (data) =>{
//     // console.log(data);
//     // console.log(data.toString());
//     total += data.toString();
//     console.log(data.length);
//     debugger
// }).on('end', () => {
//     console.log(total.length);
//     console.log("#File reading complete");
// }).on('error', (error) => {
//     console.log(error.message);
// });


// fs.readdir(".", function (error, files) {
//     if (error) {
//         console.log(error.message);
//     }
//     // console.log(files);
// })
// let dir = ["."];
// let files = [
//     '.git',
//     'Basic_CRUD.js',
//     'demo.txt',
//     'input.txt',
//     'Notes',
//     'practicals',
//     'README.md',
//     'tempFile.txt'
// ];
// console.log(files.pop());
// let final = path.join(...dir, files.pop());

// console.log(final);


// let temp = ['a','b','c'];
// let resolvedPath = path.resolve(...temp);
// console.log({resolvedPath});

// console.log(path.dirname('FS/new folder/Fs.js'));

// console.log(path.basename('FS/new folder/Fs.js'));

// console.log(path.extname('FS/new folder/Fs.js'));

// debugger;


// function temp(value){
//     return new Promise(function (res, rej){
//         setTimeout(()=>{
//             console.log(value);
//             res(value);
//         }, 3000);
//     });
// }

// let ans = temp(1).then(res => {
//     console.log(res);
//     temp(2).then((res) => {
//         console.log(res);
//     })
// });

// let ans = temp(1)
// .then(temp(2))
// .then(temp(3))
// .then(temp(4))
// .catch(function (error){
//     console.log(error.message);
// })


// console.group("Grouped Logs");
// console.log("Log 1");
// console.log("Log 2");
// console.group("Netsing");
// console.log("inside the nested group")
// console.groupEnd();
// console.log("Out of the group...");


// console.groupCollapsed("Collapsed Group");
// console.log("Log 3");
// console.log("Log 4");
// console.groupEnd();

// console.count("Hello");
// console.count("Hello");
// console.count("hello again");
// console.count("Hello");

// console.table([1,2,3,4]);

// console.log(Array.toString());
// console.log(String.toString());


// class Temp{
//     #num = 123;
//     constructor(name){
//         this.name = name;
//     }
//     getName = function(){
//         console.log(this.name);
//     }
// }

// function Temp(name){
//     this.name = name;
// }

// console.log(typeof Array);
// console.log(typeof Temp);
// console.log(Temp.toString());

// console.log("#########");
// console.log(Array().toString());
// console.log(Array.isArray.toString());

// console.log(fs.Stats.toString());
// console.log(fs.statSync.FunctionPrototypeCall.toString());
// debugger

