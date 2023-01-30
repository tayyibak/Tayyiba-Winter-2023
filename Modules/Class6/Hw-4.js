// Due date: Jan 30 (eod)

/**
 * Q1: Find if the user has provided only first name and last Name
 * 
 * userName1 = 'John Gig'            ->      true
 * userName1 = 'John Gig Hiyti'      ->      false
 * userName1 = 'John'                ->      false
 * userName1 = ''                    ->      false
 */
 
userName1 = 'John Gig'
 let includes_userName1 = userName1.includes('John Gig');
 console.log(`Find if the user has provided only first name and last Name -> ${includes_userName1 }`); 

 userName1 = 'John Gig' 
 let includes_userNam1 = userName1.includes('John Gig Hiyti');
 console.log(`Find if the user has provided only first name and last Name -> ${includes_userNam1 }`); 

 userName1 = '' 
 let includes_userNam = userName1.includes('John Gig');
 console.log(`Find if the user has provided only first name and last Name -> ${includes_userNam }`); 

 userName1 = 'John Gig' 
 let endsWith_user1 = userName1.endsWith('John');
 console.log(`iFind if the user has provided only first name and last Name -> -> ${endsWith_user1}`);   
 




 /**
  * Q2: Create abbreviation for a 4-word sentence
  * 
  * sentence2 = "Good morning to You"     ->      GMTY
  * sentence2 = "you NEVEr waLK aLOne"    ->      YNWA
  * sentence2 = "have A great day"        ->      HAGD
  * 
  */
 let sentence2 = 'you NEVEr waLK aLOne'
 sentence2ToUpperCase = sentence2.toUpperCase();
 sentence2Array = sentence2ToUpperCase.split(' ');
 console.log(`\nyou NEVEr waLK aLOne-> ${sentence2Array}`);

 sentence2Array[0] = sentence2Array[0].substring(0,1).toUpperCase();
 sentence2Array[1] = sentence2Array[1].substring(0,1).toUpperCase();
 sentence2Array[2] = sentence2Array[2].substring(0,1).toUpperCase();
 sentence2Array[3] = sentence2Array[3].substring(0,1).toUpperCase();
 console.log(`you NEVEr waLK aLOne-> ${ sentence2Array}`);
 sentence2Array= sentence2Array[0]+sentence2Array[1]+ sentence2Array[2]+sentence2Array[3];
 console.log(`abbr-> ${ sentence2Array}`);
 
 //

 sentence2 = 'Good morning to You'
 sentence2ToUpperCase = sentence2.toUpperCase();
 sentence2Array = sentence2ToUpperCase.split(' ');
 console.log(`\nGood morning to You-> ${sentence2Array}`);

 sentence2Array[0] = sentence2Array[0].substring(0,1).toUpperCase();
 sentence2Array[1] = sentence2Array[1].substring(0,1).toUpperCase();
 sentence2Array[2] = sentence2Array[2].substring(0,1).toUpperCase();
 sentence2Array[3] = sentence2Array[3].substring(0,1).toUpperCase();
 console.log(`Good morning to You-> ${ sentence2Array}`);
 sentence2Array= sentence2Array[0]+sentence2Array[1]+ sentence2Array[2]+sentence2Array[3];
 console.log(`abbr -> ${ sentence2Array}`);
 
//

sentence2 = 'have A great day'
 sentence2ToUpperCase = sentence2.toUpperCase();
 sentence2Array = sentence2ToUpperCase.split(' ');
 console.log(`\nhave A great day-> ${sentence2Array}`);

 sentence2Array[0] = sentence2Array[0].substring(0,1).toUpperCase();
 sentence2Array[1] = sentence2Array[1].substring(0,1).toUpperCase();
 sentence2Array[2] = sentence2Array[2].substring(0,1).toUpperCase();
 sentence2Array[3] = sentence2Array[3].substring(0,1).toUpperCase();
 console.log(`have A great day-> ${ sentence2Array}`);
 sentence2Array= sentence2Array[0]+sentence2Array[1]+ sentence2Array[2]+sentence2Array[3];
 console.log(`abbr -> ${ sentence2Array}`);

 
 /**
  * Q3: Count the number of words in the sentence
  */
 let sentence3 = 'CompreheNSIVe UP-to-DATE neWs CoverAgE, aggRegateD frOM soURCeS alL oVeR tHE wORld by GOOgle NeWs.';
 let sentence3split = sentence3.split(' '); 
 console.log(sentence3split);
 let scentence3LengthSplit = sentence3split.length;
 console.log(`Count the number of words in the sentence -> ${scentence3LengthSplit}`);
 
