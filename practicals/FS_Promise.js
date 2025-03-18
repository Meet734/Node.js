let fs = require('fs').promises;

let fh = fs.open('tempFile.txt');

// setTimeout(()=>{
//     let stat = fs.statfs('tempFile.txt');
//     setTimeout(()=>{
//         console.log(stat);
//     }, 2000);
// }, 2000);
fh.then((fileH)=>{
    // let stat = fs.statfs('tempFile.txt');
    // stat.then((stats)=>{
    //     console.log(stat);
    //     console.log(stats);
    //     console.log(stats.type);
    //     console.log(stats.bsize);
    //     console.log(stats);
    // });
    let data = "Asia: India, Japan, China, UAE...";
    console.log(fileH);
    let newF = fileH.appendFile(data);
    newF.then(()=>{
        console.log("Data appended to the file...");
    })
    .catch((error)=>{
        console.log(error.message);
    })
    .finally(()=>{
        console.log("Final code...");
    })
});

// console.log("Final code...");