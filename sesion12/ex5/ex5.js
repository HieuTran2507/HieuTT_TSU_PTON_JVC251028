let bai = prompt(`nhập bài số (1-7)`);
let f0 = 0,
  f1 = 1;
switch (bai) {
  case `1`:
    console.log(f0);
    console.log(f1);
    for (let i = 2; i < 20; i++) {
      let fn = f0 + f1;
      console.log(fn);
      f0 = f1;
      f1 = fn;
    }
    break;
  case `2`:
    let giaithua = Number(prompt("nhập số giai thừa"));
    let giaithua_result = 1;
    for (let i = 1; i <= giaithua; i++) {
      giaithua_result *= i;
    }
    console.log(giaithua_result);
    break;
  case `3`:
    console.log("hinh 1");
    for (let i = 1; i <= 5; i++) {
      console.log("*".repeat(i));
    }
    console.log("hinh 2");
    for (let i = 5; i >= 1; i--) {
      console.log("*".repeat(i));
    }
    console.log("hinh 3");
    for (let i = 1; i <= 5; i++) {
      console.log(" ".repeat(5 - i) + "*".repeat(i));
    }
    console.log("hinh 4");
    for (let i = 5; i >= 1; i--) {
      console.log(" ".repeat(5 - i) + "*".repeat(i));
    }
    break;
  case `4`:
    let width = 21;
    let height = 7;
    for (let i = 0; i < height; i++) {
      if (i === 0 || i === height - 1) {
        // dòng đầu và dòng cuối: in toàn *
        console.log("*".repeat(width));
      } else {
        // các dòng giữa: * + khoảng trắng + *
        console.log("*" + " ".repeat(width - 2) + "*");
      }
    }
    break;
  case `5`:
    let tien = Number(prompt("nhap so tien vay"));
    let thang = Number(prompt("nhap so thang vay"));
    let laisuat = Number(prompt("nhap lai suat % vay"));
    for (let i = 1; i <= thang; i++) {
      tien += (tien * laisuat) / 100;
    }
    console.log(tien);
    break;
  default:
    alert(` ${bai} không có trong danh sách `);
    break;
}
