let w = Number(prompt("nhập cân nặng (kg)"));
let h = Number(prompt("nhập cân chiều cao (m)"));
let bmi = w / (h * h);
if (bmi < 18.5) {
  alert(`bmi = ${bmi}, cân nặng thấp (gầy)`);
} else if (18.5 <= bmi && bmi <= 24.9) {
  alert(`bmi = ${bmi}, bình thường`);
} else if (25 <= bmi && bmi <= 29.9) {
  alert(`bmi = ${bmi}, tiền béo phì`);
} else if (30 <= bmi && bmi <= 34.9) {
  alert(`bmi = ${bmi}, béo phì độ 1`);
} else if (35 <= bmi && bmi <= 39.9) {
  alert(`bmi = ${bmi}, béo phì độ 2`);
} else {
  alert(`bmi = ${bmi}, béo phì độ 3`);
}
