//! Multidimensional Arrays

var ary = [
    ["Harry", 18, "Male", "BCom"],
    ["Sunny", 28, "Male", "BCA"],
    ["Tom", 24, "Female", "MCA"],
    ["Sara", 29, "Female", "SCA"],
    ["Rahul", 29, "male", "Science"]
];

//console.log(ary[3][3]);

for (var a = 0; a < ary.length; a++) {
    for (var b = 0; b < ary.length; b++)
        console.log(ary[a][b]);
}

