let productLocal = JSON.parse(localStorage.getItem("products")) || [];
const userLogin = document.getElementById("userLogin");
const avatar = document.getElementById("avatar");
const menu = document.getElementById("menu");
const logout = document.getElementById("logout");
const tblContent = document.getElementById("tbl-content");
let currentPage = 1;
const itemsPerPage = 4;
let filteredProducts = [...productLocal];

const userLoginLocal = JSON.parse(localStorage.getItem("userLogin"));

// show user name
if (userLoginLocal) {
  userLogin.innerHTML =
    userLoginLocal.first_name + " " + userLoginLocal.last_name;
} else {
  userLogin.innerHTML = "";
}

// logout
menu.style.display = "none";
avatar.addEventListener("click", function (e) {
  e.stopPropagation();
  if (menu.style.display === "none") menu.style.display = "block";
  else menu.style.display = "none";
});

logout.addEventListener("click", function () {
  const isLogout = confirm("Bạn có chắc muốn đăng xuất không?");
  if (isLogout) {
    localStorage.removeItem("userLogin");
    window.location.href = "login.html";
  }
});

// insert data
let products = [
    {
        id: 1,
        product_code: "SP001",
        product_code: "Iphone 12 pro",
        category_id: 1,
        stock: 10,
        price:"12.000.000 đ",
        discount: "0%",
        img: "https://example.com/image.jpg",
        status: "ACTIVE",
        description:"",
        created_at:"2021-01-01T00:00:00Z"
    },
    {
        id: 2,
        product_code: "SP002",
        product_code: "Samsung galaxy S20",
        category_id: 1,
        stock: 100,
        price:"21.000.000 đ",
        discount: "5%",
        img: "https://example.com/image.jpg",
        status: "INACTIVE",
        description:"",
        created_at:"2021-01-01T00:00:00Z"
    },
    {
        id: 3,
        product_code: "SP003",
        product_code: "Iphone 8 plus",
        category_id: 1,
        stock: 10,
        price:"5.000.000 đ",
        discount: "0%",
        img: "https://example.com/image.jpg",
        status: "ACTIVE",
        description:"",
        created_at:"2021-01-01T00:00:00Z"
    },
    {
        id: 4,
        product_code: "SP004",
        product_code: "Iphone 14 Pro max",
        category_id: 1,
        stock: 20,
        price:"25.000.000 đ",
        discount: "2%",
        img: "https://example.com/image.jpg",
        status: "INACTIVE",
        description:"",
        created_at:"2021-01-01T00:00:00Z"
    },
    {
        id: 5,
        product_code: "SP005",
        product_code: "Oppo X3",
        category_id: 1,
        stock: 10,
        price:"2.000.000 đ",
        discount: "5%",
        img: "https://example.com/image.jpg",
        status: "ACTIVE",
        description:"",
        created_at:"2021-01-01T00:00:00Z"
    },
    {
        id: 6,
        product_code: "SP006",
        product_code: "Iphone 16",
        category_id: 1,
        stock: 20,
        price:"20.000.000 đ",
        discount: "3%",
        img: "https://example.com/image.jpg",
        status: "INACTIVE",
        description:"",
        created_at:"2021-01-01T00:00:00Z"
    },
    {
        id: 7,
        product_code: "SP007",
        product_code: "Iphone 7 plus",
        category_id: 1,
        stock: 10,
        price:"4.000.000 đ",
        discount: "4%",
        img: "https://example.com/image.jpg",
        status: "ACTIVE",
        description:"",
        created_at:"2021-01-01T00:00:00Z"
    },
    {
        id: 8,
        product_code: "SP008",
        product_code: "Samsung S20 Ultra",
        category_id: 1,
        stock: 15,
        price:"30.000.000 đ",
        discount: "2%",
        img: "https://example.com/image.jpg",
        status: "ACTIVE",
        description:"",
        created_at:"2021-01-01T00:00:00Z"
    }
];

if (!localStorage.getItem("products")) {
  localStorage.setItem("products", JSON.stringify(products));
}

// lấy số trang
function getPageCount() {
  return Math.ceil(filteredProducts.length / itemsPerPage);
}

//-----------------------------------------------
// content render
function render(page){
    tblContent.innerHTML = "";

    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    const data = filteredProducts.slice(start, end);

}

// main progran
render(currentPage);
renderPagination();