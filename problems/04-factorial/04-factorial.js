/* 4. Factorial
Define function: factorial(someNum)
Use recursion to compute and return the factorial of someNum.  */
function factorial(sumNum) {
    let fac = 1; 
    for(let i = 1; i<=sumNum; i++ ){
        fac = fac * i;
    }
  return fac;
}
console.log(factorial(5));
console.log(factorial(3));
console.log(factorial(7));
console.log(factorial(1));