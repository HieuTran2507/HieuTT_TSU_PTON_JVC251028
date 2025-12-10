// khai báo đối tượng
const product = {
    id: 1,
    product_name: "iphone 12",
    price: 12000000,
    address: "HN, VN",
    color: "white"
}

console.log("product id: ", product.id);
console.log("product price: ", product['price']);

for (const key in product) {
    console.log(key);
}
for (const key in product) {
    console.log(key + ' - '+ product[key]);
}

// 2. thêm key - value vào trong đối tượng
product.quantity = 100;
product.discount = "10%";

// 3. cập nhật giá trị trong đối tượng
product.quantity = 1000;

// 4. xóa dữ liệu
console.log(product.color);
delete product.color;
console.log(product);
console.log(product.color);