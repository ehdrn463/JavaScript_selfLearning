// 29. Loops and Iteration

// var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
// for (var i = 0; i < john.length; i++){
//     console.log(john[i]);
// }


// var i = 0;
// while (i < john.length){
//     console.log(john[i]);
//     i++;
// }


var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
for (var i = 0; i < john.length; i++){
    if(typeof john[i] !== 'string') {  //if(typeof john[i] !== 'string') continue;
        continue;
    }
    console.log(john[i]);
}


for (var i = 0; i < john.length; i++){
    if(typeof john[i] !== 'string') break;
    console.log(john[i]);
}


// Looping backwards
console.log('');
console.log("Looping backwards");
for (var i = john.length -1; i >= 0; i--){
    console.log(john[i]);
}
