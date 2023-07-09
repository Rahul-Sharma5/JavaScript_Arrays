//! JavaScript Array of Objects Tutorial

var student = [
    { name: 'A', age: 12 },
    { name: 'K', age: 34 },
    { name: 'b', age: 12 },
    { name: 'J', age: 24 },
    { name: 'A', age: 34 },
    { name: 'Z', age: 18 },
    { name: 'E', age: 56 }
];

console.log(student);

for (var a = 0; a < student.length; a++) {
    console.log(student[a].name + " " + student[a].age);
}