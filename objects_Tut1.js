//! JavaScript Objects Tutorial

var obj = {
    fname: "Rahul",
    lname: "Sharma",
    age: 25,
    email: "rahulsharma@gmail.com",
    favBikes: ['TVS310', 'Ninja', 'Honda'],
    salary: function () {
        return 25000;
    },
    fullname: function () {
        return this.fname + " " + this.lname;
    }
}


console.log(obj);
console.log(obj.fullname());