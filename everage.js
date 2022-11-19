// var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43]

// var i=0;
// var sum=0;
// count=0;
// while(i<elements[i]){
//      if(elements[i]%2==0){
//          count=count+1;
//          sum=sum+elements[i]
//          ave=sum/count;}

//     i=i+1  
// j=0;
// sum2=0;
// count2=0;
// while(j<elements.length){
//     if(elements[j]%2!==0){
//         count2=count2+1
        
//         sum2=sum2+elements[j]
//         ave2=sum2/count2;}
//         j=j+1}

// }
// console.log("sum of even",sum);  
// console.log("ave_of_even=",ave);
// console.log("sum of odd",sum2);
// console.log("ave_of_odd=",ave2);

// var marks = [[78, 76, 94, 86, 88],[91, 71, 98, 65],[95, 45, 78]];
// var i=0;
// var count=0;
// var sum=0;
// while(i<marks.length){
//    var j=0;
    
    
//     while(j<marks[i].length){
//         coun=count+1
//         sum=sum+marks[i][j] ;
        
      
//         j=j+1}  
//     i=i+1}  
// console.log(sum);



var magic=[[19, 8, 6],
[1, 5, 9],
[6, 7, 2]];
for(i=0; i<magic.length; i++){
  sum_of_vertical=0;
  sum_of_horizental=0
  for(j=0;j<magic[i].length;j++){
    sum_of_vertical= sum_of_vertical+magic[i][j]
    sum_of_horizental=sum_of_horizental+magic[j][i]
  }
}console.log("col",sum_of_vertical);
console.log("row",sum_of_horizental);




















