// 68. Clousres

function retirement(retirementAge){
    var a = ' years left until retirement';
    return function(yearsOfBirth){
        var age = 2016 - yearsOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);


retirementUS(1990);
retirement(66)(1990);
retirementGermany(1969);
retirementIceland(1999);


// closure를 모를 때
// function interviewQuestion(job){
//     if (job === "designer"){
//         return function(name){
//             console.log(name + ', can you please explain what UX desing is?');
//         }
//     } else if (job ==='teacher'){
//         return function(name){
//             console.log('what subject do you teach,' + name + '?');
//         }
//     } else {
//         return function(name){
//             console.log("Hello " + name + ", what do you do?");
//         }
//     }
// }

// clousre를 사용해 다시 정의하기
function interviewQuestion(job){
    return function(name){
        if (job === "designer"){
            console.log(name + ', can you please explain what UX desing is?');
        } else if (job ==='teacher'){
            console.log('what subject do you teach,' + name + '?');
        } else {
            console.log("Hello " + name + ", what do you do?");
        }
    }
}

console.log(interviewQuestion("teacher"));
console.log("")
interviewQuestion("teacher")("DongGu");


