// //call back

// function print(name) {
//     console.log(`My name is ${name}`);
// }

// function decorateName(name) {
//     console.log(`My fancy is ${name}`);
// }

// function decorateNameTet(name) {
//     console.log(`HPNY ${name}`);
// }

// function printSomeNames(names, callback) {
//     for (const name of names) {
//         callback(name);
//     }
// }

// let names = ["Luong", "Lua", "Mai"];
// printSomeNames(names, print);
// printSomeNames(names, decorateName);
// // printSomeNames(names, decorateNameTet);

// Asynchronous
// function doSomething() {
//     console.log("hhaa");
// }

// setTimeout(doSomething, 3000);

// console.log("hehehe");  

// let x = 0;

// function loadDataFromFile() {
//     console.log(x + 5);
//     return x + 5;
// }

// setTimeout(loadDataFromFile, 3000);
// console.log(x);

//Promise
//Xem lai video
// let promise = new Promise(function(resolveCallback, rejectCallback) {
//     let flag = false;

//     if (flag) {
//         setTimeout(() => { resolveCallback("OK"); }, 3000);
//     } else {
//         setTimeout(() => { rejectCallback("error"); }, 5000);
//         rejectCallback("error");
//     }
// });

// function aResolveCallback(value) {
//     console.log("ahihi " + value);
// }

// function aRejectCallback(value) {
//     console.log("ahuhu " + value);
// }

// promise.then(aResolveCallback, aRejectCallback);
// console.log("I'm here");

// function add(a, b, callback) {
//     var sum = a + b;
//     callback(sum);
// }

// function print(result) {
//     console.log("Tổng hai số:", result);
// }

// add(3, 4, print);

// console.log("Chương trình đang chạy...");

// function cal(a, b, callback) {
//     return callback(a, b);
// }

// function add(a, b) {
//     return a + b;
// }

// function sub(a, b) {
//     return a - b;
// }

// function mult(a, b) {
//     return a * b;
// }

// function dev(a, b) {
//     return a / b;
// }

// console.log(cal(5, 3, add));
// console.log(cal(5, 3, sub));
// console.log(cal(5, 3, mult));
// console.log(cal(5, 3, dev));

//vd cua Tan
// function acreage(dai, rong) {
//     if (typeof dai != "number" || typeof rong != "number") {
//         throw "input data is invalid";
//     }
//     if (dai == 0 || rong == 0) {
//         throw "Edge can't equal 0";
//     }
//     return dai * rong;
// }

// function caculator(acreage, acreage1) {
//     return acreage + acreage1;
// }

// console.log(caculator(acreage(4, 3), acreage(7, 5)));

// async function doSomethingAsyync() {
//     let myPromise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("ABC");
//         }, 5000);
//     });

//     await myPromise.then((value) => {
//         console.log(value);
//     });
//     console.log("VVVVVV");
// }
// doSomethingAsyync();

// console.log("The first...");