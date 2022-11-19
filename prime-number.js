// let a = require(("readline-sync"));
// var num = a.questionInt("Enter any number")
// count=0
// var i=0
// while(num>i){

//     if (num%i==0){
//         count=count+1}
//         i++;
// }
// if (count==1){
//     console.log("prime Number");
// }
// else{
//     console.log("Not Prime");
// }

var input=require("readline-sync");
var num =input.questionInt("enter the number ");
count=0;
var i=0;
while(num>i){
    if (num%i==0){
        count=count+1
        i++     
    }
if (count==1){
    console.log("prime number ");
}
else{
    console.log("not prim");

   }
}

// var number=[[90,40,60],[37,50,44],[55,88,99]];
// let max1=0
// for (let i=0;i<number.length;i++){
//     if (number[i].lenght>max1){
//         max1=number[i].lenght
//         console.log(number[i]);
//     }
// }



