// Due date: Feb-4 (eod)

/**
 * Q1:
 * create a variable myNumber and assign any (numeric) value to it.
 * 
 * if myNumber-value is divisible by 5, print 'divisible by 5'
 * if myNumber-value is divisible by 3, print 'divisible by 3'
 * if myNumber-value is divisible by 5 and 3, print 'divisible by 5 and 3'
 * if myNumber-value is NOT divisible by 5 or 3, print the value of myNumber
 * 
 * myNumber = 17
 * 
 */
 let myNumber = 9;
 
 if (myNumber%5 === 0 && myNumber%3 === 0) {
     console.log('divisible by 5 and 3');
 } else if (myNumber%5 === 0) {
     console.log('divisible by 5'); 
 } else if (myNumber%3 === 0) {
     console.log('divisible by 3'); 
 } else {
     console.log(myNumber);
 }

 
 myNumber = 15;
 
 if (myNumber%5 === 0 && myNumber%3 === 0) {
     console.log('divisible by 5 and 3');
 } else if (myNumber%5 === 0) {
     console.log('divisible by 5'); 
 } else if (myNumber%3 === 0) {
     console.log('divisible by 3'); 
 } else {
     console.log(myNumber);
 }
 
 myNumber = 10;
 
 if (myNumber%5 === 0 && myNumber%3 === 0) {
     console.log('divisible by 5 and 3');
 } else if (myNumber%5 === 0) {
     console.log('divisible by 5'); 
 } else if (myNumber%3 === 0) {
     console.log('divisible by 3'); 
 } else {
     console.log(myNumber);
 }




/**
 * Q2:
 * const sports = ['Basketball', 'Football', 'Rugby', 'Swimming', 'Soccer', 'Baseball'];
 * 
 * if Basketball is present at index-2 (ignoring cases), Print 'Basketball is present at index-2
 * if Baseketball is not present at index-2 (ignoring cases), print 'Basketball is not present at index-2'
 * if Basketball is not present in the array, replace, index-2-value with 'Basketball; and print sports-array
 * 
 * 
 */

 const sports = ['Basketball', 'Football', 'Rugby', 'Swimming', 'Soccer', 'Baseball'];
 console.log(`sports -> ${sports}`);
 
 if (!(sports.includes('Basketball'))) {          
     sports.fill('Basketball', 2, 3);
     console.log(sports);
 } else {
     if (sports[2].toLowerCase().localeCompare('basketball') === 0) {
         console.log('Basketball is present at index-2');
     } else {
         console.log('Basketball is NOT present at index-2');
     }
 }



/**
 * Q3:
 * const planets = ['MarS', 'MerCUrY', 'MaRS', 'JuPITer'];
 * 
 * if the 'Earth' (ignoring cases) is present as the first-element in the array, print "Earth is present at the correct place"
 * otherwise, Add 'Earth' as the first-element in the array; then print the planets-array
 * 
 */

 const planets = ['MarS', 'MerCUrY', 'MaRS', 'JuPITer'];
 console.log(`planets -> ${planets}`);
 if (planets[0].localeCompare('Earth') === 0) {
     console.log('Earth is present at the correct place')
 } else {
     planets.unshift('Earth');
     console.log(planets);
 }