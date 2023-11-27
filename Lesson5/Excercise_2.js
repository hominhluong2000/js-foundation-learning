// Sử dụng if esle, switch, handle expection để viết một chương trình tính toán diện tích của hình chữ nhật, tam giác, tròn
// Tương tự bên trên. viết chương trình giải phương trình bậc 2 một ẩn
function calEquation(a, b, c) {
    if (typeof a == "number" && typeof b == "number" && typeof c == "number" && a != undefined && b != undefined && c != undefined && a != 0) {
        let delta = b * b - 4 * a * c;
        let sqrtDelta = Math.sqrt(delta);
        if (delta === 0) {
            return "Phuong trinh co nghiem kep: x = " + (-b) / 2 * a;
        }
        else if (delta > 0) {
            let x1 = (-b - sqrtDelta) / 2 * a;
            let x2 = (-b + sqrtDelta) / 2 * a;
            let result = "Phuong trinh co 2 nghiem phan biet: x = " + x1 + ", x = " + x2;
            return result;
        }
        else {
            return "Phuong trinh vo nghiem";
        }
    }
    else {
        throw new Error("Dữ diệu truyền vào là sai");
    }
}

try {
    let resultEroor = calEquation(0, -5, 4);//response exception
    console.log(resultEroor);
} catch (error) {
    console.error("Error: " + error.message);
}

try {
    let resultEroor = calEquation(1, -6, 9);//nghiem kep
    console.log(resultEroor);
} catch (error) {
    console.error("Error: " + error.message);
}

try {
    let resultEroor = calEquation(1, -5, 4);//2 nghiem phan biet
    console.log(resultEroor);
} catch (error) {
    console.error("Error: " + error.message);
}

try {
    let resultEroor = calEquation(1, 2, 5);//vo nghiem
    console.log(resultEroor);
} catch (error) {
    console.error("Error: " + error.message);
}