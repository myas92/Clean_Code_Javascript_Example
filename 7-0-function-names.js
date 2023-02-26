// Function names should say what they do
// Functions should be an action (Not Email, Handle)
// Update, Delete, Add, Get, Is, Send, ...
// Max 3 arguments

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

