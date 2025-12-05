function isEven(a){
    if(a%2===0) return true;
    else return false;
}
let a = +prompt(` nhập số cần kiểm tra `);
if(isEven(a)===true) alert(` số chẵn`);
else alert(` số lẻ`);