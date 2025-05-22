const sz = 50;
let a = new Array(sz).fill(0);

function fib(n){
    if(a[n] != 0){
        return a[n];
    }
    if(n <= 2){
        a[n] = 1;
        return 1;
    }

    a[n] = fib(n-1) + fib(n-2);
    return a[n];
}

for(let i=1;i<sz;i++){
    console.log(fib(i));
}