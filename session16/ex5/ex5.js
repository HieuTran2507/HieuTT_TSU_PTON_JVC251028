function isPalindrome(arr){

    for(let i in arr){
        if(arr[i] !== arr[arr.length-i-1]) return false;
    }
    return true;
}
let str = prompt(` nhập chuổi cần kiểm tra `);
if(isPalindrome(str)==true) alert(` chuỗi đối xứng `);
else alert(` chuỗi không đối xứng `);
