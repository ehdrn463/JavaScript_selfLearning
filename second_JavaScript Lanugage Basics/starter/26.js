// 26. Objects and methods


var john = {
    firstName: "John",
    lastName: "Smith",
    birthYear: 1995,
    family: ['Jane', 'Mark', 'Bob', "Emily"],
    job: 'teacher',
    isMarried: false,
    calcAge:function(){
        this.age = 2018 - this.birthYear;
    }
}

john.calcAge();
console.log(john);
