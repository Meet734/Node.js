let path = require('path');

console.log(path.basename("C:\\Users\\Meet\\Desktop\\Node.js\\practicals\\destination.txt"));
console.log(path.delimiter)
console.log(path.dirname("C:\\Users\\Meet\\Desktop\\Node.js\\practicals\\input.txt"));
console.log("directory: ", path.dirname("C:\\Users\\Meet\\Desktop\\Node.js\\practicals\\input.txt"));
console.log(path.extname("C:\Users\Meet\Desktop\Node.js\practicals\input.txt"));

console.log(path.isAbsolute("C:\\Users\\Meet\\Desktop\\Node.js\\practicals\\input.txt"));

let paths = ["C:", "Users", "Meet", "Desktop", "Temp", "input.js"];
let dir = path.join(...paths);

console.log(dir);

let normalized = path.normalize("C:\\Users\\Meet\\Desktop\\Node.js\\practicals\\input.txt");
console.log({normalized});

let parsed = path.parse("C:\\Users\\Meet\\Desktop\\Node.js\\practicals\\input.txt");
console.log(parsed);

let pos = path.posix;
console.log(pos);

console.log(pos.normalize.toString());

let relPath = path.relative("C:\\Users\\Meet\\Desktop\\Node.js\\practicals\\input.txt", "C:\\Users\\Meet\\Desktop\\Node.js\\prac\\input.txt");
console.log(relPath);

let resolvePath = path.resolve("inp.js");
console.log(resolvePath);

// path.sep = "*";
console.log(path.sep);


