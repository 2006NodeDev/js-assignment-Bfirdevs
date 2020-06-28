/* 9. Object Properties
Define function objectProperties(someObj)
Print every property and it's value. */
function objectProperties(someObj) {
    for(item in someObj){
        console.log(`${item}: ${someObj[item]}`)
    }
}


function phone(color, model, size, camera, brand, memory ){
    this.color = color;
    this.model = model;
    this.size = size;
    this.camera = camera;
    this.brand = brand;
    this.memory = memory;
}
let myphone = new phone('silver', 'iphone-8S', 6, true, 'apple', "64GB" );
objectProperties(myphone)