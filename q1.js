// find the biggest list from nested list and count as well;

// var marks = [[78, 76, 94, 86, 88],[91, 71, 98, 65],[95, 45, 78]];
// let max = 0
// for(let i = 0; i<marks.length; i++) {
//     if(marks[i].length>max) {
//         max = marks[i].length
//         console.log(marks[i]);
//     }
// }

// var number=[[90,40,60],[37,50,44],[55,88,99]];
// let max1=0
// for (let i=0;i<number.length;i++){
//     if (number[i].length>max1){
//         max1=number[i].lenght
//         console.log(number[i]);
//     }
// }


function loop(x) {
    if (x >= 10) {
      return;
  }
    loop(x + 1); 
  loop(0);
  }


  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  fruits.sort();