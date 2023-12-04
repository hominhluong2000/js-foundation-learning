// Viết 1 function để chia bài tiến lên. 
// Tham số truyền vào sẽ là số người chơi, kết quả trả về là một mảng gồm n mảng con, mỗi mảng con là 1 phần bài của 1 người gồm 13 lá bài. 
// Lưu ý, mỗi lần chia bài tương ứng mỗi lần gọi hàm sẽ trả về các phần bài khác nhau. 
// Số người chơi tiến lên tối thiểu là 2, tối đa là 4
const allPoker = {
  "1a": "Át cơ",
  "1b": "Át rô",
  "1c": "Át chuồn",
  "1d": "Át bích",
  "2a": "2 cơ",
  "2b": "2 rô",
  "2c": "2 chuồn",
  "2d": "2 bích",
  "3a": "3 cơ",
  "3b": "3 rô",
  "3c": "3 chuồn",
  "3d": "3 bích",
  "4a": "4 cơ",
  "4b": "4 rô",
  "4c": "4 chuồn",
  "4d": "4 bích",
  "5a": "5 cơ",
  "5b": "5 rô",
  "5c": "5 chuồn",
  "5d": "5 bích",
  "6a": "6 cơ",
  "6b": "6 rô",
  "6c": "6 chuồn",
  "6d": "6 bích",
  "7a": "7 cơ",
  "7b": "7 rô",
  "7c": "7 chuồn",
  "7d": "7 bích",
  "8a": "8 cơ",
  "8b": "8 rô",
  "8c": "8 chuồn",
  "8d": "8 bích",
  "9a": "9 cơ",
  "9b": "9 rô",
  "9c": "9 chuồn",
  "9d": "9 bích",
  "10a": "10 cơ",
  "10b": "10 rô",
  "10c": "10 chuồn",
  "10d": "10 bích",
  "11a": "J cơ",
  "11b": "J rô",
  "11c": "J chuồn",
  "11d": "J bích",
  "12": "Q cơ",
  "12": "Q rô",
  "12": "Q chuồn",
  "12": "Q bích",
  "13a": "K cơ",
  "13b": "K rô",
  "13c": "K chuồn",
  "13d": "K bích",
};

function getRandomElementFromObject(obj) {
  // Lấy danh sách các key trong đối tượng
  let keys = Object.keys(obj);

  // Sinh một số ngẫu nhiên từ 0 đến độ dài của danh sách keys
  let randomKey = keys[Math.floor(Math.random() * keys.length)];
  // Trả về giá trị tương ứng với key ngẫu nhiên
  return obj[randomKey];
}

// Sử dụng hàm để lấy một giá trị ngẫu nhiên từ đối tượng
function arrPeople() {
  let arrPeople = [];
  for (let i = 1; i <= 13; i++) {
    let randomValue = getRandomElementFromObject(allPoker);
    if (arrPeople.includes(randomValue)) // nghiên cứu dùng switch điều kiện, nghiên cứu bài mỗi người phải khác nhau
    {
      randomValue = getRandomElementFromObject(allPoker);
    }
    else if (!arrPeople.includes(randomValue)) {
      arrPeople.push(randomValue);
    }
  }
  return arrPeople;
}

function tienLen(people) {
  if (typeof people == 'number' && people >= 2 && people <= 4) {
    let bai = {};
    if (people == 2) {
      bai = {
        people1: arrPeople(),
        people2: arrPeople()
      };
    }
    else if (people == 3) {
      bai = {
        people1: arrPeople(),
        people2: arrPeople(),
        people3: arrPeople()
      };
    }
    else if (people == 4) {
      bai = {
        people1: arrPeople(),
        people2: arrPeople(),
        people3: arrPeople(),
        people4: arrPeople()
      };
    }
    return bai;
  }
  else {
    console.log("In correct");
  }
}

console.log(tienLen(2));