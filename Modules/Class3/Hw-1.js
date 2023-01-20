// F -> C
// T(°C) = (T(°F) - 32) / 1.8
let fTemp1 = 50;

let fTemp1IntoCTemp = (fTemp1 - 32) / 1.8
console.log(`\n${fTemp1}°F is equals to ${fTemp1IntoCTemp}°C`);

// F -> K
// T(K) = (T(°F) + 459.67)× 5/9
let fTemp1IntoKTemp = (fTemp1 + 459.67) * 5/9;
console.log(`${fTemp1}°F is equals to ${fTemp1IntoKTemp}°K`);


// C -> F
// T(°F) = T(°C) × 1.8 + 32

let cTemp1 = 33;

let cTemp1IntoFTemp = (cTemp1) * 1.8 + 32
console.log(`\n${cTemp1}°C is equal to ${cTemp1IntoFTemp}°F`);

// C -> K
// T(K) = T(°C) + 273.15

let cTemp2 = 45;

let cTemp2IntoKTemp = (cTemp2) + 273.15
console.log(`${cTemp2}°C is equal to ${cTemp2IntoKTemp}°K`);

// K -> F
// T(°F) = T(K) × 9/5 - 459.67

let kTemp1 = 20;

let kTemp1IntoFTemp = (kTemp1) * 9/5 - 459.67
console.log(`\n${kTemp1}°K is equal to ${kTemp1IntoFTemp}°F`);

// K -> C
// T(°C) = T(K) - 273.15

let kTemp2 = 7;

let kTemp2IntoCTemp = (kTemp2) - 273.15
console.log(`${kTemp2}°K is equal to ${kTemp2IntoCTemp}°C`);





/**
 * F -> C done
 * F -> K done
 * 
 * C -> F done
 * C -> K done
 * 
 * K -> F done
 * K -> C
 * 
 * For formulas:
 * https://www.rapidtables.com/convert/temperature/fahrenheit-to-celsius.html
 * 
 * Due date: Fri (20-Jan)
 */