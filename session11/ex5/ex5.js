let w = Number(prompt("nhập cân nặng (kg)"));
let h = Number(prompt("nhập cân chiều cao (m)"));
let bmi = w / (h * h);
if (bmi < 18.5) {
  alert("cân nặng thấp (gầy)");
} else if (18.5 <= bmi <= 24.9) {
  alert("bình thường");
} else if (25 <= bmi <= 29.9) {
  alert("tiền béo phì");
} else if (30 <= bmi <= 34.9) {
  alert("béo phì độ 1");
} else if (35 <= bmi <= 39.9) {
  alert("béo phì độ 2");
} else {
  alert("béo phì độ 3");
}
