let year = Number(prompt("nhap nam:"));
if (year % 4 === 0 && year % 100 !== 0) {
  alert(`${year} là năm nhuận`);
} else {
  alert(`${year} không phải năm nhuận`);
}
