// const o = new Object();
// o.foo = 42;

// console.log(o);
// // { foo: 42 }

// const person = {
//     name: 'Abcd',
//     age: 20
// }

// console.log(person);

// const me = Object.create(person);
// me.name = 'Meet';

// console.log(me);
// const temp = Object.entries(person);

// console.log(temp);
// console.log(temp[0]); //like 2D array


// console.log("###########");
// const a = Object.getOwnPropertyDescriptor(person, "name");
// console.log(Object.getOwnPropertyDescriptor(person, "age").value);

// console.log("###########");

// console.log(x);
// // console.log(y);
// var x = 10;
// // let y = 20;

// // const a = 10;

// console.log(x);

// let add = function (a, b){
//     return a+b;
// }

// console.log(typeof add);

// let sum = add(1, 2);
// console.log(sum);

// let add1 = (a, b) => a+b;
// console.log(typeof add1);

// let some = new Boolean("false");
// console.log(Boolean(0));
// console.log(some);
// console.log(some.toString());
// console.log(typeof some);

// var x = 10;
// (function() {
//     var x = 20;
//     console.log(x);
// })();


// const a = [1,2,3,4,5];
// let sum = 0;

// for(let x in a){
//     console.log(x);
//     sum += a[x];
// }

// console.log(sum);

// for(let x of a){
//     console.log(x);
// }


// console.log("###########");

// class Person{
//     constructor(name, age, nationality){
//         this.name = name;
//         this.age = age;
//         this.nationality = nationality;
//         this.sayHello = function(){
//             return "Hello";
//         }
//     }

//     printName(){
//         console.log(this.name);
//     }
// }

// let p = new Person("Abcd", 20, "Indian");
// console.log(p);

// p.printName();

// console.log("###########");

// console.log(JSON.stringify(p));


// function fun(){
//     console.log("Hello");
// }

// setTimeout(fun, 1000);


const obj = {
    name: 'Object',
    type: 'Data Structure',
    sayHello: function(){
        return "Hello";
    }
}

obj.newProp = function(){
    return "New Prop";
}

console.log(obj);
console.log(obj.newProp());
console.log(obj.sayHello());
console.log();