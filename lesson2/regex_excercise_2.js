let testData = "United States";
let regex = /[ueoaiUEOAI]/g;
let result = testData.match(regex);
console.log(result.length);

// if (result !== null) {
//     let count = result.length;
//   console.log("ket qua: " + count);
// } else {
//   console.log("Không có kết quả khớp.");
// }