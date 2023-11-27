// Cho một chuỗi s chỉ chứa các ký tự '(', ')', '{', '}', '[' và ']', xác định xem chuỗi đầu vào có hợp lệ hay không.
// Chuỗi đầu vào hợp lệ nếu:
// - Dấu mở phải được đóng bởi cùng loại dấu mở.
// - Dấu mở phải được đóng theo thứ tự chính xác.
// - Mỗi dấu đóng đều có một dấu mở tương ứng cùng loại.

function checkString(s) {
    let regex = /^[(){}[\]]+$/g;
    if (typeof s == "string" && regex.test(s)) {
        const stack = [];
        // Tạo một đối tượng mapping để kiểm tra sự tương ứng giữa dấu mở và đóng
        const mapping = {
            ')': '(',
            '}': '{',
            ']': '['
        };

        // Duyệt qua từng ký tự trong chuỗi đầu vào
        for (let i = 0; i < s.length; i++) {
            const char = s[i];

            // Nếu là dấu mở, đẩy vào ngăn xếp
            if (char === '(' || char === '{' || char === '[') {
                stack.push(char);
            } else {
                // Nếu là dấu đóng
                // Lấy phần tử đầu ngăn xếp
                const top = stack.pop();

                // Kiểm tra xem dấu đóng có tương ứng với dấu mở gần nhất không
                if (top !== mapping[char]) {
                    throw new Error("Invalid input"); // Trả về false nếu không tương ứng
                }
            }
        }
        // Kiểm tra xem ngăn xếp có rỗng không sau khi duyệt qua toàn bộ chuỗi
        if (stack.length === 0) {
            return "Valid input";
        }
        else {
            throw new Error("Invalid input");
        }
    }
    else {
        throw new Error("Invalid input");
    }
}

try {
    let resultEroor = checkString("(){}");// true
    console.log(resultEroor);
} catch (error) {
    console.error("Error: " + error.message);
}

try {
    let resultEroor = checkString("(){");// Invalid
    console.log(resultEroor);
} catch (error) {
    console.error("Error: " + error.message);
}

try {
    let resultEroor = checkString("123");// Invalid
    console.log(resultEroor);
} catch (error) {
    console.error("Error: " + error.message);
}