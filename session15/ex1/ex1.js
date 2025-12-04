let ctrl = true;
function bai1(){
    let arr = prompt(`nhập vào dãy số cách nhau bằng khoảng trống`);
    let arrSplit = arr.split(" ");
    let arr10 = [];
    for(let i in arrSplit){
        if(arrSplit[i]>=10) arr10.push(arrSplit[i]);
    }
    if( arr10.length === 0) console.log("không có số nào lớn hơn hoặc bằng 10");
    else {
        console.log("các số lớn hơn 10 là");
        for(let i in arr10) console.log(arr10[i]);
    }
}
function bai2(){
    let arr = prompt(`nhập vào dãy số cách nhau bằng khoảng trống`);
    let arrSplit = arr.split(" ");
    let max = arrSplit[0];
    for(let i in arrSplit){
        if(arrSplit[i]>max ) max = arrSplit[i];
    }
    console.log(`số lớn nhất là ${max}`);
}
function bai3(){
    let arr = prompt(`nhập vào dãy số cách nhau bằng khoảng trống`);
    let arrSplit = arr.split(" ");
    let max = arrSplit[0];
    let avg = 0;
    for(let i in arrSplit){
        if(arrSplit[i]>max ) max = arrSplit[i];
        avg += parseInt(arrSplit[i]);
    }
    avg = avg/arrSplit.length;
    console.log(`số lớn nhất là ${max}`);
    console.log(`giá trị trung bình ${avg}`);
}
function bai4(){
    let arr = prompt(`nhập mảng cần đảo ngược`);
    let arrRev = arr.split("").reverse().join("");
    console.log(arrRev);
}
function bai5(){
    let arr = prompt(`nhập vào dãy số cách nhau bằng khoảng trống`);
    let arrSplit = arr.split(" ");
    let arrnegative = [];
    for(let i in arrSplit){
        if(arrSplit[i]<0) arrnegative.push(arrSplit[i]);
    }
    console.log(`các số âm trong mảng là`);
    for(let i in arrnegative) console.log(arrnegative[i]);
}
function bai6(){
    let arr = prompt(`nhập vào dãy số cách nhau bằng khoảng trống`);
    let num = prompt(`nhập vào một số bất kì`);
    let arrSplit = arr.split(" ");
    let check = false;
    for(let i in arrSplit){
        if(num === arrSplit[i]) check = true;
    }
    if(check === true) console.log(`tìm thấy ${num} trong dãy số`);
    else console.log(`không tìm thấy ${num} số trong dãy`);
}
function bai7(){
    let arr = prompt(`nhập vào dãy số cách nhau bằng khoảng trống`);
    let arrSplit = arr.split(" ");
    let arrNum = [];
    for(let i in arrSplit){
        arrNum.push(Number(arrSplit[i]));
    }
    arrNum.sort(function(a,b){
        return b - a;
    });
    console.log(arrNum);
}
function bai8(){
    let arrA = prompt(`nhập mảng A`);
    let arrB = prompt(`nhập mảng B`);
    let arrC = arrB.concat(arrA);
    console.log(`nối mảng A, B: ${arrC}`);
}
while(ctrl){
    let option = Number(prompt(`nhập số bài 1-8 \nnhập 9 để thoát`));
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
            bai6();
            break;
        case 7:
            bai7();
            break;
        case 8:
            bai8();
            break;
        case 9:
            console.log(`kết thúc chương trình`);
            ctrl = false;
            break;
        default: 
            console.log(`không có trong danh sách bài tập`);
            break;
    }
}