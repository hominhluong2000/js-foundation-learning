// Write a JavaScript function to print an integer with thousands separated by commas.
// Viết một đoạn code để in một số với phần nghìn được phân cách bởi dấu phẩy. chỉ sử dụng regex
// Test Data :
// 1000 => "1,000"
// 10000.23 => "10,000.23"
// 100000=> "100,000"

let inNum = "100000";
let regex = /\B(?=(\d{3})+(?!\d))/g;
let isParse = inNum.replace(regex, ",");
console.log(isParse);

// function formatNumberWithCommas(number) {
//     return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
//   }
  
//   // Test
//   console.log(formatNumberWithCommas(1000));    
//   console.log(formatNumberWithCommas(10000.23));  
//   console.log(formatNumberWithCommas(100000));  