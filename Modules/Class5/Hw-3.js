/**
 * Due date: Jan-26 (Eod)
 */

 const sentence1 = 'CompreheNSIVe UP-to-DATE neWs CoverAgE, aggRegateD frOM soURCeS alL oVeR tHE wORld by GOOgle NeWs.';
 /**
  * Q1: Replace all occurrences of A (ignoring cases) with 'Queen and King'
  */
  console.log(`\nsentence1 -> ${sentence1}`);
  let sentence1Replace_A = sentence1.replace( /A/ig, 'Queen and King');
 console.log(`sentence1 after replace 'A' with 'Queen and King' -> ${sentence1Replace_A}`);
 
 
 
 
 const sentence2 = 'CompreheNSIVe UP-to-DATE neWs CoverAgE, aggRegateD frOM soURCeS alL oVeR tHE wORld by GOOgle NeWs.';
 //Q1. length of sentence2-String    
 console.log(`\nsentence2 -> ${sentence2}`);
 let sentence2Length = sentence2.length;
 console.log(`sentence2 length is ${sentence2Length}`);


//Q2. does sentence2 start with 'COM' (ignoring cases) 
 console.log('\nChecking toUpperCase()');
 console.log(`sentence2 -> ${sentence2}`);
 sentence2Uppercase = sentence2.toUpperCase();   
 console.log(`\nsentence2 -> ${sentence2}`);
 console.log(`sentence2Uppercase -> ${sentence2Uppercase}`);
 
 
 console.log('\nChecking startsWith()');
 console.log(`sentenc2eUppercase -> ${sentence2Uppercase}`);
 
 let isStartsWith_COM = sentence2Uppercase.startsWith('COM');
 console.log(`\nis sentence2Uppercase start with "COM" -> ${isStartsWith_COM}`);
 

 //Q3. does sentence2 endsWith 'Google news' (ignoring cases) 
 //'CompreheNSIVe UP-to-DATE neWs CoverAgE, aggRegateD frOM soURCeS alL oVeR tHE wORld by GOOgle NeWs.';
 console.log(`\nsentence2 -> ${sentence2}`);
 sentence2_GOOgle_Google = sentence2.replace(/GOOgle NeWs/i, 'Google news');                         
 console.log(`\nsentence after replace /GOOgle NeWs/i with 'Google news' -> ${sentence2_GOOgle_Google}`);
  
 let endsWith_Google_news = sentence2_GOOgle_Google.endsWith('Google news.');
 console.log(`is sentence2 end with "Google news." -> ${endsWith_Google_news}`); 



 //Q4. does word 'from' present only once in sentence2 (ignoring cases)  
 console.log('\nChecking toLowerCase()');
 let sentence2Lowercase = sentence2.toLowerCase();
 console.log(`\nsentence2 -> ${sentence2}`);
 console.log(`sentence2Lowercase -> ${sentence2Lowercase}`);

 let includes_from = sentence2Lowercase.includes('from');
 console.log(`\nis sentence2 include "from" -> ${includes_from}`); 
 

 //Q5. the character present at second-last index in the String

 let lIndex = sentence2.length - 1;
 let charAtLastIndex = sentence2.charAt(lIndex);
 console.log(`\nCharacter present at the LAST-index of the String -> ${charAtLastIndex}`);
 


 /**
  * Q2: print the result of following in console:
  * 1. length of sentence2-String                        -> done
  * 2. does sentence2 start with 'COM' (ignoring cases)  -> done                -> boolean
  * 3. does sentence2 endsWith 'Google news' (ignoring cases)  -> done                 -> boolean
  * 4. does word 'from' present only once in sentence2 (ignoring case)  ->done   -> boolean
  * 5. the character present at second-last index in the String -> done 
  */

 
 
 /**
  * localeCompare
  * substring/slice
  * split
  */