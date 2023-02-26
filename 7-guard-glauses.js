// Guard Glasses


// Bad
const sendEmail = (to, subject, body) => {
    if (to) {
        // send email
    } else {
        return 'Please Enter a Recipient'
    }
}

// 1: Good
const sendEmail = ({ to, subject, body }) => {
    if (to) {
        // send email
    } else {
        return 'Please Enter a Recipient'
    }
}

sendEmail({
    to: 'yaser@gmai.com',
    subject: 'This is my Email',
    body: 'HELP'
})





// 2: Cleaner
const sendEmail = ( {to, subject, body} ) => {
    if (!to) return 'Please Enter a Recipient'
    // send email
}