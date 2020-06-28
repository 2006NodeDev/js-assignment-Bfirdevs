/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */


function bubbleSort(numArray) {
  
  for(let i = 1; i < numArray.length; i++ ){
      for(let j = 0; j < numArray.length; j++){
        if(numArray[j] > numArray[i] ){
            let temp = numArray[j];
            numArray[j] = numArray[i];
            numArray[i] = temp;

        }
      }
  }
  return numArray;
}

console.log(bubbleSort([5, 6, 3, 2, 1, 8, 7, 4, 0]))