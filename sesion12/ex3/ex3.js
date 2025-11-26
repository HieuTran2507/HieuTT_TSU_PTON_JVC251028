// số nguyên tố chỉ chia hết cho 1 và chính nó
function check(n){
    if (n<2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

let count = 0;
let number = 2;
let so_nguyen_to = [];

while (count < 20) {
  if (check(number)) {
    so_nguyen_to.push(number);
    count++;
  }
  number++;
}

console.log("20 số nguyên tố đầu tiên:");
console.log(so_nguyen_to);