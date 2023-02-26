// Function names should say what they do
// Functions should be an action
// Update, Delete, Add, Get, Is, Send, ...


// Bad
function addToDate(date, month) {
    // ...
}

const date = new Date();

addToDate(date, 1);


// Good 
function addMonthToDate(month, date) {
    // ...
}

const date = new Date();
addMonthToDate(1, date);

