// ! JavaScript Array Concat & Join   //

// ! Array - Concat() Function added more then on arrays //
var a = ["Sanjay", "Aman", "Rohit", "Rohan"];

var b = ["Aniket", "Rahul"];
var e = ["Neha", "Mahima"];

// ! (i)  //
var c = a.concat("Satya", "Ujjwal")
console.log(c)

// ! (ii)  //

var d = a.concat(b, e);
console.log(d)


// ! Array - Join() Function //

var f = ["Sanjay", "Aman", "Rohit"];

var g = f.join("-")

console.log(g)
