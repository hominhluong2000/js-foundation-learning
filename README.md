# js-foundation-learning
# Data type
	1. Bug in JS. typeof null => 'object'
	2. Typeof [] returns 'object'
	3. In JS, returns 'string' not is 'String'
	4. 7 primitive data types: undefined, null, numbers, strings, Booleans, Symbols, and BigInt
# Regex
- Các phương thức thường dùng: match(), replace(), split(), search(), exec(), test(),...
- Các kiểu sử dụng regex:
 ^: tìm ký tự đầu tiên của dòng
\b: tìm chữ có dấu cách trước hoặc sau đó vd: chuỗi string: expression see  
											\be => tìm ký tự space e => expression
											e\b => tìm ký tự e space => see

# Lesson 3
1. Arguments 
- Arguments để truy cập Arguments Object trong một hàm. Biến này được tạo tự động khi hàm được gọi cho nên ta có thể sử dụng mà không cần khai báo nó
- Arguments Object không có bất kỳ quy tắc nào cho số lượng đối số, điều này nghĩa là biến arguments có thể chứa bất kỳ số lượng đối số nào, không cần thiết truyền đầy đủ tham số cho hàm.
- Arguments Object không phải là một đối tượng mảng đầy đủ
* Cách chuyển Arguments thành 1 mảng thực sự:
// Đối với ES6
function stringeeFunc() {
    let sum = 0;
    const argsArray = Array.from(arguments);
    sum = argsArray.reduce((sum, r) => {
        return sum + r;
    }, 0);
    
    console.log(sum); // Kết quả: 3
}

stringeeFunc(1, 2);
2. Các hàm kết hợp array
- length(): kiểm tra tổng số number của arr
- pop(): lấy phần tử cuối ra và xóa nó
- unshift(): thêm 1 phần tử vô đầu tiên mảng
- shift(): xóa phần tử đầu của mảng
- splice(): thêm phần tử vào index và xóa bao nhiêu phần tử
- push(): push them phan tu vao cuoi
- slice(): vd: slice(0, 2, "A"): thêm "A" vào index 0, lấy ra phần tử từ index 0 đến idex 2 (k bao gồm index 2)
- join(): nối chuỗi
- reverse(): hàm đảo ngược 
- sort(): sắp xếp. + Nếu mảng là kiểu number thì sẽ biến thành string sau đó sắp xếp nhỏ đến lớn
                   + Nếu mảng là string thì sắp xếp a-z. Nếu muốn sắp xếp z-a thì dùng thêm hàm .reverse()
- function có 3 cách viết function bth, function khi khai báo biến, function khai báo biến kiểu lambda



