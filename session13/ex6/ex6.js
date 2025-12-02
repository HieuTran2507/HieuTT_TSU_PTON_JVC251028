let arr = [1,2,3,1,2,3,4,5,6,4,5,6,1,2,3];
let num = Number(prompt(`nhap so bat ki`));
let count = 0;
for(let i in arr){
    if(num === arr[i]) count++;
}
console.log(`so lan xuat hien la ${count}`);