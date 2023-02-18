// Due: Feb-18 (EOD)
/**
 * Q1:
 * Create function to get the smallest value in the given string-array
 * 
 * let words = ['hApPY', 'gIFts', 'laUGhable', 'leARning', 'GrOW', 'coNNecT'];
 * 
 * let planets = ['earTh', 'meRCUrY', 'VeNUs', 'Mars']
 *
 */

let words = ['hApPY','gIFts','laUGhable', 'leARning','aTe', 'GrOW', 'coNNecT'];
let result = '';
smallestValue = words[0];  
     for (let i= 0; i <= words.length-1; i++) {  
        if(words[i] < smallestValue)
        smallestValue = words[i]; 
        result = smallestValue
        }  
      console.log(`smallest value in the given string-array-> ${result}`); 
    
      function smallestValueinStringArray(inputArray) {
        let smallestValue = inputArray[0];  
             for (let i= 0; i <= inputArray.length-1; i++) {  
                if(inputArray[i] < smallestValue)
                smallestValue = inputArray[i]; 
                result = smallestValue
                }  
             return smallestValue;
      }

let planets = ['earTh', 'meRCUrY', 'VeNUs', 'Mars']
console.log(`smallest value in the given string-array-> ${smallestValueinStringArray(['earTh', 'meRCUrY', 'VeNUs', 'Mars'])}`);


/**
 * Q2:
 * Create function to get the first value in the numbers-array greater than 10
 * 
 * [98, 34, 12, 1, 23, 43, 65, 43, 87, 17];         // 98
 * 
 * [1, 3, 3, 65, 43, 87, 17];                       // 65
 * 
 * [1, 3, 3, 6, 10, 7, 23, 1, 20];                  // 23
 * 
 */

let numbers = [1, 3, 3, 65, 43, 87, 17]; 
let firstValueGreaterThan10;  
    for (const num of numbers) {
        if (num > 10) {
        firstValueGreaterThan10 = num;
            break;
        }
     }
    console.log(`\nfirst value in the numbers-array greater than 10-> ${firstValueGreaterThan10 }`);
  
function firstValueGreaterThan (inputnum) {
    let firstValueGreaterThan10;  
    for (const num of inputnum) {
        if (num > 10) 
        firstValueGreaterThan10 = num;
        break;
        }
    return firstValueGreaterThan10;   
    }
    console.log(`first value in the numbers-array greater than 10-> ${firstValueGreaterThan([98, 34, 12, 1, 23, 43, 65, 43, 87, 17])}`);


/**
 * Q3:
 * Create function to get the minimum value in the given numbers-array
 * 
 * [98, 34, 12, 1, 23, 43, 65, 43, 87, 17];             // 1
 * 
 * [1, -3, 33, 65, 3, 87, 17];                          // 
 * 
 * [1, 23, 3, -6, 10, -7, 23, -1, 20];                  // -7
 * 
 */

let minNumbers = [98, 34, 12, 1, 23, 43, 65, 43, 87, 17]; 
    let min = Math.min(...minNumbers)
    console.log(`\nthe minimum value in the given numbers-array-> ${min}`);
    