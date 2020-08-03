/*****************************
* CODING CHALLENGE 4
*/

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. 
Let's now implement the same functionality with objects and methods.

1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. 
Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

GOOD LUCK 😀
    calcAge:function(){
        this.age = 2018 - this.birthYear;
    }
*/

var mark = {
    name: "Mark",
    mass: 100,
    height: 1.90,
    calcBmi: function(){
        this.Bmi = this.mass / (this.height^2);
        return this.Bmi;
    }
}

var john = {
    name: "John",
    mass: 70,
    height: 1.74,
    calcBmi: function(){
        this.Bmi = this.mass / (this.height^2);
        return this.Bmi;
    }
}


if (mark.calcBmi() > john.calcBmi()){
    console.log('Mark has the highest BMI ' + mark.Bmi);
} else if (mark.Bmi = john.Bmi){
    console.log('Mark and John has same highest BMI ' + mark.Bmi);
} else {
    console.log('John has the highest BMI ' + john.Bmi);
}