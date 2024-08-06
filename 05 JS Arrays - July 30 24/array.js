// var arr = [1,2,3,4,5];
// var a = arr.splice(1,0,6,7,6,5,7,8,9,0);
// console.log(arr)

// console.log(arr.length)

// arr.sort((a,b)=>b-a);
// console.log(arr);

// var string = "This is a empty string."

// var arr = [];
// arr = string.split('s');
// console.log(arr);

// var arr = [1,2,3,[5,3,4,8,],"String"];
// var newarr = arr[3]
// var s = newarr[1]
// console.log(arr[4][2]);

// var arr = [1,0,6,7,6,5,7,8,9,0];

// function iterator(arr,callBack){
//     var newArr = [];
//     for(let i=0;i<arr.length;i++){
//         if(callBack(arr[i])){
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// }

// function checkOddNumber(number){
//     return number%2!=0;
// }

// function checkEvenNumber(number){
//     return number%2==0;
// }



// console.log(iterator(arr,checkOddNumber));
// console.log(iterator(arr,checkEvenNumber));

// var arr = [1,0,6,7,6,5,7,8,9,0];

// var evenArray = arr.filter((element )=>{
//     return element%2==0;
// })

// console.log(evenArray);

// var arr = [1,2,3,4,5];

// var mappedArray = arr.map((element, index, array)=>{
//     return element**2;
// })

// console.log(mappedArray)

// function iterator(arr,callBack){
//     var newArr = [];
//     for(let i=0;i<arr.length;i++){
//         newArr.push(callBack(arr[i]))
//     }
//     return newArr;
// }

// function power(number){
//     return number**2
// }

// console.log(iterator(arr,power));

var arr = [1,2,3,4,5,6];

// for(let i = 0;i<arr.length;i++){
//     arr[i]= arr[i]**2;
// }

// arr.forEach((element,index,array)=>{
//     array[index] = element*element;
// })

// console.log(arr);

var value = arr.find((element)=>element%2==0);
console.log(value)

