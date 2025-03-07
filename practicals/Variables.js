/*console.log("Hello, world");

// console.log(a);
// var a = 10;


// var b = 20;

let a = 10, b = 20;
// console.log(a+b);
let c = add(a, b);

function add(){
    // let c = a + b + 10;
    // console.log(c);
    const c = 100;
    console.log(c);
    return a + b;
}

console.log(c);*/

/*
a = 100;
console.log(a);
console.log(typeof a);
 fun();

function fun(){
    var x = 5;
    console.log(x);
    {
        var temp = 50;
        console.log(x);
        let anotherTemp = 40;
    }

    console.log(temp);
    // console.log(anotherTemp);
}


*/


function pyramid(){
    n = 5
    for(i=0;i<n;i++){
        for(j=0;j<i;j++){
            process.stdout.write("*");
        }
        console.log();
    }
}

// pyramid();


function fullPyramid(){
    let n = 5;

    for(i=0;i<n;i++){
        for(j=0;j<n-i;j++){
            process.stdout.write(" ");
        }
        for(j=0;j<i;j++){
            process.stdout.write("*");
        }
        for(j=0;j<i-1;j++){
            process.stdout.write("*");
        }
        console.log();
    }
}

fullPyramid();