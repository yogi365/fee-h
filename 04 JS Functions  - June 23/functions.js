// function addition(a,b){  
//     return a+b;
// }

// console.log(addition("2",'3'));

// var addition = function(a,b){
//     return a+b;
// }

// console.log(addition(2,3))

// (
//     function(){
//         console.log('this is a self invoking function');
//     }
// )();

// var addition = function(a,b){
//     return a+b;
// }


// var arrow = name=>{
//     console.log(name)
// }

// arrow('Abc');


// var addition = (a,b)=>a+b;

// console.log(addition(1,2));

function addition(a,b){
    return a+b;
}

function subtract(a,b){
    return b-a;
}

function multiplication(a,b){
    return a*b;
}

function division(a,b){
    return a/b;
}

// function arithmeticOperations(a,b,operation){
//     // return addition(a,b);
//     switch(operation){
//         case '+':
//             return addition(a,b);
//         case '-':
//             return subtract(a,b);
//         case '*':
//             return multiplication(a,b);
//         case '/':
//             return division(a,b);
//         default:
//             return 'invalid operation';
        
//     }
// }

// console.log(arithmeticOperations(1,2,'+'));
// console.log(arithmeticOperations(1,2,'-'));
// console.log(arithmeticOperations(1,2,'*'));
// console.log(arithmeticOperations(1,2,'/'));

function arithmeticOperations(a,b,operation){
    return operation(a,b)
}

// var result = arithmeticOperations(a,b,(a,b)=>a+b);
var result = arithmeticOperations(a,b,function(a,b){
    return a+b;
})

// console.log(arithmeticOperations(2,3,addition));
// console.log(arithmeticOperations(2,3,subtract));
// console.log(arithmeticOperations(3,5,division));