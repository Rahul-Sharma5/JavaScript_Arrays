//! JavaScript Array find & findIndex  



// Array Find() Methods

var ages = [10, 23, 19, 20]

var b = ages.find(checkAdult);

function checkAdult(age) {
    return age >= 18;
}

console.log(b);



//! FindIndex() Methods
// findindex() method returns the index of the first element in an array that pass a test


var ages2 = [10, 13, 3, 20];

var c = ages2.findIndex(checkAdult);

function checkAdult2(age1) {
    return age1 >= 18;
}

console.log(c);