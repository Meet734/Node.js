let EventEmitter = require('node:events');
let util = require('util');
let eventEmitter = new EventEmitter();

// eventEmitter.on('start', ()=>{
//     console.log("Event is just started...");
// })
// .on('end', ()=>{
//     console.log("Event is just ended...");
//     // eventEmitter = undefined;
//     delete globalThis['eventEmitter'];
// })
// .on('data', ()=>{
//     console.log('Data manipulation...');
// })
// .on('abcd', ()=>{
//     console.log("Hello!!");
// })
// .on('error', (error)=>{
//     console.log(error.message);
//     // throw error;
// })
// .on(EventEmitter.errorMonitor, (error)=>{
//     console.log(error.message);
// })
// .once('event', ()=>{
//     console.log("Hello, world!!!");
// })
// .on('data', ()=>{
//     console.log("Another data listner...")
// });

// eventEmitter.emit('start');
// eventEmitter.emit('end');
// eventEmitter.emit('data');
// eventEmitter.emit('data');
// eventEmitter.emit('data');
// let a = eventEmitter.emit('abcd');
// console.log(a);

// console.log(eventEmitter.emit('event'));
// console.log(eventEmitter.emit('event'));

// // eventEmitter.emit('event');
// // console.log(EventEmitter.on.toString());

// eventEmitter.emit('error', new Error('Some error...'));

// console.log("________________________");

// let e = new EventEmitter({captureRejections: true});

// e.on('something', async (value)=>{
//     throw new Error('#Some error');
// })
// .on('error', ()=>{
//     console.log("Error listner...");
// });

// e.emit('something');

// e[Symbol.for('nodejs.rejection')] = function() {
//     console.log("Another function...");
// }

// console.log(eventEmitter.eventNames());
// console.log(e.eventNames());
// console.log(eventEmitter.getMaxListeners());
// console.log(e.getMaxListeners());

// console.log(eventEmitter.listenerCount('data'));

// a = (eventEmitter.listeners('data'));
// console.log(a.toString());


let i = 0;
let geek1= (msg) => {
    console.log("Message from geek1: " + msg);
    i++;
};
 
let geek2 = (msg) => {
    console.log("Message from geek2: " + msg);
};

// // Registering geek1 and geek2
// eventEmitter.on('myEvent', geek1);
// eventEmitter.on('myEvent', geek1);
// eventEmitter.once('myEvent1', geek2);
 
// // Removing listener geek1 that was
// // registered on the line 13
// eventEmitter.removeListener('myEvent', geek1);
// eventEmitter.removeListener('myEvent', geek1);
// // eventEmitter.removeListener('myEvent', geek1);
 
// // Triggering myEvent
// eventEmitter.emit('myEvent1', "Event occurred");
// eventEmitter.emit('myEvent1', "Event occurred");
// eventEmitter.emit('myEvent1', "Event occurred");

// // Removing all the listeners to myEvent
// eventEmitter.removeAllListeners('myEvent');

// // Triggering myEvent
// eventEmitter.emit('myEvent', "Event occurred");


eventEmitter.on('event', ()=>{
    console.log("Hello, event");
})


eventEmitter.once('event');
console.log(eventEmitter.listeners('event'));