// var student = {
//     firstName:"Abc",
//     age:14,
//     grade:[25,35,24,16,20]
// }

// student.firstName = "Xyz";
// student.lastName = "Abc";

// student.grade.pop();

// console.log(student.grade);

// for(let i=0;i<student.grade.length;i++){
//     console.log(student.grade[i])
// }

// student.grade.forEach((marks)=>{
//     console.log(marks)
// })

// var student = {
//     "First Name": "Abc",
//     age: 14,
//     grade: [25, 35, 24, 16, 20],
//     address:{
//         houseNo:12,
//         street:'Sector 10',
//         city:'Chandigarh',
//         country:'India'
//     }
// }
// console.log(student['First Name'])

// student.firstName = "Xyz";
// student.lastName = "Abc";

// console.log(student.address.city)


// var student = [
//     {
//         firstName: "Abc",
//         age: 14,
//         grade: [25, 35, 24, 16, 20],
//         address:{
//             houseNo:12,
//             street:'Sector 10',
//             city:'Chandigarh',
//             country:'India'
//         }
//     },
//     {
//         firstName:"A2",
//         age:13,
//         grade:[25,26,12,13]
//     }
// ]

// var age = student[0].age;
// console.log(age);



// var student = {
//     firstName: "Abc",
//     age: 14,
//     lastName:"Xyz",
//     fullName:function(){
//         return this.firstName;
//     }
// }

// for(let key in student){
//     console.log(student[key])
// }

// console.log(student.fullName())

// const grade=[25,26,12,13];

// for(let ele in grade){
//     console.log(grade[ele]);
// }

// var student = {
//     firstName: "Abc",
//     age: 14,
//     lastName:"Xyz",
//     fullName:function(){
//         return this.firstName;
//     }
// }
// delete student.age;
// console.log(student)
// console.log(student.hasOwnProperty("grade"))