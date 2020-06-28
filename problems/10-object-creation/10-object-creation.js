/* 10 Object Creation
Create an object using an object literal, constructor function, and es6 class.
The object should have the fields name and age.*/

//object literal
let bestFriend = {name: "Elif", age: 28}

//constructor function object
function cat(name , age){
    this.name = name;
    this.age = age;
}
let mycat = new cat('mia', '1')

// es6 class
class employee{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}
let ItEmployee = new employee('Firdevs Yildirim', 28);

console.log(bestFriend);
console.log(mycat);
console.log(ItEmployee);
