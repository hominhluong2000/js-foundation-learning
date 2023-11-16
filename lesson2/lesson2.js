// toan tu 3 ngoi
// let isMale = false;
// let a = isMale ? 18 : 20;
// console.log(a);

//toan tu gan
// a = 10;
// b = a ?? 0;
// console.log(b);

//Data type
//Ham typeof de kiem tra kieu du lieu
// let a = 0.2;
// let b = 0.1;
// console.log(typeof a);
// console.log(a + b);

// console.log("20" - "10");

// let b = 10;
// console.log(Number.isNaN(b));
// console.log(b / "abc"); // ket qua = NaN
// console.log(b / 0); // ra ket qua Infinity (vo cuc)
// console.log(typeof NaN); // ket qua = number. Infinity cung tuong tu NaN

// let a = new Number(10); // kieu object se cung cap vung nho khac nhau
// let b = new Number(10);

// // console.log(a === b); // vi vung nho khac nhau nen ket qua la false
// console.log(a.valueOf()==b.valueOf());

// console.log(Number.MAX_VALUE); // method voi Number

// console.log(13.3.toFixed(1))

//undefine xuat hien khi khong khai bao

//My name is "Luong". Ky tu dac biet minh dung \
// console.log("My name is \"Luong\"");

// console.log("abc" == "abcc");

// console.log("abc".concat("hda")); // cong chuoi
// console.log("abcdef".substring(1, 3)); //cat ky tu
// console.log("abcdef".toUpperCase());
// console.log("aCcdef".toLowerCase());
// console.log("abcdecf".replace("c", "jjj")); // chi replace chu c dau tien
// console.log("abcdecf".replaceAll("c", "jjj"));

// console.log("Toi la Toi".replace(/T/, "A"));
// console.log("Yoi 10 la 20 Toi".replace(/t|y|1/ig, "A")); //regular ex
// console.log("   ac   ".trim()); // bo space

//object
// let student = {
//     name: "Luong",
//     age: 23,
//     gender: "Male",
//     passed: true,
//     1: "hihi"
// }
// console.log(student);

// student.address = "8/12";

// console.log(student);

// console.log(student.age);

// console.log(student["name"]); // neu trung tu khoa name thi ta dung ["name"]

// console.log(student["1"]); // neu key la number thi su dung ["value"] hoac [1]

// console.log(Object.keys(student)); // ham lay tat ca keys trong object. Lay values


// let student = {
//     name: "Luong",
//     age: 23,
//     gender: "Male",
//     passed: true,
//     address: "812",
//     getNameAndAge: function() {
//         return (this.name + " " + this.age);
//     }
// }

// console.log(student.getNameAndAge());

// console.log(delete student.age);

// console.log(student);


// const obj = { a: 3, b: 5 };
// obj.d = 3;
// console.log(obj);

// a = JSON.parse("{\"a\": 3, \"b\": 4}");
// console.log(a);