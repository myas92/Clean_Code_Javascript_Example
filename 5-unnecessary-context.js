// Don't Add Unnecessary Context
// If your class/object name tells you something, don't repeat that in your variable name.


// bad
const ticket = {
    ticketId: 1,
    ticketTitle: 'Concert',
    ticketPrice: 100,
    ticketStatus: 'Pending'
}

console.log(ticket.ticketId);
console.log(ticket.ticketTitle);

// Good
const ticket = {
    id: 1,
    title: 'Concert',
    price: 100,
    status: 'Pending'
}

console.log(ticket.id);
console.log(ticket.title)