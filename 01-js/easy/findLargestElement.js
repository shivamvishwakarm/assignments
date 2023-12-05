/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {

    // Check if array is empty
    if (numbers.length === 0) {
        return undefined;
    }
    
    // Set first element as largest
    let largest = numbers[0];
    
    // Loop through array
    for (let i = 1; i < numbers.length; i++) {
    
        // Check if current element is greater than largest
        if (numbers[i] > largest) {
        largest = numbers[i];
        }
    }
    
    // Return largest
    return largest;

    
}

module.exports = findLargestElement;