
/**
 * Question-1:
 * 
 * if the length of sentence1 is greater than 100 OR sentence1 starts with "go to"
 *      assign 25 into result1
 * otherwise
 *      assign 35 into result1
 * 
 * Hint: Ternary operator
 * 
 */

 let sentence1 = 'Go to NBCNews.com for breaking news, videos, and the latest top stories in world news, business, politics, health and pop culture.';

 console.log(`\nsentence -> ${sentence1}`);
 let sentenceLength = sentence1.length;
 console.log(`sentence length is ${sentenceLength}`);  

  //greater than 100
 result1 = sentence1.length > 100 ? 25 : 35;
  console.log(`result1 -> ${result1}`);

  // less than 100
 let result2 = sentence1.length < 100 ? 25 : 35;
 console.log(`result2 -> ${result2}`);



 
