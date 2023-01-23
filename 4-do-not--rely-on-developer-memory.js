// Don't Rely on Developer Memory

// Avoid Mental Mapping
// Explicit is better than implicit.
// Don't use el, element, item , etc

const books = ['book 1', 'book 2', 'book 3'];

// Bad
books.forEach(b =>{
    // do stuff
    // ...
    // ...
    // ...
    // What is `b` for?
    read(b);
})

// Good
books.forEach(b =>{
    // do stuff
    // ...
    // ...
    // ...
    // What is `b` for?
    read(b);
})

// ************************************