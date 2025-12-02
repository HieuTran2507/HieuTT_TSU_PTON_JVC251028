let arr = [9,19,29,39,49,59,69,79,89,99];
let num = Number(prompt(`nhap so bat ky`));
let bingo = false;
for(let i in arr){
    if(num === arr[i]){
        bingo = true;
        break;
    }
}
if(bingo === true){
    alert(`${num} bingo`);
}
else{
    alert(`${num} chuc ban may man lan sau`);
}