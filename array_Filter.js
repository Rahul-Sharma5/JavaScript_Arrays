//!   JavaScript Array Filter
// filter method creates an array filled with all array element that pass a test

var ages = [10, 20, 9, 25]

var b = ages.filter(checkAdult);

function checkAdult(age) {
    return age >= 18;
}

console.log(b);



