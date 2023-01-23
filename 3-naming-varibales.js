// Variables
// Naming Variables

/**
 * Use meaningful and pronounceable variable names
 * Use the same vocabulary for the same type of variable
 * Use searchable names
 */



// Bad
setTimeout(doSomething, 86400000);

// Good
// Declare them as capitalized named constants.
const MILLISECONDS_PER_DAY = 60 * 60 * 24 * 1000; //86400000;

setTimeout(doSomething, MILLISECONDS_PER_DAY);
// ***********************************************************************



// Bad
let ca = 5;
let y = new Date().getFullYear();
const yyyymmdstr = moment().format("YYYY/MM/DD");
let fs;
if (cart.total > 5) {
    fs = true;
}


// Good
const FREE_SHIPPING_MIN_PRICE = 50;
let daysCartActive = 5;
let currentYear = new Date().getFullYear();
const currentDate = moment().format("YYYY/MM/DD");
let freeShipping;
const isFreeShipping = cart.total > FREE_SHIPPING_MIN_PRICE; 

// ***********************************************************************