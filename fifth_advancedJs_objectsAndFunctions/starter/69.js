// 69. Bind, Call and Apply

var john = {
    name: "John",
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay){
        if (style ==='formal'){
            console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m a ' 
            + this.name + ', I\`m a ' 
            + this.job + ' and I\'m ' 
            + this.age + ' years old.');
        } else if (style == 'friendly'){
            console.log('Hey! What\'s up?'
            + this.name + ', I\`m a ' 
            + this.job + ' and I\'m ' 
            + this.age + ' years old. Have a nice ' + timeOfDay + '.');
        }
    }
}

var emily = {
    name: "Emily",
    age: 35,
    job: 'designer'
}

john.presentation("formal", 'Morning");')
// call:  특정 object의 method를 다른 object가 이용할 수 있도록해줌
john.presentation.call(emily, 'friendly', 'afternoon')

// 추후 배울 방법
// john.presentation.apply(emily, ['friendly', 'afternoon'])

var johnFriendly = john.presentation.bind(john, 'friendly'); // 
// timeOfDay 파라미터 설정 아직 안함 -> 뒷 부분만 파라미터 다르게 설정하고 싶으면, bind로 복사해서 진행
johnFriendly('morning');
johnFriendly('night');


var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afternoon');



var years = [1990, 1965, 1937, 2005, 1999];

function arrayCalc(arr, fn){
    var arrRes = [];
    for (var i = 0; i < arr.length; i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el){
    return 2016 - el;
}

function isFullAge(limit, el){
    return el >= limit; // true or false
}

var ages = arrayCalc(years, calculateAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);