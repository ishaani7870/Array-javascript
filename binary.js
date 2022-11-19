// binary_number = [1,1,1,1];
// sum=0;
// count=1;
// for(i=binary_number.length-1; i>=0; i--){
//     if(i>=0){
        
//     value= binary_number[i]*count;
//     count=count*2;
//     sum=sum+value;
//  }
// }
// console.log(sum)


// binary_number1=[2,7,5,8];
// sum=0;
// count=1;
// for (i=binary_number1.length-1; i>=0;i--){
//     if (i>=0){
//         value=binary_number1[i]*count;
//         count=count*2;
//         sum=sum+value;
//     }
// }
// console.log(sum)


// const array1 = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
// for (i=0;i<array1.length;i++){
//     count=0;
//     for (j=2; j<array1[i];j++){
//         if (array1[i]%j==0){
//             count=count+1
//         }

//     }
//     if (count==0){
//         console.log('prime',array1[i]);
//     }
//     else{
//         console.log('notprime',array1[i]);
//     }

// }


var arra = [1,3,6,20,30,44,22,44,66,88,99,2,44,34,5,67];
for (i = 0; i < arra.length;i++){
    count = 0;
    for (j=2; j < arra [i]; j++){
        if (arra[i]%j==0){
            count=count+1
        }
    }
    if (count==0){
        console.log('prime number',arra[i]);
    }
    else{
        console.log('not prime number',arra[i]);
    }

}

let array = 









