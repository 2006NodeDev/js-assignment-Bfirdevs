/* 6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator. */
function isEven(someNum) {
    let num = someNum /2
    if(someNum/2 === Math.round(someNum/2)){
        return true
    }else {
        return false
    }
}

console.log(isEven(5))
console.log(isEven(3))
console.log(isEven(6))
console.log(isEven(8))
