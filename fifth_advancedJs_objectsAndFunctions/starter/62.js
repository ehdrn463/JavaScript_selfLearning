// Creating Objects: Function Constructors

// Function constructor

var john ={
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher',
}

var Person = function(name, yearOfBirth, job){
    this.name  = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    // this.calculateAge = function(){
    //     console.log(2016 - this.yearOfBirth);
    // }
}

// 클래스 메소드 -> prototype (클래스 내부에 메소드 선언시 가독성 떨어짐)
Person.prototype.calculateAge = function(){
    console.log(2016 - this.yearOfBirth);
};

Person.prototype.lasName = "Smith";

var john = new Person('John', 1990, 'teacher');
var jane = new Person("Jane", 1944, 'designer');
var mark = new Person("Mark", 1999, "student");

john.calculateAge();
jane.calculateAge();
mark.calculateAge();


console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);