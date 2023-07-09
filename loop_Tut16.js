//! Types Of Loop In Javascript

//(1) while loop
//(2) do/while loop
//(3) for loop
//(4) forEach
//(5) for/in loop

//! (1) while Loop in JavaScript 

var c = 1;

while (c <= 10) {
    console.log(c + ") " + "this is while loop")
    c = c + 1;
}




//! (2) do/while Loop in JavaScript

var d = 1;

do {
    console.log(d + ") " + "this is do/while loop");
    d = d + 1;
} while (d <= 10);


//! (3) For Loop in JavaScript 

var e = 1;

for (e = 1; e <= 10; e++) {
    console.log(e + ") " + "this is For loop")
    //e = e + 1;
}




//! (4) forEach (ARRAYS) Loop in JavaScript 

var a = ["Ram", "Shyam", "Rohan", "Aniket"];

var b = a.forEach(element);

function element(value, index) {
    console.log(value);
    //console.log(index);
}



//! (5) for/in (OBJECTS) Loop in JavaScript 

var obj = {
    fname: "Ram",
    lname: "Kumar",
    age: 25,
    email: "ram@gmail.com"
};

for (var key in obj) {
    console.log(key + " : " + obj[key])
};