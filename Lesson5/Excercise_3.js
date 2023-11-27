// Tìm người có điểm số cao nhất và cao thứ 2. trường hợp có cùng điểm số, sẽ so sánh độ ưu tiên, độ ưu tiên cao hơn sẽ được chọn.
// In ra thông tin 2 người đó theo cú pháp sau: First prize: [Tên] - Score: [Điểm], Second prize: [Tên] - Score: [Điểm]

const data = [
  {
    studentName: "Tan",
    score: 7,
    priority: 2
  },
  {
    studentName: "Son",
    score: 5,
    priority: 1
  },
  {
    studentName: "Truong",
    score: 8,
    priority: 2
  },
  {
    studentName: "Luong",
    score: 7,
    priority: 2
  },
  {
    studentName: "Ha",
    score: 6,
    priority: 3
  },
  {
    studentName: "Dung",
    score: 9,
    priority: 2
  },
  {
    studentName: "Minh",
    score: 7,
    priority: 1
  },
  {
    studentName: "Dieu",
    score: 8,
    priority: 3
  }
];

// Sắp xếp mảng theo điểm số giảm dần và độ ưu tiên tăng dần
const sortedData = data.sort((a, b) => {
  if (a.score !== b.score) {
    return b.score - a.score; // Sắp xếp theo điểm số giảm dần
  } else {
    return a.priority - b.priority; // Nếu có cùng điểm, sắp xếp theo độ ưu tiên tăng dần
  }
});

// Lấy thông tin người có điểm số cao nhất và cao thứ 2
const firstPrize = sortedData[0];
const secondPrize = sortedData.find(student => student.score < firstPrize.score) || sortedData[1];

// In ra thông tin
console.log(`First prize: ${firstPrize.studentName} - Score: ${firstPrize.score}`);
console.log(`Second prize: ${secondPrize.studentName} - Score: ${secondPrize.score}`);


