// Dùng callback, promise, async/await để viết chức năng của 1 chiếc đồng hồ, bao gồm chức năng đếm ngược và đếm xuôi. 
// Đồng hồ sẽ nhận input là số N(số giây), mỗi một giây count down hoặc count up sẽ in ra thông báo tương ứng.

function Clock(type) {
    switch (type) {
        case 'countUp':
            let start = 0;

            return console.log("abc");
        case 'countDown':
            return console.log("def");
        default:
            return console.log("input incorrect");
    }
}

Clock('countUp');