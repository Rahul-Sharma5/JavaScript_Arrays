//!    JavaScript Array Some & Every Methods


//! Array - Some() Function

var ages = [10, 13, 3, 20];

var b = ages.some(checkAdult);

function checkAdult(age) {
    return age >= 18;
}

console.log(b);




//! Array - every() Function

var ages2 = [10, 13, 3, 20];

var c = ages2.every(checkAdult);

function checkAdult2(age1) {
    return age1 >= 10;
}

console.log(c);