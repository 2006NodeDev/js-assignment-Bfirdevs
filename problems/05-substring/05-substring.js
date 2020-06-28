/* 5. Substring
Define function substring(someStr, startIndex, endIndex)
Return the substring contained between startIndex (inclusive) and endIndex (exclusive).
If incorrect input is entered, throw an exception stating the input was incorrect.
For example substring('hello', 0, 3) should give 'hel' */
function substring(someStr, startIndex, endIndex) {
    if(startIndex >= endIndex){
        console.log("Wrong input")
    }else {
        let substr = "";
        for(let i =startIndex; i < endIndex; i++ ){
            substr += someStr.charAt(i);
        }
            return substr;
    }
    
}

console.log(substring('Firdevs', 2, 5));
console.log(substring('FirdevsYildirim', 2, 8));