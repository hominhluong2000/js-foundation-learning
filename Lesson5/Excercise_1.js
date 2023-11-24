// Sử dụng if esle, switch, handle expection để viết một chương trình tính toán diện tích của hình chữ nhật, tam giác, tròn

function calArea(type, a, b) {
    switch (type) {
        case 1:
            if (typeof a == "number" && typeof b == "number" && a != undefined && b != undefined && a > 0 && b > 0) {
                return a * b;
            }
            else {
                throw new Error("Invalid input");
            }
        case 2:
            if (typeof a == "number" && typeof b == "number" && a != undefined && b != undefined && a > 0 && b > 0) {
                return 0.5 * a * b;
            }
            else {
                throw new Error("Invalid input");
            }
        case 3:
            if (typeof a == "number" && a != undefined && a > 0) {
                return Math.PI * a * a;
            }
            else {
                throw new Error("Invalid input");
            }
    }
}

try {
    let resultEroor = calArea(3, "2");//response exception
    console.log(resultEroor);
} catch (error) {
    console.error("Error: " + error.message);
}

try {
    let result1 = calArea(1, 2, 3);//S chu nhat
    console.log(result1);
} catch (error) {
    console.error("Error: " + error.message);
}

try {
    let result2 = calArea(2, 2, 2);//S tam giac
    console.log(result2);
} catch (error) {
    console.error("Error: " + error.message);
}

try {
    let result3 = calArea(3, 2);//S hinh tron
    console.log(result3);
} catch (error) {
    console.error("Error: " + error.message);
}