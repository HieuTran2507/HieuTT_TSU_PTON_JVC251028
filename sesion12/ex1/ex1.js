let bai = prompt(`nhập bài số (1-5)`);
switch (bai){
    case`1`:
    let a = Number(prompt(`nhập số a`));
    let b = Number(prompt(`nhập số b`));
    let c = a%b;
    if(c===0) {
        alert(`${a} chia hết cho ${b}`);
    } else{
        alert(`${a} không chia hết cho ${b}`);
    }
    break;
    case`2`:
    let tuoi =  Number(prompt(`nhập số tuổi`));
    if(tuoi < 16) {
        alert(`${tuoi} tuổi, không đủ điều kiện vào học lớp 10 `);
    } else{
        alert(`${tuoi} tuổi, đủ điều kiện vào học lớp 10`);
    }
    break;
    case`3`:
    let ranNum = Number(prompt(`nhập số bất kỳ`));
    if(ranNum >0) {
        alert(`${ranNum} > 0`);
    } else if (ranNum < 0){
        alert(`${ranNum} < 0`);
    } else{alert(`${ranNum} = 0`);}
    break;
    case`4`:
    let num1 = Number(prompt(` nhập số thứ nhât `));
    let num2 = Number(prompt(` nhập số thứ hai `));
    let num3 = Number(prompt(` nhập số thứ ba `));
    let max = Math.max(num1,num2,num3);
    alert(` số lớn nhất là: ${max}`);
    break;
    case`5`:
    let grade1 = Number(prompt(` nhập điểm kiểm tra `));
    let grade2 = Number(prompt(` nhập điểm giữa kỳ `));
    let grade3 = Number(prompt(` nhập điểm cuối kỳ `));
    let avg = (grade1 + grade2 + grade3) / 3;
    if(avg>=9){
        alert(`${avg}đ, xuất sắc`);
    } else if(avg>=8 && avg<9){
        alert(`${avg}đ, giỏi`);
    }else if(avg>=7 && avg<8){
        alert(`${avg}đ, khá`);
    }else if(avg>=5 && avg<7){
        alert(`${avg}đ, trung bình`);
    }else{
        alert(`${avg}đ, yếu`);
    }
    break;
    default: 
    alert(`không có trong danh sách bải tập`);
    break;
}