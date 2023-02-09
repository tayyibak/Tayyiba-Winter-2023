// Due date: Feb-9 (Eod)

/**
 * Q1:
 * Convert any given sentence into Titlecase
 * 
 * 'have a great day'   ->  'Have A Great Day'
 * 'YOu ONlY lIVe ONcE' ->  'You Only Live Once'
 * 'gooD mORNIng' -> 'Good Morning'
 * 'apple banana cherry' -> 'Apple Banana Cherry'
 * 'heLlO deAR, haVE a great DAy tO yOu' -> 'Hello Dear, Have A Great Day To You'
 * 'qUEen' -> 'Queen'
 * 
 */
 const str1 = 'heLlO deAR, haVE a great DAy tO yOu';
 let titleCaseStr1 = '';             // final answer must be in the variable
 // code
 let str1LowerCase = str1.toLowerCase();
 titleCaseStr1 = str1LowerCase.split(' ');

 titleCaseStr1[0] = titleCaseStr1[0].substring(0,1).toUpperCase() + titleCaseStr1[0].substring(1);       
 titleCaseStr1[1] = titleCaseStr1[1].substring(0,1).toUpperCase() + titleCaseStr1[1].substring(1);        
 titleCaseStr1[2] = titleCaseStr1[2].substring(0,1).toUpperCase() + titleCaseStr1[2].substring(1); 
 titleCaseStr1[3] = titleCaseStr1[3].substring(0,1).toUpperCase() + titleCaseStr1[3].substring(1);
 titleCaseStr1[4] = titleCaseStr1[4].substring(0,1).toUpperCase() + titleCaseStr1[4].substring(1);
 titleCaseStr1[5] = titleCaseStr1[5].substring(0,1).toUpperCase() + titleCaseStr1[5].substring(1);
 titleCaseStr1[6] = titleCaseStr1[6].substring(0,1).toUpperCase() + titleCaseStr1[6].substring(1);
 titleCaseStr1[7] = titleCaseStr1[7].substring(0,1).toUpperCase() + titleCaseStr1[7].substring(1);
 titleCaseStr1 = titleCaseStr1[0].concat(' ', titleCaseStr1[1], ' ', titleCaseStr1[2], ' ', titleCaseStr1[3], ' ', titleCaseStr1[4], ' ', titleCaseStr1[5],' ', titleCaseStr1[6],' ', titleCaseStr1[7] );

 console.log('\nQ1');
 console.log(str1);                  
 console.log(titleCaseStr1);         


 /**
  * Q2:
  * Reverse a String (word by word)
  * 
  * 'have a great day'   ->  'day great a have'
  * 'good morning'   -> 'morning good'
  * 'hello dear how are you doing' -> 'doing you are how dear hello'
  * 'Learn' -> 'Learn'
  * 
  */
 const str2 = 'have a great day';
 let reverseStr2 = '';           
 // code
 str2Split = str2.split(' ');
 reverseStr2 = str2Split.reverse();
 Str2join = str2Split.join(' ')
 str2Split = str2Split.toString();
 reverseStr2 = str2Split.replace(/,/ig, ' ')
 
 console.log('\nQ2');
 console.log(str2);             
 console.log(reverseStr2);       
 

 /**
  * Q3:
  * Find the average of the given array:
  * 
  * avg = totalOfValues/numberOfValues
  * 
  * [1, 2, 3, 4, 5] -> 15/5 -> 3
  * [1, 1, 1, 2, 3, 1, 2] -> 11/7 -> 1.xx
  * [1, -1] -> 0/2 -> 0
  */
 const arr3 = [1, 2, 3, 4, 5];
 let avg;                // final answer must be in the variable
 // code
 let totalOfValues, numberOfValues;
 totalOfValues = 15;
 numberOfValues = 5;
 avg = (totalOfValues/numberOfValues);
  
 console.log('\nQ3');
 console.log(arr3);    
 console.log(`avg-> ${avg}`);       
 
 
 /**
  * Q4:
  * Create abbreviation for a given sentence.
  *
  * 'have a great day'   ->  'HAGD'
  * 'YOu lIVe ONlY ONcE' ->  'YLOO'
  * 'gooD mORNIng' -> 'GM'
  * 'aPPlE bANAna chErRY' -> 'ABC'
  * 'heLlO deAR, haVE a great DAy tO yOu' -> 'HDHAGDTY'
  * 'qUEen' -> 'Q'
  */
 const str4 = 'have a great day';
 let abbr = '';              // final answer must be in the variable
 // code
 str4ToUpperCase = str4.toUpperCase();
 abbr = str4ToUpperCase.split(' ');

 abbr[0] = abbr[0].substring(0,1).toUpperCase();
 abbr[1] = abbr[1].substring(0,1).toUpperCase();
 abbr[2] = abbr[2].substring(0,1).toUpperCase();
 abbr[3] = abbr[3].substring(0,1).toUpperCase();
 abbr= abbr[0]+ abbr[1]+ abbr[2]+ abbr[3];
 
 console.log('\nQ4')
 console.log(str4);         
 console.log(abbr);          
 
 
 /**
  * Q5:
  * Convert all string values in the given array into Uppercase
  * 
  * ['earTh', 'Mars', 'JUPiTer']     ->      ['EARTH', 'MARS', 'JUPITER']
  * ['earTh', 'JUPiTer']     ->      ['EARTH', 'JUPITER']
  * ['earTh', 'meRCUrY', 'VeNUs', 'Mars', 'JUPiTer']     ->      ['EARTH', 'MERCURY', 'VENUS', 'MARS', 'JUPITER']
  * 
  * 
  * Note: final answer must be in the SAME variable (arr5)
  */
 let arr5 = ['earTh', 'meRCUrY', 'VeNUs', 'Mars', 'JUPiTer'];
 console.log('\nQ5')
 console.log(arr5);      // ['earTh', 'meRCUrY', 'VeNUs', 'Mars', 'JUPiTer']
 // code

 arr5String = arr5.toString();
 arr5Upper = arr5String.toUpperCase();
 arr5 = arr5Upper.toUpperCase();
 arr5 = arr5Upper.split(',');
 console.log(arr5);      // ['EARTH', 'MERCURY', 'VENUS', 'MARS', 'JUPITER']