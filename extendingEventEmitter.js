let EventEmitter = require('node:events');

class childEmitter extends EventEmitter{
    function1() {
        this.emit("Hello!!!");
        return "something";
    }
}


let myEmitter = new childEmitter();
myEmitter.on('Hello!!!', () => {
    console.log("Listening to the event...");
});

console.log(myEmitter.function1());