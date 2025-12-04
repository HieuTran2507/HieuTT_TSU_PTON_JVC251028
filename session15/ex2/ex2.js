let ctrl = true;
function bai1(){
    let arr = prompt(` Nhập mảng cần đảo ngược`);
    let arrRev = arr.split("").reverse().join("");
    console.log(arrRev);
}
function bai2(){
    let arr = prompt(`nhap vao mang chu va so`);
    let arrNum = [];
    for (i in arr){
        if(arr[i]!=" "){if(isNaN(arr[i])===false) arrNum.push(arr[i]);}
    };
    console.log(`các chữ số trong mảng: ${arrNum}`);
}
function bai3(){
    let arr = prompt(`nhập vào chuỗi bất kì`);
    let k = 0;
    for(let i in arr) if(arr[i]!=" ") k++;
    console.log(`số ký tự trong chuỗi là ${k}`);
}
function bai4(){
    let str1 = prompt(`nhập chuỗi 1`);
    let str2 = prompt(`nhập chuỗi 2`);
    if(str1 === str2) console.log(`2 chuỗi giống nhau`);
    else console.log(`2 chuỗi khác nhau`);
}
function bai5(){
    let str = prompt(`nhập chuỗi bất kì`);
    let strSplit = str.split("-");
    let strJoin = strSplit.join("_");
    console.log(strJoin);
}

while(ctrl){
    let option = Number(prompt(`nhập số bài 1-5 \nnhập 6 để thoát`));
    switch(option){
        case 1:
            bai1();
            break;
        case 2:
            bai2();
            break;
        case 3:
            bai3();
            break;
        case 4:
            bai4();
            break;
        case 5:
            bai5();
            break;
        case 6:
            console.log(`kết thúc chương trình`);
            ctrl = false;
            break;
        default: 
            console.log(`không có trong danh sách bài tập`);
            break;
    }
}