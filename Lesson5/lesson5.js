// let a = 5;
// while (a > 0 && ) {
//     console.log("A hihi " + a);
//     a--;
// }

// let arr = [1, 2];

// function sumOfArray(arr) {
//     if (arr instanceof Array) {
//         let result = 0;
//         let i = 0;
//         while (i < arr.length) {
//             result += arr[i];
//             i++;
//         }
//         return result;
//     }
//     return null;
// }

// console.log(sumOfArray(arr));

// let arr = [1, 2, 3, 4];

// function resultArray(arr) {
//     if (arr instanceof Array && arr.length > 0) {
//         let resultArr = [];
//         let i = 0;
//         while (i < arr.length) {
//             if (arr[i] % 2 == 0) {
//                 resultArr.push(arr[i]);
//             }
//             i++;
//         }
//         return resultArr;
//     }
//     return null;
// }

// console.log(resultArray(arr));

// let arr = [1, 2, 3, 4];

// function sumOfArray(arr) {
//     if (arr instanceof Array) {
//         let result = 0;
//         let i = 0;
//         do {
//             result += arr[i];
//             i++;
//         } while (i < arr.length);
//         return result;
//     }

//     return null;
// }


// console.log(sumOfArray(arr));

// do{
//     console.log("I'm here");
// }while (false);
// while(false){
//     console.log("I'm here");
// }

// function findNumber(n) {
//     do {
//         if (n % 2 === 0) {
//             console.log(n);
//         }
//         n--;
//     } while (n > 0);
// }

// console.log(findNumber(20));

// function sumNumber(n) {
//     let result = 0;
//     do {

//         if (n % 3 === 0 && n % 2 === 0) {
//             result += n;
//         }
//         n--;
//     } while (n > 0);
//     return result;
// }

// console.log(sumNumber(20));

// let a = [21, 3, 64566, 5, 6];
// for (let i = 0; i < a.length; i++) {
//     console.log(a[i]);
// }

// function sumNumber(n) {
//     let result = 0;
//     for (let i = 0; i < n; i++) {
//         if (i % 3 === 0 && i % 2 === 0) {
//             result += i;
//         }
//     }
//     return result;
// }

// console.log(sumNumber(20));

// let n = 20;
// while (n > 0) {
//     console.log(n);
//     n -= 3;
//     if (n % 2 == 0) {
//         break;
//     }
// }

// let arr = [1, 7, 2332, 76456, 324324, 55, 4324];

// function findFirtNumber(arr) {

//     if (arr instanceof Array && arr.length > 0) {
//         let result = "";
//         for (let i = 0; i < arr.length; i++) {
//             if (arr[i] % 5 == 0) {
//                 result = arr[i];
//                 break;
//             }
//         }
//         return result;
//     }
//     return null;
// }

// console.log(findFirtNumber(arr));

// firstFor: for (let i = 0; i < 5; i++) {
//     console.log("i " + i);
//     secondFor: for (let j = 0; j < 7; j++) {
//         console.log("j " + j);
//         if (j == 6) {
//             break;
//         }
//     }
// }

// let student = {
//     studentName: "Son",
//     age: 20,
//     address: "123 Hoang Hung"
// }

// for (key in student) {
//     // console.log("Key " + key + " value: " + student[key]); 
//     console.log(`Key: ${key} value: ${student[key]}`);
// }

// let a = [2112, 232, 4543, 556];
// // for (k in a) {
// //     console.log(a[k]);
// // }

// for (let k of a) {
//     console.log(k);
// }