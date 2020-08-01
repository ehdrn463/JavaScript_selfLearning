// 64. Primitives vs. Objects


// Primitivies
var a = 23;
var b = a;
a = 46;
console(a); // 46
console(b); // 23

// Objects
var obj1 = {
    name : "John",
    age: 26
};

var obj2 = obj1; 

obj1.age = 30;
console.log(obj1.age); // 30
console.log(obj2.age); // 30


// Functions
var age = 27;
var obj = {
    name: "Jones",
    city: "Lisbon"
}

function change(a,b){
    a = 30;
    b.city = 'San Fransisco';
}

change(age, obj);
console.log(age);  // 27 (변하지 않음)
console.log(obj.city); // San Fransisco (변함)