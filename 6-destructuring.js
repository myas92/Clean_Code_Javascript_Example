// Destructuring Assignment

/**
 * The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values 
 * from arrays, or properties from objects, into distinct variables.
 */
/**
 * req.body, req,params, req.query
 */


// Bad
const car = {
    id: 1,
    brand: 'bmw',
    model: 'i8',
    price: '147000',
}

const id = car.id;
const brand = car.brand;
const model = car.model;
const price = car.price;

// Good

const car = {
    id: 1,
    brand: 'bmw',
    model: 'i8',
    price: '147000',
}
const { id, brand, model, price } = car;

// *********************** Example ************************************

// Bad

const rangePrices = [100, 200]
const minPrice = rangePrices[0];
const maxPrice = rangePrices[1];

// Good
const rangePrices = [100, 200]
const [minPrice, maxPrice] = rangePrices