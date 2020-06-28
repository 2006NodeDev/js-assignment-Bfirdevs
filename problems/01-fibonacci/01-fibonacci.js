/* 1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence. */
function fib(n) {
    let a =0;
    let b =1;
    let c;
    for(let i =2; i<n; i++){
        c = a + b;
        a = b;
        b = c;
    }
    return c;
}
    console.log(fib(10));
    console.log(fib(15));
    console.log(fib(2));