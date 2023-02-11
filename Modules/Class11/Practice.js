let employee101 = {
    name : 'John Doe',
    age : 25,
    liveInState : 'NJ',
    gender : 'M',
    department : 'Finance',
    salary : 250000,
    firstJob : false,
    pastJob : {
        past1: 'ABC',
        past2: 'XYZ',
        past3: 'DEF'
    },
    skills : ['Finance101', 'Marketing', 'Finance102', 'Finance103']
};
/**
 * find how many attributes in the employe101 has length>7
 */
let count = 0
for (let attr in employee101) {
   if (attr.length>7) {
    count++
   }  

}
console.log(`\nfind how many attributes in the employe101 has length>7-> ${count}`);

/**
 * find how many attributes in the employe101 has number as value
 */

 let count1 = 0;
 for (const attr in employee101) {
    if (typeof employee101[attr] === 'number') {
        count1++;
    }  
 
 }
 console.log(`\nfind how many attributes in the employe101 has number as value-> ${count1}`);
