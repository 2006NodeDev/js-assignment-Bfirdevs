/* 11. Splice Element
Define function spliceElement(someArr, index)
Splice the element at the provided index in the array.
*/
function spliceElement(someArr, index) {
    //myArr = someArr[index]
    let a = someArr.length-1
    someArr = someArr.splice(index, a)
    return someArr;
}

let arr = ['ayse', 'fatma', 'betul', 'elif', 'demet', 'derya'];
console.log(arr)
console.log(spliceElement(arr, 3));


