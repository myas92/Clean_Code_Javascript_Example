// Optional Chaining

// Bad
const street = person && person.address && person.address.street;


// Good
const street = person?.address?.street;

