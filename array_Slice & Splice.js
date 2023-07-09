// ! JavaScript Array Slice & Splice

// ! Slics()  create a new array from exiting arrays //

var a = ["Sanjay", "Aman", "Rohit", "Rohan", "Amit"];

var b = a.slice(1, 4); // slice(start, end)

console.log(b);



// ! splice()  added a index from exiting arrays //

var c = ["Sanjay", "Aman", "Rohan", "Amit"];

c.splice(2,0, "neha", "karan"); // ! splice ( index, howmany delete , "new value")

console.log(c);