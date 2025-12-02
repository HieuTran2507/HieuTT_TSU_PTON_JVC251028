let num = prompt(`nhap vao day so cach nhau bang khoang cach`);
let arrNum = num.split(" ");
let max = arrNum[0];
for (let i in arrNum){
    if(max>arrNum[i]) max = max;
    else max = arrNum[i];
}
console.log(`so lon nhat la ${max}`);