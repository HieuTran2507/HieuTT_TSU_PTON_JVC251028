let out = true;
let username, age, num, N, dayso = null;
function checksonguyento(n){
    if (n <= 1) return false;          // 0, 1, số âm → không phải
    if (n === 2) return true;          // 2 là số nguyên tố
    if (n % 2 === 0) return false;     // số chẵn > 2 → không phải

    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i === 0) return false; // tìm thấy ước → không phải
    }
    return true;                       // không có ước → nguyên tố
}
while(out == true){
    let option = Number(prompt(`nhap lua chon 1-10`));
    switch (option){
        case 1:
            username = prompt(`nhap ten nguoi dung`);
            break;
        case 2:
            age = prompt(`nhap tuoi nguoi dung`);
            break;
        case 3:
            console.log(`ho ten: ${username}, tuoi: ${age}`);
            break;
        case 4:
            for(let i = 1; i<=10; i++){
                console.log(`9*${i} = ${9*i}`);
            }
            break;
        case 5:
            num = Number(prompt(`nhap vao 1 so de kiem tra chan hay le`));
            if(num%2===0) console.log(`so chan`);
            else console.log(`so le`);
            break;
        case 6:
            N = Number(prompt(`nhap vao N so can cong`));
            let sum = 0;
            for (let i = 1; i<=N; i++){
                sum += i;
            }
            console.log(sum);
            break;
        case 7:
            dayso = prompt(`nhap day so`);
            console.log(dayso);
            break;
        case 8:
            let a = Number(prompt(`nhap so bat ki`));
            if (checksonguyento(a) == true) console.log(`${a} la so nguyen to`);
            else console.log(`${a} khong phai la so nguyen to`);
            break;
        case 9:
            let str = prompt(`nhap chuoi can dao nguoc`);
            let strrev = str.split("").reverse().join("");
            console.log(`chuoi dao nguoc: ${strrev}`);
            break;
        case 10:
            out = false;
            break;
        default:
            alert(`khong nam trong danh sach lua chon`);
            break
    }
    
}