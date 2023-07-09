//! JavaScript Map Method

var a = [1, 3, 8, 5, 10];

var b = a.map(test);

function test(c) {
    return c * 10;
}

console.log(b);


// Array of Object

var ary = [
    { fname: "Ram", lname: "Kumar" },
    { fname: "Rahul", lname: "Sharma" },
    { fname: "Aniket", lname: "Kumar" }
];

var newAry = ary.map(fcall);

function fcall(x) {
    return x.fname + " " + x.lname;
}

console.log(newAry);