let num = prompt(`nhap vao day so cach nhau bang khoang cach`);
let arrNum = num.split(" ");
let sumEven = sumOdd = 0;
let temp;
for(let i in arrNum){
    temp = Number(arrNum[i]);
    if(temp%2==0) sumEven += temp;
    else sumOdd += temp;
}
console.log(`tong so chan: ${sumEven}`);
console.log(`tong so le: ${sumOdd}`);