// Single Responsibility Principle
// Function names should say what they do

// Bad
function processEmailUsers(users) {
    users.forEach(user => {
        const userRecord = database.lookup(user)
        if (userRecord.isEmailNotification()) {
            sendEmail(user)
        }
    });
}


// Good

// True or False
function isUserEmailNotification(user) {
    const userRecord = database.lookup(user);
    return userRecord.isEmailNotification()
}

function processEmailUsers(users) {
    users.filter(isUserEmailNotification)
        .forEach(sendEmail)
}
