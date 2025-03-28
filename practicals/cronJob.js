// const cron = require('node-cron');
// let toggle = true;

// function fib(a){
//     if(a <= 1){
//         return 1;
//     }
//     return fib(a-1)+fib(a-2);
// }
// const task = cron.schedule("*/2 * * * * *", function() {
//     console.log("running a task every 2 second");
// });

// cron.schedule("*/2 * * * * *", function() {
//     if(toggle){
//         console.log("Starting task: ");
//         task.start();
//         toggle = false;
//     }
//     else{
//         console.log("Stopping task: ");
//         task.stop();
//         toggle = true;
//     }
// });
// // for(let i=0;i<45;i++){
// //     console.log(i, ": ", fib(i));
// // }

var cron = require('node-cron');

cron.schedule('1,2,4,5 * * * *', () => {
  console.log('running every minute 1, 2, 4 and 5');
});