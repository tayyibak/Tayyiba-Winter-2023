const moment = require("moment");

class Restaurant{ 
   
    static #restaurantIdCounter = 0;
    static #allResturantInfo =[]; 
    
    #restaurantInfo = {
        rName: 'Default Name',
        rId: 0,
        rCity: 'Default Name',
        rCurrentStatus: '',
        rTotalGuestsNow:  0,
        rGuestsCapacity: 0,
        rTotalemployees: 0,

 }



 constructor (resturantName, cityName, maxGuestsCapacity, employees){
    if (resturantName >= 0 ){ 
        console.log(`\nSorry your resturant cannot be registered at this time`);
        throw 'Resturant name cannot only be a number(s) and/or be left blank'
     } else if (cityName >= 0) {
        console.log(`\nSorry your resturant cannot be registered at this time`);
        throw 'City name is invalid'
     } else if (maxGuestsCapacity < 0) { 
        console.log(`\nSorry your resturant cannot be registered at this time`);
        throw 'Please enter your resturants guests capacity'
     } else if (employees < 0) { 
        console.log(`\nSorry your resturant cannot be registered at this time`);
        throw 'Please enter the amount of employees that you will be hiring '
        }else {
        this.#restaurantInfo.rName = resturantName;
        this.#restaurantInfo.rCity = cityName;
        this.#restaurantInfo.rGuestsCapacity = maxGuestsCapacity;
        this.#restaurantInfo.rTotalemployees = employees;
        Restaurant.#restaurantIdCounter++;
        this.#restaurantInfo.rId = Restaurant.#restaurantIdCounter;
        Restaurant.#allResturantInfo.push(this.#restaurantInfo);
        console.log(`\nCongratulations you have successfully completed your registration for '${this.#restaurantInfo.rName}'`);
        console.log(`Your resturant id:  ${this.#restaurantInfo.rId}`);
    
        }

}



clean(){
    console.log('The restaurant is cleaned now');
 }

 



    open =()=> {
      
      if ( this.#restaurantInfo.rCurrentStatus.localeCompare('open')===0) { 
         
       console.log( `${this.#restaurantInfo.rName} is already open`);

      
      } else {
        this.#restaurantInfo.rCurrentStatus = ('open')
          console.log( `${this.#restaurantInfo.rName} ${this.#restaurantInfo.rCurrentStatus} `);
  
  
      }
  
  } 




      close =()=> {
    
      if ( this.#restaurantInfo.rCurrentStatus.localeCompare('close')===0) { 
         
       console.log( `${this.#restaurantInfo.rName} is already closed`);

         
      } else {
          this.#restaurantInfo.rCurrentStatus = ('close')

          console.log( `${this.#restaurantInfo.rName} ${this.#restaurantInfo.rCurrentStatus} `);
  
  
      }
  
  } 




 addGuest(guestName, partySize) {

    if (this.#restaurantInfo.rCurrentStatus.localeCompare('open') !== 0)  {

      console.log(`Sorry, ${this.#restaurantInfo.rName} is currently closed. Can't add guests.`);

    } else if (partySize <= 0) {

      console.log('Party size should be greater than 0.');

    } else if (this.#restaurantInfo.rTotalGuestsNow + partySize <= this.#restaurantInfo.rGuestsCapacity ) {

      this.#restaurantInfo.rTotalGuestsNow += partySize;

      console.log(`Added ${guestName} and their party of ${partySize} to the restaurant.`);

    } else {

      console.log(`Sorry, there isn't enough capacity to add ${guestName} and their party of ${partySize}.`);

    }

} 



removeGuest(guestName, partySize) {

    if (this.rCurrentStatus.localeCompare('open') !== 0)  {

        console.log(`${this.#restaurantInfo.rName} is currently closed. Can't remove guests.`);

    } else if (partySize <= 0) {

        console.log('Party size should be greater than 0.');

    } else if (this.#restaurantInfo.rTotalGuestsNow  - partySize >= 0) {

        this.#restaurantInfo.rTotalGuestsNow -= partySize;

        console.log(`Removed ${guestName} and their party of ${partySize} from the restaurant.`);

    } else {

        console.log(`Can't remove ${partySize} guests. There are only ${this.#restaurantInfo.rTotalGuestsNow} guests.`);

    }

}




    showCurrentGuestCount() {

    console.log(`Current guest count is ${this.#restaurantInfo.rTotalGuestsNow}.`);

    }



    

     addEmployee(employee) {

       if (employee > 0 ) { 
    
         this.#restaurantInfo.rTotalemployees += employee;
    
          console.log(` ${employee} hired to the restaurant.`);
    
        } else {
    
          console.log(`Please add number greater than 0.`);
    
        }
    
    } 


    removeEmployee(employee) {

        if (employee > 0 ) { 
     
          this.#restaurantInfo.rTotalemployees -= employee;
     
           console.log(` ${employee} fired to the restaurant.`);
     
         } else {
     
           console.log(`Please add number greater than 0.`);
     
         }
     
     } 
 




    showTotalEmployees(){

        {this.#restaurantInfo.rTotalemployees}

        console.log( ` ${this.#restaurantInfo.rTotalemployees}`);

    }

     

     
            
   showRestaurantDetails() {
     console.log(`\nRestaurant Info:`);
     console.log(`Name : ${this.#restaurantInfo.rName}`);
     console.log(`Id : ${this.#restaurantInfo.rId}`);
     console.log(`City: ${this.#restaurantInfo.rCity}`);
     console.log(`Current status: ${this.#restaurantInfo.rCurrentStatus} `);
     console.log(`Total guests sitting as of now: ${this.#restaurantInfo.rTotalGuestsNow}`); 
     console.log(`Guests capacity: ${this.#restaurantInfo.rGuestsCapacity}`);
     console.log(`Total employees: ${this.#restaurantInfo.rTotalemployees} `);
     
    
    
 
    
    
    
    }




    



}



module.exports = Restaurant;