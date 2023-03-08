
const moment = require("moment");

class Restaurant{ 
   
    static #restaurantIdCounter = 0;
    static #allResturantInfo =[]; 
    
    #restaurantInfo = {
        rName: 'Default Name',
        rId: 0,
        rCity: 'Default Name',
        rCurrentStatus: 'open/close',
        rTotalGuestsNow:  0,
        rGuestsCapacity: 0,
        rTotalEmployees: 0,

}
    
constructor (resturantName, cityName, maxGuestsCapacity, employees){
    if (resturantName >= 0 ){ 
    console.log(`\nSorry your resturant can not be registered at this time`);
        throw 'Resturant name cannot only be a number(s) and/or be left blank'
    } else if (cityName >= 0) {
        console.log(`\nSorry your resturant can not be registered at this time`);
        throw 'City name is invalid'
    }else {
    this.#restaurantInfo.rName = resturantName;
    this.#restaurantInfo.rCity = cityName;
    this.#restaurantInfo.rGuestsCapacity = maxGuestsCapacity;
    this.#restaurantInfo.rTotalEmployees = employees;
    Restaurant.#restaurantIdCounter++;
    this.#restaurantInfo.rId = Restaurant.#restaurantIdCounter;
    console.log(`\nCongratulations you have successfully completed your registration for '${this.#restaurantInfo.rName}'`);
    console.log(`Your resturant id:  ${this.#restaurantInfo.rId}`);
  
    }

    }


clean(){
    console.log('The restaurant is cleaned now');
}



addGuest(guestName, partySize) {
    if (!this.openResturant) {
      console.log(`Sorry, ${this.#restaurantInfo.rName} is currently closed.`);
    } else if (this.#restaurantInfo.rTotalGuestsNow + partySize <= this.#restaurantInfo.rGuestsCapacity) {
      this.#restaurantInfo.rTotalGuestsNow += partySize;
      console.log(`Added ${guestName} and their party of ${partySize} to the restaurant.`);
    } else {
      console.log(`Sorry, there isn't enough capacity to add ${guestName} and their party of ${partySize}.`);
    }
}
  
removeGuest(guestName, partySize) {
    if (!this.openResturant) {
        console.log(`${this.#restaurantInfo.rName} is currently closed. Can't remove guests.`);
    } else if (this.#restaurantInfo.rTotalGuestsNow - partySize >= 0) {
        this.#restaurantInfo.rTotalGuestsNow -= partySize;
        console.log(`Removed ${guestName} and their party of ${partySize} from the restaurant.`);
    } else {
        console.log(`Can't remove ${partySize} guests. There are only ${this.#restaurantInfo.rTotalGuestsNow} guests.`);
    }
}
  
showCurrentGuestCount() {
    console.log(`Current guest count is ${this.#restaurantInfo.rTotalGuestsNow}.`);
}

showRestaurantDetails() {
    console.log(`\nRestaurant Info:`);
    console.log(`Name : ${this.#restaurantInfo.rName}`);
    console.log(`Id : ${this.#restaurantInfo.rId}`);
    console.log(`City: ${this.#restaurantInfo.rCity}`);
    console.log(`Current status:   `);
    console.log(`Total guests sitting as of now: ${this.#restaurantInfo.rTotalGuestsNow}`); 
    console.log(`Guests capacity: ${this.#restaurantInfo.rGuestsCapacity}`);
    console.log(`Total employees: ${this.#restaurantInfo.rTotalEmployees} `);
}


 openResturant=()=> {
const currTime = moment();
const currTimeH = currTime.format('h:mma');
const a = moment().hour('10').minutes('00');
const b = moment().hour('22').minutes('00');
console.log("\n Resturant Hours : 10:00am - 10:00pm ");
console.log(" \n Current Time Is : " + currTimeH +"\n");
const isBetweenOpeningHrs = currTime.isBetween(a, b);
 

if (isBetweenOpeningHrs==true){
    console.log("\n *** Already Open *** \n");
}
else 
           
    console.log("\n Opening \n");
}
 
closeResturant=() => {
const currTime = moment();
const currTimeH = currTime.format('h:mma');   
const a = moment().hour('10').minutes('00');
const b = moment().hour('22').minutes('00');

console.log("\n Resturant Hours : 10:00am - 10:00pm ");
console.log(" \n Current Time Is : " + currTimeH +"\n");
const isBetweenClosingHrs = currTime.isBetween(a, b);

if (isBetweenClosingHrs==false){
    console.log("\n *** Already Closed *** \n");
}
else
        
    console.log("\n Closing \n")
}









}

module.exports = Restaurant;