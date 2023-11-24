// let a = 7;
// if (a == 5) {
//     console.log("Equal 5");
// } else if (a == 6) {
//     console.log("Equal 6");
// } else {
//     console.log("Not Equal");
// }

//dayindex 0-6
// function getDayOfWeek(dayIndex) {
//     if (dayIndex == 0) {
//         return "Monday";
//     }
//     if (dayIndex == 1) {
//         return "Tuesday";
//     }
//     if (dayIndex == 2) {
//         return "Wednesday";
//     }
//     if (dayIndex == 3) {
//         return "Thursday ";
//     }
//     if (dayIndex == 4) {
//         return "Friday";
//     }
//     if (dayIndex == 5) {
//         "Saturday";
//     }
//     if (dayIndex == 6) {
//         return "Sunday";
//     } else {
//         return "Not exist";
//     }
// }
// console.log(getDayOfWeek(7));

// //false
// undefined
// null
// 0
// NaN
// empty: ""

// function add(a, b) {
//     if (a != undefined && b != undefined && a != null && b != null && typeof a == "number" && typeof b == "number") {
//         return a + b;
//     } else {
//         return null;
//     }
// }
// console.log(add(2, 4));

// function learnSwitch(a) {
//     switch (a) {
//         case 0:
//             console.log("0 ne");
//             break;
//         case 1:
//             console.log("1 ne");
//             break;
//         case 1:
//             console.log("1 ne");
//             break;
//         default:
//             console.log("hahah");
//     }
// }

// let a = 0;

// function getDayOfWeek(dayIndex) {
//     switch (dayIndex) {
//         case 0:
//             return "Monday";
//         case 1:
//             return "Tuesday";
//         case 2:
//             return "Wednesday";
//         case 3:
//             return "Thursday";
//         case 4:
//             return "Friday";
//         case 5:
//             return "Saturday";
//         case 6:
//             return "Sunday";
//         default:
//             return "Not exist";
//     }
// }
// console.log(getDayOfWeek(1));

// function add(a, b) {
//     if (typeof a != "number" || typeof b != "number") {
//         throw "Invalid input";
//         console.log("HAHA");
//     }
//     console.log("HAuu");
// }
// console.log(add(2, "2"));

// function getMonthName(mo) {
//     mo--;
//     const months = [
//         "Jan", "Feb", "Mar", "Apr", "May", "Jun", ,
//         "July", "Aug", "Sep", "Oct", "Nov", "Dec"
//     ];
//     if (months[mo]) {
//         return months[mo];
    // } else {
    //     throw new Error("Invalid");
    // }
// }

// try {
//     monthName = getMonthName(1);
//     console.log(monthName);
// } catch (e) {
//     console.log("Error");
// }

// function divide(a, b) {
//     if (a != undefined && b != undefined && a != null && b != null && typeof a == "number" && typeof b == "number") {
//         return a / b;
//     } else { throw new Error("Invalid input"); }
// }

// try {
//     console.log(divide(a, null));
// } catch (e) { console.log("Error"); } finally {
//     console.log("Final");
// }

// function muti(a, b) {
//     return a / b;
// }
// console.log(muti(aaa(), 1));