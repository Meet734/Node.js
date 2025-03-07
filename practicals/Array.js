// const a = [1, 2, 3, 100];

// console.log(a.length);
// console.log(a.at(-1));
// console.log(a.at(4));

// const it = a.entries();
// console.log(it.next().value);
// console.log(it.next().value);
// // console.log(it.value);

// const isLess = (a) => a < -1;

// console.log(a.every(isLess));

// console.log(a.fill(0, 1, 2));

// const ans = a.filter(isLess);
// console.log(ans);
// console.log(a);

// console.log(a.find(isLess));
// console.log(a.findIndex(isLess));

// a.forEach(x => console.log(x));

// console.log(a.join("-"));

// a.reverse();
// console.log(a);

// const even = (a) => (a&2) === 0;
// console.log(a.some(even));

// a.sort();
// console.log(a);

// a.sort((a, b) => a - b);
// console.log(a);

// a.splice(0, 0, [10, 20, 30]);
// console.log(a);

// console.log(a.with(0, 99));



// let a = Array(10);
// console.log(a);

// let b = Array(10, 11);
// console.log(b);

// let c = new Array(5);
// console.log(c);

// let d = new Array();
// console.log(d);

// d.push(10);
// console.log(d);

// for(let i=0;i<a.length;i++){
//     a[i] = i+1;
// }

// console.log(a);
// a.push(20);
// console.log(a);
// console.log(a.length);

// c.pop();
// c.pop();
// c.pop();
// console.log(c);
// console.log(c.length);



// let a = Array.from(Array.from("Hello!"));
// console.log(a);

// console.log(a[0]);



// let a = Array.from([1,2,3], (x) => {return (x+1)});
// let a = Array.from([1,2,3], (x) => (x+1));
// console.log(a);



// let a = Array.fromAsync(
//     new Map([
//         [0, 1],
//         [1, 2],
//         [2, 3],
//     ])
// ).then((array) => {
//     console.log(array); // Output: [[0, 1], [1, 2], [2, 3]]
// });


// let a = Array.fromAsync(
//     new Map([
//         [0,1],
//         [1,2],
//         [2,3],
//     ]),
// ).then((x) => x);

// console.log(a);




// console.log(Array.isArray([]));
// console.log(Array.isArray(['a','b','c']));
// console.log(Array.isArray("abcd"));
// console.log(Array.isArray(Array.from("abcd")));


// let a = Array.of(1,2,3,4);
// console.log(a);
// let b = Array.of([1,2,3]);
// console.log(b);

// let c = Array.of([1,2,3], (x) => x+1);
// console.log(c)
// let d = c[1](4);
// console.log(d);

// let p = a[0][1];
// console.log(p);

// console.log(c[0][2]);



// let a = [1,2,3,4];
// console.log(a.at(2));

// let b = [1,2,3,4,5];
// const c = a.concat(Array.from("1234"));
// console.log(c);


// c.copyWithin(0, 3, 5);
// console.log(c);



// let a = [1,2,3,4,5];
// const it = a.entries();

// console.log(it);
// console.log(it.next().value);
// console.log(it.next());



// let a = [1,2,3,4,5];

// const isLess = (x) => x <= 5;
// const isLess1 = (x) => x <5;
// console.log(a.every(isLess));
// console.log(a.every(isLess1))


// let a = new Array(10);
// a.fill(0, 5, 8);
// console.log(a);

// const b = a.filter((x) => x==0);
// console.log(b);
// console.log(a);

// b[0] = 10;
// a[5] = 90;
// console.log(b);
// console.log(a);

// let p = [1,2,3,4,5];
// let q = p.filter((x) => x < 3);
// console.log(q);

// p[0] = 99;
// console.log(q);
// console.log(p);


function fn(...a){
    console.log(a);
    console.log(typeof a);
    console.log(a.length);
}

fn(1,2,3,4,5);

