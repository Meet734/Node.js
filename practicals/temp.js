// function fib(n){
//     if(n <= 1){
//         return 1;
//     }
//     return fib(n-1) + fib(n-2);
// }

// const { X509Certificate } = require("crypto");
// const { get } = require("http");

// for(let i = 0; i < 40; i++){
//     console.log(fib(i));
// }
// console.log("Done");

// function greet(temp, callback){
//     console.log("Hello "+temp);
//     callback();
// }

// function goodMorning(){
//     console.log("Good Morning");
// }

// greet ("Abcd", goodMorning);

//function passed to another function as an argument is called callback function

//closure

/*
function x(){
    var a = 7;
    console.log(a);
    function y(){
        console.log(a);
    }
    function temp(){
        a = 99;
    }
    a = 100;
    temp();
    return y;
}

function abc(){
    console.log("Form abc");
}
var z = x();
console.log(z);

z();
*/

// const rad = [10, 20, 30];

// const getArea = function(rad){
//     const output = [];
//     for(let i=0;i<rad.length;i++){
//         output.push(Math.PI * rad[i] * rad[i]);
//     }
//     return output;
// }

// console.log(getArea(rad));


//function aliasing
/*
const add = function(a, b){
    return a+b;
}
const subtract = function(a, b){
    return a-b;
}
const multiply = function(a, b){
    return a*b;
}
const divide = function(a, b){
    return a/b;
}

const calculate = function(a, b, operation){
    let output = operation(a, b);
    return output;
}

console.log(calculate(10, 20, add));
console.log(calculate(10, 20, subtract)); 
*/

//Promises
/*
const cart = ["apple", "banana", "mango"];

createOrder(cart, function() {
    proceedToPayment(orderId);
});//returns a promise

// proceedtoPayment(orderId);//will return payment id

const promise = createOrder(cart);

// empty Object, with some data value in it
// {data: orderDetails}

promise.then( function() {
    proceedToPayment(orderId);
});
*/

// let promise = new Promise(function(resolve, reject){
//     let flag = true;
//     if(flag){
//         console.log("Success");
//     }
//     else{
//         console.log("Failure");
//     }
// });

// promise.then(function(result){
//     console.log(result);
// }).catch(function(error){
//     console.log(error);
// });

// console.log(promise);

/*
let callA = function(){
    console.log("From A");
}
let callB = function(){
    console.log("Message From B: "+arguments[0]);
}

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("Success");
        reject("Failure");
    }, 1000);
});

promise.then(callA, callB);
*/

// let country = function(){
//     console.log("Country is selected...");
// }
// let state = function(){
//     console.log("State is selected...");
// }
// let city = function(){
//     console.log("City is selected...");
// }

// let callError = function(){
//  
//    console.log("Error occurred...");
// }

/*
let country = function() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Country is selected...");
            resolve();
        }, 1000); // Simulate a delay of 1 second
    });
}

let state = function() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("State is selected...");
            resolve();
        }, 2000); // Simulate a delay of 1 second
    });
}

let city = function() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Error in selecting city");
            // console.log("City is selected...");
            // resolve();
        }, 3000); // Simulate a delay of 1 second
    });
}

let callError = function(error) {
    console.log(error);
}


const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Success");
    }, 2000);
});

promise
    .then(country)
    .then(state)
    .then(city)
    .catch(callError);
*/

// const thenable = {
//     then(callA, callB){
//         console.log("From thenable");
//         callA();
//     }
// }


// // Define a thenable object
// const thenable = {
//     then(resolve, reject) {
//         console.log("From thenable");
//         resolve("Resolved from thenable");
//     }
// };

// // Create a promise
// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Initial resolve");
//     }, 1000);
// });

// // Use the thenable in the promise chain
// promise
//     .then((value) => {
//         console.log(value); // Output: Initial resolve
//         return thenable;    // Returning a thenable
//     })
//     .then((value) => {
//         console.log(value); // Output: Resolved from thenable
//     })
//     .catch((error) => {
//         console.log("Error: " + error);
//     });

// console.log('Start');

// let promise1 = new Promise((resolve, reject) => {
//     console.log('Promise1 executor');
//     resolve('Promise1 resolved');  
    
//     console.log('Promise1 executor');
//     resolve('Promise1 resolved');
// });

// promise1.then((result) => {
//     console.log(result);
// });

// setTimeout(() => {
//     console.log('Timeout');
// }, 0);

// console.log('End');


// let promiseA = new Promise((resolve) => setTimeout(() => resolve('A'), 1000));
// let promiseB = new Promise((resolve) => setTimeout(() => resolve('B'), 2000));
// let promiseC = new Promise((resolve) => setTimeout(() => resolve('C'), 3000));

// promiseA.then(resultA => {
//     return promiseB.then(resultB => {
//         return promiseC.then(resultC => {
//             return `${resultA}, ${resultB}, ${resultC}`;
//         });
//     });
// }).then(combinedResult => {
//     console.log(combinedResult); // Should output "A, B, C"
// });

// let promise2 = new Promise((resolve, reject) => {
//     reject('Promise2 rejected');
// });

// let rejectHandler = function(error){
//     console.log("Error occurred..."+error);
// }
// promise2
//     .then((result) => {
//         console.log(result);
//     },
//     rejectHandler)
//     .then((result) => {
//         console.log(result);
//     });


// let promiseA = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve('A');
//     }, 1000);
// });
// let promiseB = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject('B');
//     }, 2000);
// });
// let promiseC = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve('C');
//     }, 3000);
// });

// Promise.all([promiseA, promiseB, promiseC])
//     .then((results) => {
//         console.log(results); // Should output ['A', 'B', 'C']
//     })
//     .catch((error) => {
//         console.log('Error: ' + error);
//     });

//     setTimeout(() => {
        
//         console.log(promiseA);
//         console.log(promiseB);
//         console.log(promiseC);
//     }, 4000);
//     // console.log("Status of PromiseC: "+promiseC.status);


// let a = 10;

// // console.log(this.a);
// // console.log(this);

// console.log(this.a);
// this.a = 100;
// console.log(this);
// console.log(a);


// Enable strict mode for the entire script
// "use strict";

// // Global variable
// let a = 10;

// function exampleFunction() {
//     // Enable strict mode for this function only
//     "use strict";
    
//     // Local variable
//     let b = 20;
    
//     // Trying to assign a value to an undeclared variable (will throw an error in strict mode)
//     // c = 30; // Uncommenting this line will throw an error: "c is not defined"
    
//     console.log("Inside function:");
//     console.log("a:", a); // 10 (global variable)
//     console.log("b:", b); // 20 (local variable)
//     // console.log("c:", c); // Error: c is not defined
//     console.log("this:", this); // undefined in strict mode
// }

// // Call the function
// exampleFunction();

// // Global context
// console.log("Global context:");
// console.log("a:", a); // 10 (global variable)
// console.log("this:", this); // In strict mode, `this` is undefined in the global context (in non-strict mode, it would be the global object)

// // Assigning a value to `this.a` in the global context (will throw an error in strict mode)
// try {
//     this.a = 100; // Error in strict mode: Cannot set property 'a' of undefined
// } catch (e) {
//     console.log("Error:", e.message);
// }

// // Check the value of `a` again
// console.log("a:", a); // 10 (global variable remains unchanged)


// const person = {
//     name: "Alice",
//     greet: function() {
//         console.log("Hello, my name is " + this.name);
//     }
// };

// const greet = person.greet.bind(person);
// greet(); // Output: Hello, my name is Alice



// const obj = {
//     dataProp: 'This is a data property',

//     // Accessor property
//     get accessorProp() {
//         return 'This is an accessor property';
//     }
// };

// // Get the property descriptors
// const dataDescriptor = Object.getOwnPropertyDescriptor(obj, 'dataProp');
// const accessorDescriptor = Object.getOwnPropertyDescriptor(obj, 'accessorProp');

// // Check if the property is a data property or accessor property
// console.log(dataDescriptor); 
/*
Outputs:
{
  value: 'This is a data property',
  writable: true,
  enumerable: true,
  configurable: true
}
*/

// console.log(accessorDescriptor);
/*
Outputs:
{
  get: [Function: get accessorProp],
  set: undefined,
  enumerable: true,
  configurable: true
}
*/

// Constructor function for creating person objects
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// // Adding a method to the prototype
// Person.prototype.greet = function() {
//     console.log('Hello, my name is ' + this.name);
// };

// // Creating instances of the Person constructor
// const alice = new Person('Alice', 30);
// const bob = new Person('Bob', 25);

// // Calling the greet method on the instances
// alice.greet(); // Outputs: "Hello, my name is Alice"
// bob.greet(); // Outputs: "Hello, my name is Bob"

// // Checking the prototype chain
// console.log(alice.__proto__ === Person.prototype); // Outputs: true
// console.log(bob.__proto__ === Person.prototype); // Outputs: true

// // Showing the prototype hierarchy
// console.log(Person.prototype.__proto__ === Object.prototype); // Outputs: true

// console.log(Person.prototype);

// Person.func = function(){
//     console.log("From func");
// }

// console.log(Person);


// console.log(globalThis);

// function Animal(name) {
//     this.name = name;
// }

// Animal.prototype.speak = function() {
//     console.log(this.name + ' makes a noise.');
// };

// const dog = new Animal('Dog');
// const cat = new Animal('Cat');

// // Overriding the speak method for the dog instance
// dog.speak = function() {
//     console.log(this.name + ' barks.');
// };

// dog.speak(); // ?
// cat.speak(); // ?


// function Car(make, model) {
//     this.make = make;
//     this.model = model;
// }

// Car.prototype.start = function() {
//     console.log(this.make + ' ' + this.model + ' starts.');
// };

// const car = new Car('Toyota', 'Camry');

// // Extend the start method to include additional functionality
// // Your code here...

// car.start(); // Should output the original message and your additional functionality

// car.start = function(){
//     console.log("From start");
// }

// car.start();



// const averageSharePriceByMonthQ1 = [109.6, 103.3, 89.4]
// const averageSharePriceByMonthQ2 = [109.3, 126.1, 103.3]
// const averageSharePriceByMonthQ3 = [120.8, 102.3, 106.8]
// const averageSharePriceByMonthQ4 = [110.9, 119.8, 113.7]

// function findPriceExtremes(arr){
//     const highest = Math.max(...arr)
//     const lowest = Math.min(...arr)
//     console.log(`The highest average share price was ${highest}`)
//     console.log(`The lowest average share price was ${lowest}`)
// }
// findPriceExtremes([...averageSharePriceByMonthQ1,...averageSharePriceByMonthQ2,...averageSharePriceByMonthQ3,...averageSharePriceByMonthQ4])

/*
let a = 10;
function func(){
    let a;
    this.a = 99;

    console.log(this.a);
    console.log(a);
}

func();
console.log(a);

 
(this.a);
console.log(this);
*/

// console.log(this);

// console.log(globalThis);

// let x = {
//     a : 1,
//     b : {
//         c : 1
//     }
// }
// y = {...x}
// // y.b = {...x.b}
// x.a = 100
// x.b.c = 100
// console.log(x)
// console.log(y)

// let a = [1, 2, 3, [4, 5]];
// let b = [...a];

// a[0] = 100;
// b[3][0] = 100;

// console.log(a); // Outputs: [100, 2, 3, [100, 5]]
// console.log(b); // Outputs: [1, 2, 3, [100, 5]]


/*
function Person(name, age){
    this.name = name;
    this.age = age;

    this.greet = function(){
        console.log("Hello from "+this.name);
    }

    return this;
}

const person = new Person("Abcd", 20);

console.log(person);
person.greet()

console.log(typeof person);

console.log("###########");


const obj = new Object();

console.log(obj);
obj.name = "Some Name";
obj.sayHello = function(){
    console.log("Hello from "+this.name);
}

console.log(obj);
obj.sayHello();

console.log("###########");

const obj1 = new Person("Xyz", 20);
console.log(obj1);


console.log("###########");
const obj2 = Person("Pqr", 20);
console.log(obj2);

obj2.greet();

obj2.name = "Updated Name";
console.log(obj2.name);

obj1.name = "Updated Name";
console.log(obj1.name);
console.log(obj1);
*/


// let a = new Number(10);
// console.log(a);
// console.log(typeof a);
// console.log(a.valueOf());
// console.log(a.hasOwnProperty("valueOf"));

// Number.prototype.negate = function(){
//     return -this;
// }

// let b = new Number(100);
// console.log(a.negate());
// console.log(b.negate());

// console.log("###########");

// let c = 12;
// console.log(Number.negate);
// // a = 100;
// // console.log(a);

// console.log(a.negate());

// class Person{
// //     static a = 10;
// // }

// // console.log(Person.a);

// const a = {
//     a: 1,
//     b: 2,
//     c: 3
// };
// const b = {
//     c: 10,
//     d: 20,
//     e: 30
// };
// const c = {
//     a: 100
// };

// const temp = Object.assign(a, b, c);
// console.log(temp);


// const person = {
//     isHuman: false,
//     name:"xyz",
//     printIntroduction: function () {
//       console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
//     },
//   };
  
//   const me = Object.create(person);
  
//   console.log(me);
  
// //   me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
// //   me.isHuman = true; // Inherited properties can be overwritten
  
//   me.printIntroduction();
//   // Expected output: "My name is Matthew. Am I human? true"
//   console.log(me.isHuman)
//   console.log(me.name);
//   console.log(person)


// "use strict";

// let obj = {};
// Object.defineProperty(obj, {
//     x: {
// 	value: 42,
// 	writable: false,
// 	enumerable: true,
// 	configurable: false
//     }
// });

// console.log(obj.x); // 42
// console.log(obj.x); // 42
// // Attempting to redefine throws an error in strict mode
// try {
// 	Object.defineProperty(obj, {
//         x: {
// 		value: 100
//         }
// 	});
// } catch (error) {
// 	console.error("afshf"); // "Cannot redefine property: x"
// 	console.error(error.message); // "Cannot redefine property: x"
// }

// console.log("x : "+obj.x); // 42

// obj.value = 10000;
// console.log("onj.value: "+obj.value);
// console.log(obj.configurable); // 42

// console.log(Object.getOwnPropertyDescriptor(obj, "x"));


// const person = [
//     ['name', 'Alice'],
//     ['age', 30],
//     ['isHuman', true]
// ]

// const obj = Object.fromEntries(person)
// console.log(obj)

// console.log(typeof obj);

/*
class Animal{
    constructor(species, legs, tail, violent){
        this.species = species;
        this.legs = legs;
        this.haveTail = tail;
        this.isViolent = violent;
    }
}
class Cat extends Animal{
    constructor(name, friendOf){
        super("cat", 4, true, false);
        this.name = name;
        this.friendOf = friendOf;
    }
}
class Person extends Animal{
    constructor(name, age){
        super("Human", 2, true, false);
        this.name = name;
        this.age = age;
        this.isHuman = true;
    }

    introduce(){
        console.log(`My name is ${this.name}. I am ${this.age} years old.`);
    }
}

const a = new Person("Meet", 20);
console.log(a);

a.introduce();


const cat = new Cat("Tom", "Jerry");
console.log(cat);

console.log(Person.hasOwnProperty("isHuman"));
console.log(Person.hasOwnProperty("instroduce"));
console.log(Person.prototype.hasOwnProperty("introduce"));
console.log(Animal.hasOwnProperty("introduce"));
console.log(Person.prototype);

console.log("###########");
*/


// class Temp extends Animal{
//     constructor(){
//         // this.a = 10;
        
//         return {a: "10"};
//     }
// }
//child class can't return premitive values from the constructor, but it can return object.
// const temp = new Temp();
// console.log(temp);
/*
class Temp{
    constructor(){
        this.a = 10;
        // return 1;
        return {b: 20, c: "Some string"};
    }
}

const temp = new Temp();

console.log(temp);

// console.log(new Temp());

*/

//Math class
/*
let a = 10;
let b = -9;

console.log(Math.abs(b));
// console.log(Math.asine(1/2.0));

let c = 9.901
console.log(c);
console.log(Math.ceil(c));

console.log(Math.fround(c));


console.log(Math.max(1,2,3,4,9.01));

console.log(Math.pow(2,10));
console.log(Math.random());
console.log(Math.sign(10));
console.log(Math.sign(-10));
console.log(Math.sign(-0));


console.log(Math.trunc(-10.9));
console.log(Math.trunc(-0.9));

console.log(0 == -0);
console.log(0 === -0);

console.log(~-0);
console.log(~0);
*/

// class a {
//     constructor(){
//         this.a = 10;
//     }
// }

// const p = new a();
// const q = Object.freeze(p);
// console.log(p);
// console.log(q);


// console.log(p == q);
// console.log(p === q);

// p.a = 100;
// console.log(p);
// console.log(q);


// const a = {
//     p: 10,
//     greet: function () {
//         console.log("Hello");
//     }
// }

// console.log(Object.values(a));


// const func = function notFunc(){
//     console.log("Hello");
// }

// console.log(func);
// notFunc();
// func();

// (function() {
//     // console.log("Hello");
//     var x = y = 10;
// })();

// console.log(typeof x);
// console.log(typeof y);

// // console.log(x);
// console.log(y);


// let array = [1, 2, 3];
// array[10] = 99;
// console.log(array.length);
// console.log(array);


// const person = { name: "John" };
// Object.freeze(person);
// person.age = 30;
// delete person.name;
// person.name = "Mike";
// console.log(person);

// (function() {
//     console.log(typeof foo);
//     var foo = function() { return "bar"; };
//     function foo() { return "baz"; }
// })();
  
// for (let i = 0; i < 3; i++) {
//     setTimeout(function() {
//       console.log(i);
//     }, 1000);
//   }

/*
const a = {
    name: "Abcd",
    age: 20,
    temp: {
        p1: 10,
        p2: 20
    }
}


const b = Object.entries(a);
console.log(b);

console.log(typeof b[2][1]);
console.log(typeof b[2][0]);
console.log(typeof b[1][1]);
*/


// console.log(typeof null);
// console.log(null instanceof Object);

// let x = 10;
// let y = x++;
// console.log(x);
// console.log(y);

// const obj = {
//     a: 1,
//     b: function() {
//         return this.a + 1;
//     }
// };
// console.log(obj.b());
// const b = obj.b;
// console.log(b());
// console.log(b)
// console.log(undefined + 1);


// function b(){
//     function a(){
//         console.log("From a");
//     }
//     console.log("From b");
//     return a();
// }

// b();


/*
const a = new Array(26).fill(-1);
let s = "abcabcbb";

let count = 0;
let anotherCount = 0;
let max = 0;
// let start = 0;
// console.log(s.indexOf("b"));


for(let i=0;i<s.length;i++){
    let char = s.charAt(i);
    let index = char.charCodeAt(0) - 97;

    if(a[index] == -1){
        a[index] = i;
        count++;
        anotherCount++;
        max = Math.max(max, count, anotherCount);
    }
    else{
        
        a.map((value) => {
            value < a[index] ? -1 : value; 
        });

        anotherCount = i - a[index];
        a[index] = i;
        count = 1;
    }
}

console.log(max);

*/
// class myClass {
//     #prop = "Some Name";

//     constructor(name){
//         this.name = name;
//     }

// //     getProp(){
// //         return this.#prop;
// //     }
// //     setProp(value){
// //         this.#prop = value;
// //     }
// //     method(){
// //         console.log("We can access the private from here "+this.#prop);
// //     }
// // }

// // const temp = new myClass("Meet");
// // console.log(temp.name);
// // console.log(temp.getProp());
// // temp.setProp("Updated Name");
// // console.log(temp.getProp());

// // temp.method();

// // const temp = class {}

// // temp.prototype.name = "Alice";

// // const p1 = new temp();
// // temp.prototype.name = "Bob"; 

// // const p2 = new temp();

// // console.log(temp.prototype);
// // console.log(temp);

// // console.log(p1.name == p2.name);


// let x = [1,2,3,4,5];

// let [a, b] = x;//1 2
// [a,,b] = x;
// [a = 10, b] = x;
// [a,b,...rest] = x;
// [a,b,...{pop, push}] = x;
// [a,b,...[c,d]] = x;


// // console.log(x.pop());
// // console.log({pop, push})
// console.log(a);
// console.log(b); 
// console.log(rest);
// console.log(c, d);


// let a, b;
// let x = {
//     a: 1,
//     b: 2,
//     c: function(){
//         console.log("From c");
//     }
// };

// console.log(x);

// ({a, b, c} = x);

// let {a, b, c} = x;
// console.log(a,b,c);

// let {a: a1, b: b1, c: c1} = x;
// console.log(a1, b1, c1);

// let {a: a1 = "Something", b: b1, c: c1} = x;    //only when the a is not present in the object
// console.log(a1, b1, c1);
// console.log(a);

// let {a, ...c} = x;
// console.log(a, c);
// console.log(typeof c);

// console.log(typeof a);

// function tag(strings, a, b) {
//     console.log(strings); // Array of string segments
//     console.log(a, b);  // Array of expression values
//     return 'Tagged template output';
//   }
  
//   const name = 'Alice';
//   const age = 25;
//   const taggedMessage = tag`Hello, my name is ${name} and I am ${age} years old.`;
//   console.log(taggedMessage); // Output: Tagged template output

// console.log(2**10);
// let a = 10;
// a **= 2;
// console.log(a);

// const p = 'name';
// const q = 'age';
// const obj = {
//     [p]: 'Alice',
//     [q]: 20
// }

// console.log(obj);


// let number = 10;
// let s = `Some text ${number}`;

// function fn(s, ...val){
//     console.log(s);
//     console.log(val);
// }

// fn`Some text ${number}`;


// const obj = {};

// Object.defineProperty(obj, 'name', {
//     value: 'Alice',
//     writable: false,
//     enumerable: true,
//     configurable: true
// });

// Object.defineProperty(obj, 'greet', {
//     value: function() {
//         console.log('Hello, my name is ' + this.name);
//     },
//     writable: false,
//     enumerable: true,
//     configurable: true
// });

// obj.greet(); // Output: Hello, my name is Alice
// console.log(obj);


//getter and setter

// const obj = {
    
// };

// let nameProp = 'Alice'

// Object.defineProperty(obj, 'name', {
//     get: function() {
//         return this.nameProp;
//     },
//     set: function(value) {
//         nameProp = value;
//         console.log('Setting the name to ' + value);
//     },
//     enumerable: true,
//     configurable: true
// });

// const obj = {
//     name: 'Alice'
// };
// // let nameProp = 'Alice';

// Object.defineProperty(obj, 'some', {
//     get: function() {
//         return this.name;
//     },
//     set: function(value) {
//         this.name = value;
//         console.log('Setting the name to ' + value);
//     },
//     enumerable: true,
//     configurable: true
// });


// console.log(obj.some); // Output: Alice
// obj.name = 'Bob'; // Output: Setting the name to Bob
// console.log(obj.name); // Output: Bob
// console.log(obj.name); // Output: Alice
// obj.name = 'Bob'; // Output: Setting the name to Bob
// console.log(obj.name); // Output: Alice

// console.log(obj.name);


// let temp = Math.random();

// console.log(temp);

// let a = new Array(new Array(5));
// console.log(a);


// const a = [1,2,3,4,5];
// let b = Math.floor(Math.random()*(a.length));

// console.log(a[b]);

// let a = [];
// console.log(a[0]);


// let a = new Array(5);
// let row = 5;
// let col = 5;

// for (let i = 0; i < row; i++) {
//     a[i] = new Array(5).fill(null);
// }

// console.log(a);

// console.log(x0AD0);

// console.log('\u0A95');


// let a = 0x10;
// console.log(a);


// function* numberGenerator(limit) {
//     let num = 0;
//     while (num < limit) {
//         yield num;
//         num += 1;
//     }
// }

// // Using the generator function
// const generator = numberGenerator(5);
// for (let number of generator) {
//     console.log(number);
// }


// function* manualStepGenerator() {
//     console.log("Step 1: Initialize");
//     yield; // Pause execution here

//     console.log("Step 2: Process");
//     yield; // Pause execution here

//     console.log("Step 3: Finalize");
//     yield; // Pause execution here

//     console.log("Step 4: Complete");
// }

// // Create the generator object
// const generator = manualStepGenerator();

// // Manually move through the function steps
// generator.next(); // Executes Step 1
// generator.next(); // Executes Step 2



// function addUniqueElement(array, element) {
//     // Check if the element is not already present in the array
//     if (!array.includes(element)) {
//         array.push(element);
//     } else {
//         console.log(`${element} is already in the array`);
//     }
//     return array;
// }

// // Example usage
// let myArray = [1, 2, 3, 4];
// let newElement = 5;

// myArray = addUniqueElement(myArray, newElement); // Adds 5 to the array
// console.log(myArray); // Output: [1, 2, 3, 4, 5]

// myArray = addUniqueElement(myArray, 3); // Does not add 3 to the array, as it is already present
// console.log(myArray); // Output: [1, 2, 3, 4, 5]


// let s = new Set([1,2,3,4]);

// console.log(s.size);

// const colors = ['🟥','🟧','🟨','🟩','🟦','🟪','🟫','⬛','⬜'];

// colors.forEach(color => {
//     console.log(color);
// });

// console.log(colors);
// console.log('🔴');


// Original 2D array
//Deep copy of matrix;
/*
const original2DArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Deep copy of the 2D array using JSON methods
const deepCopy = JSON.parse(JSON.stringify(original2DArray));

// Modify the deep copy to verify
deepCopy[0][0] = 99;

// Check the results
console.log('Original 2D Array:', original2DArray);
console.log('Deep Copy:', deepCopy);
*/

// function validateEmail(email) {
//     // Define the regular expression for email validation
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     // Test the email against the regex
//     return regex.test(email);
// }

// // Example usage
// const email1 = "example@example.com";
// const email2 = "invalid-email@.com";

// console.log(validateEmail(email1)); // Output: true
// console.log(validateEmail(email2)); // Output: false


// throw "Some error"

// try {
//     throw new Error("Whoops!");
//   } catch (e) {
//     console.error(`${e.name}: ${e.message}`);
//     console.log(typeof e);
//     console.log(e);
//   }
  
// this.radius = 5;
// const shape = {
//     radius: 10,
//     diameter() {
//       return this.radius * 2;
//     },
//     perimeter: () =>2 * Math.PI * this.radius,
//   };
  
//   console.log(shape.diameter());
//   console.log(shape.perimeter());


// console.log(+true); //convert it to number
// console.log(!'Lydia');

// class Chameleon {
  
//     constructor({ newColor = 'green', newName = "someName", newThing} = {newColor : "Red"}) {
//       this.newColor = newColor;
//       this.newName = newName;
//       this.newThing = newThing
//     //   this.new
//     };
//   }
  
//   const freddie = new Chameleon();
// //   console.log(freddie.colorChange('orange'));

// console.log(freddie);


// function bark() {
//     console.log('Woof!');
//   }
  
//   bark.animal = 'dog';

//   console.log(bark);


// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
  
//   const member = new Person('Lydia', 'Hallie');
//   Person.getFullName = function() {
//     return `${this.firstName} ${this.lastName}`;
//   };
  
//   console.log(Person.getFullName());



// console.log(typeof setTimeout(() => console.log('Hi'), 1000));

// console.log(Math.random()*9 + 1);
// console.log(!(5%5));


// console.log(Symbol(1) == Symbol(1));

// let a = [1,2,3,4,5];
// let b = Symbol(a);

// let c = b.toString;
// console.log(c);

    
// let a = [1,2,3,4];
// console.log(a[-2]);

// console.log(1/3*3);

// let a = 0;
// while(a != 1){
//     a = Math.floor(Math.random()*2500);
//     console.log(a);
// }


// Initial log
// console.log("Hello");

// // Update the log after 2 seconds
// setTimeout(() => {
//     console.clear();
//     console.log("Updated text after 2 seconds");
// }, 2000); // Delay of 2 seconds (2000 milliseconds)

// console.error("Some error");
// console.warn("Some warning");
// console.info("Some info");
// console.debug("Debug");
// console.assert(true, "true Assert");
// console.assert(false, "false Assert");
// console.count("hello");
// console.count("hello");
// console.count();
// console.count();
// console.clear();
// console.countReset("hello");
// console.dir("dir");
// console.table("Hello");
// console.profile("Hello");
// console.time("time");
// console.timeLog("time", 10);
// console.timeStamp("Hello");
// console.trace([1,2,3,4]);
// console.log("Hello");

// let a = {
//     name: "someone",
//     age: 20,
//     address: {
//         street: "Hill drive",
//         city: "somewhere"
//     },
//     favourite: {
//         color: "red",
//         song: "something",
//         language: {
//             oop: "Java",
//             functional: "JavaScript"
//         } 
//     }
// }
// console.table(a.address);
// console.log(a);

// console.log(Math.floor(Math.floor(Math.random()*30)/10));



// let mod = require('buffer');

// var buffer = Buffer.alloc(15);
// console.log(buffer.byteLength);

// buffer = Buffer.allocUnsafe(5);
// console.log(buffer);

// buffer.allocUnsafe;
// buffer[1] = 90;
// console.log(buffer);
// console.log(buffer[1]);

// console.log(buffer.byteLength);


// let buffer2 = Buffer.alloc(5);
// buffer2[0] = 99;

// console.log("#######");
// console.log(buffer.compare(buffer2));

// //source_buffer.copy(target_buffer, targetStart, sourceStart, sourceEnd);

// let it = buffer.entries();
// console.log(it.next());
// console.log(it.next());

// console.log(buffer.equals(buffer2));

// buffer.fill('a');
// console.log(buffer);

// // let temp = [1,2,3,4];
// // buffer.from(temp);
// // console.log(buffer);

// console.log(buffer.includes(97));
// console.log(buffer.length);

// var dns = require('dns');

// console.log(dns.getServers());
// console.log(dns.lookup());

// var cluster = require('cluster');

// console.log("Before the code...");
// if (cluster.isWorker) {
//   console.log('I am a worker');
// } else {
//   console.log('I am a master');
//   cluster.fork();
//   cluster.fork();
// }
// console.log(process.pid);
// console.log(process.execPath);
// console.log("After the code...");

// let net = require('net');

// console.log(net.isIPv6());

// let os = require('os');

// console.log(os.arch());
// console.log(os.constants);
// console.log(os.cpus());
// console.log(os.release());
// console.log(Math.floor(os.totalmem()));
// console.log(os.type());
// console.log(os.uptime());
// console.log(os.userInfo());

// let temp = require('buffer');

// let a = {'1': 1, '2': 2, '3': 3};
// let temp = Array.from([1,2,3,4,5]);
// console.log(temp);

// let cluster = require('cluster');

// let a, b;
// if (cluster.isWorker) {
//     console.log('I am a worker');
// }
// else {
//     console.log('I am a master');
//     a = cluster.fork();
//     b = cluster.fork();
// }

// // console.log(a.id);
// // console.log(b.id);
// console.log(cluster.Worker);
// console.log(cluster.isWorker);
// // console.log("After the code...");


// let buf = require('buffer');

// let a = Buffer.alloc(5);
// console.log(a.length);
// console.log(a.byteLength);

// a[0] = 10;
// console.log(a.entries());
// let it = a.entries();
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

// a.sort();

// console.log(a);

// console.log([] == []);
// console.log(2 == 2);
// console.log("b"+"a"+ +"a"+"a");


// let a = Object('abcd');
// console.log(a);
// a = Object(1);
// console.log(a);

// a = Object([1,2,3]);
// console.log(typeof [1,2,3]);
// console.log(typeof a);

// a = Object({'name': "someone", 'number': 20});
// console.log(a);
// console.log(typeof a);

// a = Object(Infinity);
// console.log(a);

// a = Object(true);
// console.log(a);

// a = Object(NaN);
// console.log(a);

// const object1 = {
//     property1: 42,
//     prop: "something"
//   };
  
// const descriptor1 = Object.getOwnPropertyDescriptors(object1);

// console.log(descriptor1);


// const object1 = {};
// const a = Symbol("a");
// const b = Symbol.for("b");
// const c = 'c';

// object1[a] = "localSymbol";
// object1[b] = "globalSymbol";
// object1[c] = "Symbol";

// const objectSymbols = Object.getOwnPropertySymbols(object1);

// console.log(objectSymbols);
// Expected output: 2




// class Temp{
//     #msg = "hello";
//     #sayHello(){
//         return "Hello, World!!!";
//     }
//     get something(){
//         return this.#msg;
//     }
//     set something(msg){
//         this.#msg = msg;
//     }

//     get sayHello(){
//         console.log("I'm here...");
//         return this.#sayHello();
//     }
// };

// let temp = new Temp();
// console.log(temp.something);

// temp.msg = "Hello, world";
// console.log(temp.msg);

// console.log(temp);
// // console.log(Temp.toString());

// console.log(Temp.sayHello);
// let newTemp = JSON.parse(Temp.toString());
// let newTemp = JSON.parse(JSON.stringify(Temp));
// console.log(newTemp);

// console.log(obj.log);

// console.log(Object.hasOwn("msg"));

// let a = [1,2,3];


// const a = 10;

// for(let i=0;i<10;i++){
//     const a = 20;
//     console.log(a);
//     const b = 10;
// }
// const b = 11;
// console.log(b);
// console.log(a);

// const array1 = ["one", "two", "three"];
// const reversed = array1.reverse();
// console.log(reversed);
// console.log(array1);