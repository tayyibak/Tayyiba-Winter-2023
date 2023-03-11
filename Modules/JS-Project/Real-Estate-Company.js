
const Restaurant = require("./Restaurant");
const House = require("./House");

let h1;
h1 = new House('Joes','Brooklyn',10)
h1.unlock();
h1.showHouseDetails();
h1.unlock();
h1.lock();
h1.showHouseDetails();
h1.lock();





let r1;
r1 = new Restaurant('Burger King','Brooklyn', 100, 50)
r1.open();
r1.showRestaurantDetails();
r1.open();
r1.close();
r1.showRestaurantDetails();
r1.close();


