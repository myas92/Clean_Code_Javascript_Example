// Default Arguments


// Bad
function favoriteColor(color) {
    let selectedColor = color || "blue"
    //
    return selectedColor;
}
console.log(favoriteColor("red"))


// Good

function favoriteColor(color = "blue") {
    //
    return color;
}
console.log(favoriteColor("red"));