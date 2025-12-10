// bai 1
// b1: nhập mảng 10 số nguyên
const numbers = [];

for(let i = 0; i<10; i++){
    let number = +prompt(`nhập số thứ ${i}`);
    // kiểm tra dữ liệu nhập vào không phải là số
    while(isNaN(number)){
        number = +prompt(` giá trị không phải là số, nhập lại`);
    }
    // thêm phần tử vào trong mảng
    numbers.push(number);
}
const arr = [];
// b2: duyệt qua mảng
for (let i = 0; i < numbers.length-1; i++){
    // b3: kiểm tra điều kiện
    if(numbers[i]>=10){
        arr.push(numbers[i]);
    }
}
// b4: trả về kết quả
console.log(arr);


// bai 2