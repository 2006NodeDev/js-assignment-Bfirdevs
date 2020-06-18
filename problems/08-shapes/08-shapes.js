/* 8. Shapes
Define function: printShape(shape, height, character)
shape is a String and is either "Square", "Triangle", "Diamond".
height is a Number and is the height of the shape. Assume the number is odd.
character is a String that represents the contents of the shape. Assume this String contains just one character.
Use a switch statement to determine which shape was passed in.
Use the console.log function to print the desired shape.
Example for printShape("Square", 3, "%");
%%%
%%%
%%%
Example for printShape("Triangle", 3, "$");
$
$$
$$$
Example for printShape("Diamond", 5, "*");
  *
 ***
*****
 ***
  * 
*/
function printShape(shape, height, character) {
  let singleLine ='';
    switch(shape){
      case 'Square': {
        for(let i=0; i<height; i++){
            singleLine += character;   
         }
         for(let i =0; i<height; i++){
          console.log(singleLine)
         }
         break;
      }
      case 'Triangle': {
        for(let i=0; i<height; i++){
          singleLine += character; 
          console.log(singleLine);  
        }
         break;
      }
      // only work on diamond later on 
      case 'Diamond': {
        
        for(let i=0; i<height/2; i++){
          singleLine += " ";
        }
        console.log(singleLine)
        for(let i =height/2; i<=0; i--){
          singleLine -=character; 
            console.log(singleLine)
        }
          break;
      } 
    }
}
printShape('Square', 5, '&');
printShape('Triangle', 4, '*');
printShape('Diamond', 7, '#');