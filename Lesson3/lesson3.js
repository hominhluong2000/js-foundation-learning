// let arr = ["A", "B", "c"];
// console.log(arr);

// let arrNumbers = [1, 2, 3];
// console.log(arrNumbers);
// console.log(arrNumbers[0]);
// console.log(arrNumbers[arrNumbers.length - 1]);

// console.log(arrNumbers[5]); // kq = undefined

// arrNumbers[0] = 5 //ghi de vi tri arr 0 = 5
// arrNumbers[5] = 5 // gan vi tri 5 = 5, size arr tang len 5. Gia tri con lai chua co gia tri se = undefined
// console.log(arrNumbers);

// const arr = ["A", "B", "c"];
// arr[0] = "HI"
// console.log(arr);

// const arr = new Array("A", "B", "C"); // cach khai bao arr khac
// console.log(arr);

// const arr = new Array(1, 2);
// console.log(arr);
// const arr2 = new Array(20); // khi khai bao kieu new va 1 doi so thi no se hieu la do dai cua arr2 = 20
// console.log(arr2.length);
// console.log(arr2[19]);

// const arr = [1, "abc", {
//         name: "Luong",
//         age: "23"
//     },
//     ["x", "y", "z"]
// ];

// console.log(arr[3]);
// console.log(arr[2]);
// console.log(typeof arr);

// const arr = ["A", "B", "C"];
// arr[arr.length] = "HI";
// console.log(arr);

// arr.push("XXX"); // push them phan tu vao cuoi
// console.log(arr);

// arr.unshift("XXX"); // unshift them phan tu vao dau
// console.log(arr);

// arr.shift(); // shift xoa phan tu dau tien
// console.log(arr);

// console.log(arr.pop()); // lay thang cuoi ra va xoa no
// console.log(arr);

// const arr = ["A", "B", "C"];
// // arr.splice(1, 0, "D", "F"); // chen vao vi tri 1
// console.log(arr);

// arr.splice(1, 2, "D", "F"); // chen vao vi tri index 1, 2: xoa 2 phan tu bat dau tu index = 1
// console.log(arr);

// arr.splice(1, 2); // 2: xoa 2 phan tu bat dau tu index = 1
// console.log(arr);

// const arr = ["A", "B", "C", "D", "E", "F"];
// console.log(arr.slice(2, 5)); // lay ra tu index 2->5 (nhung k bao gom 5)
// console.log(arr);

// const arr = ["A", "B", "C", "D", "E", "F"];
// console.log(arr.join("-")); // dung de noi arr bang '-'
// console.log(arr.join()); // dung de noi arr bang dau ','
// console.log(arr.join("")); // dung de noi arr dinh lien nhau

// const arr = ["A", "B", "C", "D", "E", "F"];
// delete arr[1]; // xoa index B thanh undefined. Dung khi muon xoa index nhung muon giu lai size cua arr
// console.log(arr);

// const arr = ["A", "B", "C", "D", "E", "F"];
// console.log(arr.sort()); // sort a - z
// console.log(arr.sort().reverse()); // sort z - a

// const arr = [1, 7, 10, 12, 20, 29, 30];
// console.log(arr.sort()); // sap xep theo AB: 1, 10, 12, 20, 29, 30, 7
// console.log(arr.sort(function(a, b) {
//     return a - b
// })); // sort theo thu tu nho-lon

// console.log(arr.sort(function(a, b) {
//     return b - a
// })); // sort theo thu tu lon-nho


// review lai phan nay
// const students = [{
//         studentName: "Tan",
//         age: 10
//     },
//     {
//         studentName: "Minh",
//         age: 9
//     },
//     {
//         studentName: "Chi Ha",
//         age: 30
//     },
//     {
//         studentName: "Son",
//         age: 15
//     }
// ];
// console.log(students);
// console.log(students.sort(function(a, b) {
//         return a.age - b.age;
//     })) // sap xep theo tuoi

// console.log(students.sort(function(a, b) {
//         return a.studentName - b.studentName;
//     })) // sap xep theo ten

// search = ISO datetime format
// console.log(new Date()); // ngay gio hien tai
// console.log(new Date().toTimeString());
// console.log(new Date().toUTCString());
// console.log(new Date().getDate());

// console.log(new Date("10-11-2023"));
// console.log(new Date("10/11/2023"));

// console.log(new Date(-100000000000));
// console.log(new Date(24 * 60 * 60 * 1000));

//cach viet function kieu 1
// function doSomething(action) {
//     console.log(action);
// }
// doSomething("acv");

// function add(a, b) {
//     console.log(a + b);
// }
// add(1, 2);

// function add(a, b) {
//     return (a + b);
// }
// let a = add(1, 2);
// console.log(a);

// const add = function(a, b) {
//         return a + b;
//     } // cach viet function kieu 2
// console.log(add(1, 4));

// method nen dc khai bao bien la const
// const add = (a, b) => {
//         return a + b;
//     } // cach viet function kieu 3 dung lambda () => {}
// console.log(add(1, 4));

// console.log(add(2, 10)); // se goi method truoc neu dung function kieu 1

// function add(a, b) {
//     return (a + b);
// }

// function lồng function
// function doSomething(a) {
//     function dododo(b) {
//         return a + b;
//     }
//     return dododo(a);
// }
// console.log(doSomething(3));

//review lai cho nay
// const dodo = (a) => {
//     return a * a;
// }

// const add = (a, b) => {
//     return a + b(a - 1);
// }
// console.log(add(3, dodo));


// function adds(a, b, ...more) {
//     console.log(a);
//     console.log(b);
//     console.log(more);
// }
// adds(1, 0, 6, 8, 9);

//lưu ý nếu hàm k có param thì khi gọi hàm truyền đối số vô thì vẫn gọi đc bằng arguments
function dodo() {
    console.log(arguments);
}
dodo(1, 3, 5, 7, 9);