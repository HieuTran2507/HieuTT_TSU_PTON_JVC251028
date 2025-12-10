const numbers = [10, 20, 30, 40, 50, 60, 100]
const numbersLenght = numbers.length;

// CRUD (create - read - update - delete)
// 1) đọc dữ liệu
// 1.1) đọc từng phần tử dựa vào chỉ số
console.log('giá trị phần tử đầu tiên: ',numbers[0]);
console.log('giá trị phần tử thứ hai: ',numbers[1]);
console.log('giá trị phần tử cuối cùng: ',numbers[numbersLenght-1]);

// 1.2) đọc tất cả các phần tử trong mảng
// for(let i of numbers) console.log(i);
// for(let i in numbers) console.log(i);
for(let i = 0; i< numbersLenght; i++){
    console.log(numbers[i]);
}
console.log("---------------------");
// duyệt theo chiều ngược
for(let i = numbersLenght -1 ; i>=0; i--){
    console.log(numbers[i]);
}

// 2) thêm phần tử vào mảng
// 2.1) thêm phần tử cuối mảng
numbers.push(110,120,130);
// 2.2) thêm phần tử vào đầu mảng
numbers.unshift(5,4,3,2,1);
// 2.3) thêm phần tử vào vị trí bất kỳ
numbers.splice(0, 0, 2.5, 12);
// 3) cập nhật phần tử trong mảng
numbers[0] = 3.5;
numbers[1] = 4.5;
// 4) xóa phần tử trong mảng
// 4.1) xóa phần tử cuối mảng
numbers.pop();
numbers.pop();
// 4.2) xóa phần tử đầu mảng
numbers.shift();
numbers.shift();
numbers.splice(1,2);

console.log('mảng numbers: ',numbers);
console.log('độ dài mảng: ', numbersLenght);
