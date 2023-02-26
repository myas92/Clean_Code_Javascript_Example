// Default Arguments


// Bad
function getFavoriteColor(color) {
    let selectedColor = color || "blue"
    //
    return selectedColor;
}
console.log(getFavoriteColor("red"))


// Good

function getFavoriteColor(color = "blue") {
    //
    return color;
}
console.log(getFavoriteColor("red"));