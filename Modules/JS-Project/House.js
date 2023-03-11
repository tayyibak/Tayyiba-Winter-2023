const moment = require("moment");

class House{ 
   
    static #houseIdCounter = 0;
    static #allHouseInfo =[]; 
    
    #houseInfo = {
        hName: 'Default Name',
        hId: 0,
        hCity: 'Default Name',
        hCurrentStatus: 'unlock/lock',
        hTotalMembers:  0,

    }
 
        constructor (houseName, cityName, totalMembers){
        if (houseName >= 0 ){ 
            console.log(`\nSorry your house cannot be registered at this time`);
                throw 'house name cannot only be a number(s) and/or be left blank'
            } else if (cityName >= 0) {
                console.log(`\nSorry your house cannot be registered at this time`);
                throw 'City name is invalid'
            } else if (totalMembers < 0) { 
                console.log(`\nSorry your house cannot be registered at this time`);
                throw 'Please enter the amount of total members that will be living in your house '
            }else {
            this.#houseInfo.hName = houseName;
            this.#houseInfo.hCity = cityName;
            this.#houseInfo.hTotalMembers = totalMembers;
            House.#houseIdCounter++;
            this.#houseInfo.hId = House.#houseIdCounter;
            House.#allHouseInfo.push(this.#houseInfo);
            console.log(`\nCongratulations you have successfully completed your registration for '${this.#houseInfo.hName}'`);
            console.log(`Your house id:  ${this.#houseInfo.hId}`);

            }
            
        }


        addMembers(numOfMembers) {
            if (!this.#houseInfo.hId) {
               console.log(`Sorry, this house is not registered. Can't add ${numOfMembers} members.`);
            }  else if (numOfMembers <= 0) {
               console.log('Number of members should be greater than 0.');
            }  else {
                this.#houseInfo.hTotalMembers += numOfMembers;
               console.log(`Added ${numOfMembers} members to the house.`);
            }
        
        }
        
        
        
        removeMembers(numOfMembers) {
         
            if (!this.#houseInfo.hId) {
               console.log(`Sorry, this house is not registered. Can't remove ${numOfMembers} members.`);
            }  else if (numOfMembers <= 0) {
               console.log('Number of members should be greater than 0.');
            }  else {
               this.#houseInfo.hTotalMembers -= numOfMembers;
               console.log(`Removed ${numOfMembers} members from the house.`);
            }
        
        }
        
        
        showTotalMembers() {
            console.log(`The number of total members are ${this.#houseInfo.hTotalMembers}.`);
        }
          
          
        
        
        
        

     clean(){
        console.log('The house is cleaned now');
     }




    


       unlock =()=> {
      
        if ( this.#houseInfo.hCurrentStatus.localeCompare('Unlock')===0) { 
           
         console.log( `${this.#houseInfo.hName} is already unlocked`);

           
        } else {
            this.#houseInfo.hCurrentStatus = ('Unlock')
            console.log( `${this.#houseInfo.hName} ${this.#houseInfo.hCurrentStatus} `);
    
    
        }
    
    } 




        lock =()=> {
      
        if ( this.#houseInfo.hCurrentStatus.localeCompare('locked')===0) { 
           
         console.log( `${this.#houseInfo.hName} is already locked`);

           
        } else {
            this.#houseInfo.hCurrentStatus = ('locked')

            console.log( `${this.#houseInfo.hName} ${this.#houseInfo.hCurrentStatus} `);
    
    
        }
    
    } 


       



     showHouseDetails() {
        console.log(`\nHouse Info:`);
        console.log(`Name : ${this.#houseInfo.hName}`);
        console.log(`Id : ${this.#houseInfo.hId}`);
        console.log(`City: ${this.#houseInfo.hCity}`);
        console.log(`Current status: ${this.#houseInfo.hCurrentStatus} `);
        console.log(`Total members: ${this.#houseInfo.hTotalMembers} `);
    }




    
    

}
    

      
        





module.exports= House;



    

