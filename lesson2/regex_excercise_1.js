// "Viết regex khớp với địa chỉ email, mẫu này khớp với bất kỳ địa chỉ email nào không chứa khoảng trắng, bao gồm các ký tự ASCII sau:
// - Chữ cái tiếng Anh in hoa (A-Z) và chữ cái tiếng Anh thường (a-z)
// - Chữ số (0-9)
// - Các ký tự ! # $ % & ' * + - / = ? ^ _ ` { | } ~
// - Ký tự . (dấu chấm) miễn là nó không phải là ký tự đầu tiên hoặc ký tự cuối cùng và nó sẽ không xuất hiện liên tiếp."

let testData = "nAited#tates8A";
// let regex = /(?=[^A-Z]*[A-Z])(?=[^!@#\$%]*[!@#\$%])/g;

let regex = /(?=[^A-Z]*[A-Z])(?=[0-9])(?=[!@#\$%])/g;
let result = regex.test(testData);
console.log(result);