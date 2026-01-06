let productLocal = JSON.parse(localStorage.getItem("products")) || [];
const userLogin = document.getElementById("userLogin");
const avatar = document.getElementById("avatar");
const menu = document.getElementById("menu");
const logout = document.getElementById("logout");
const tblContent = document.getElementById("tbl-content");
let currentPage = 1;
const itemsPerPage = 4;
const pagination = document.getElementById("pagination");
let filteredProducts = [...productLocal];
const searchInput = document.getElementById("searchInput");
const statusSelect = document.getElementById("status");
const sortCode = document.getElementById("sortCode");
const sortCodeMenu = document.getElementById("sortCodeMenu");
const sortName = document.getElementById("sortName");
const sortNameMenu = document.getElementById("sortNameMenu");
const sortPrice = document.getElementById("sortPrice");
const sortPriceMenu = document.getElementById("sortPriceMenu");
const addProductBtn = document.getElementById("addProductBtn");
const productModal = document.getElementById("productModal");
const btnClose = document.getElementById("btnClose");
const btnCancel = document.getElementById("btnCancel");

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
    product_name: "Iphone 12 pro",
    category_id: 1,
    stock: 10,
    price: 12000000,
    discount: "0%",
    img: "https://example.com/image.jpg",
    status: "ACTIVE",
    description: "",
    created_at: "2021-01-01T00:00:00Z",
  },
  {
    id: 2,
    product_code: "SP002",
    product_name: "Samsung galaxy S20",
    category_id: 1,
    stock: 100,
    price: 21000000,
    discount: "5%",
    img: "https://example.com/image.jpg",
    status: "INACTIVE",
    description: "",
    created_at: "2021-01-01T00:00:00Z",
  },
  {
    id: 3,
    product_code: "SP003",
    product_name: "Iphone 8 plus",
    category_id: 1,
    stock: 10,
    price: 5000000,
    discount: "0%",
    img: "https://example.com/image.jpg",
    status: "ACTIVE",
    description: "",
    created_at: "2021-01-01T00:00:00Z",
  },
  {
    id: 4,
    product_code: "SP004",
    product_name: "Iphone 14 Pro max",
    category_id: 1,
    stock: 20,
    price: 25000000,
    discount: "2%",
    img: "https://example.com/image.jpg",
    status: "INACTIVE",
    description: "",
    created_at: "2021-01-01T00:00:00Z",
  },
  {
    id: 5,
    product_code: "SP005",
    product_name: "Oppo X3",
    category_id: 1,
    stock: 10,
    price: 2000000,
    discount: "5%",
    img: "https://example.com/image.jpg",
    status: "ACTIVE",
    description: "",
    created_at: "2021-01-01T00:00:00Z",
  },
  {
    id: 6,
    product_code: "SP006",
    product_name: "Iphone 16",
    category_id: 1,
    stock: 20,
    price: 20000000,
    discount: "3%",
    img: "https://example.com/image.jpg",
    status: "INACTIVE",
    description: "",
    created_at: "2021-01-01T00:00:00Z",
  },
  {
    id: 7,
    product_code: "SP007",
    product_name: "Iphone 7 plus",
    category_id: 1,
    stock: 10,
    price: 4000000,
    discount: "4%",
    img: "https://example.com/image.jpg",
    status: "ACTIVE",
    description: "",
    created_at: "2021-01-01T00:00:00Z",
  },
  {
    id: 8,
    product_code: "SP008",
    product_name: "Samsung S20 Ultra",
    category_id: 1,
    stock: 15,
    price: 30000000,
    discount: "2%",
    img: "https://example.com/image.jpg",
    status: "ACTIVE",
    description: "",
    created_at: "2021-01-01T00:00:00Z",
  },
];

if (!localStorage.getItem("products")) {
  localStorage.setItem("products", JSON.stringify(products));
}

// lấy số trang
function getPageCount() {
  return Math.ceil(filteredProducts.length / itemsPerPage);
}

// xử lý đóng mở sort code
sortCode.addEventListener("click", function (e) {
  e.stopPropagation();
  sortCodeMenu.style.display =
    sortCodeMenu.style.display === "block" ? "none" : "block";
});
document.addEventListener("click", function () {
  sortCodeeMenu.style.display = "none";
});

// xử lý đóng mở sort name
sortName.addEventListener("click", function (e) {
  e.stopPropagation();
  sortNameMenu.style.display =
    sortNameMenu.style.display === "block" ? "none" : "block";
});
document.addEventListener("click", function () {
  sortNameMenu.style.display = "none";
});

// xử lý đóng mở sort price
sortPrice.addEventListener("click", function (e) {
  e.stopPropagation();
  sortPriceMenu.style.display =
    sortPriceMenu.style.display === "block" ? "none" : "block";
});
document.addEventListener("click", function () {
  sortPriceMenu.style.display = "none";
});

// function reset and close
function resetAndClose(){
  // đóng modal
  productModal.style.display = "none";
}
// xử lý đóng mở modal
addProductBtn.addEventListener("click", function(e){
  e.stopPropagation();
  productModal.style.display =
  productModal.style.display === "flex" ? "none" : "flex";
});
btnCancel.addEventListener("click", function () {
  resetAndClose();
});
btnClose.addEventListener("click", function () {
  resetAndClose();
});

function formatPrice(price) {
  return new Intl.NumberFormat("vi-VN").format(price) + " đ";
}

//-----------------------------------------------
// content render
function render(page) {
  tblContent.innerHTML = "";

  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;

  const data = filteredProducts.slice(start, end);

  for (let i in data) {
    const div_item = document.createElement("div");
    div_item.className = "row";
    tblContent.appendChild(div_item);

    const div_code = document.createElement("div");
    div_code.className = "item-nor item1";
    div_code.innerHTML = data[i].product_code;
    div_item.appendChild(div_code);

    const div_name = document.createElement("div");
    div_name.className = "item-nor item2";
    div_name.innerHTML = data[i].product_name;
    div_item.appendChild(div_name);

    const div_price = document.createElement("div");
    div_price.className = "item-nor item3";
    div_price.innerHTML = formatPrice(data[i].price);
    div_item.appendChild(div_price);

    const div_stock = document.createElement("div");
    div_stock.className = "item-nor item4";
    div_stock.innerHTML = data[i].stock;
    div_item.appendChild(div_stock);

    const div_discount = document.createElement("div");
    div_discount.className = "item-nor item5";
    div_discount.innerHTML = data[i].discount;
    div_item.appendChild(div_discount);

    if (data[i].status === "INACTIVE") {
      const div_status = document.createElement("div");
      div_status.className = "item-nor item6 inactive";
      div_status.innerHTML =
        '<span class = "inactive-box">● Ngừng hoạt động</span>';
      div_item.appendChild(div_status);
    } else if (data[i].status === "ACTIVE") {
      const div_status = document.createElement("div");
      div_status.className = "item-nor item6 active";
      div_status.innerHTML =
        '<span class = "active-box">● Đang hoạt động</span>';
      div_item.appendChild(div_status);
    }

    const div_function = document.createElement("div");
    div_function.className = "item-nor item7";
    div_function.innerHTML = `
        <img src="../images/trash_bin.png" alt="" class="function-icon deleteItem" data-id="${data[i].id}">
        <img src="../images/pencil.png" alt="" class="function-icon editItem" data-id="${data[i].id}">
    `;
    div_item.appendChild(div_function);
  }
}

// page button render
function renderPagination() {
  pagination.innerHTML = "";
  const pageCount = getPageCount();

  // PREV
  const prevBtn = document.createElement("button");
  prevBtn.className = "pageBtn";
  prevBtn.textContent = "←";
  prevBtn.disabled = currentPage === 1;
  prevBtn.onclick = () => {
    if (currentPage > 1) {
      currentPage--;
      render(currentPage);
      renderPagination();
    }
  };
  pagination.appendChild(prevBtn);

  // PAGE NUMBER
  for (let i = 1; i <= pageCount; i++) {
    const btn = document.createElement("button");
    btn.className = "pageBtn";
    btn.textContent = i;

    if (i === currentPage) btn.classList.add("activePage");

    btn.onclick = () => {
      currentPage = i;
      render(currentPage);
      renderPagination();
    };

    pagination.appendChild(btn);
  }

  // NEXT
  const nextBtn = document.createElement("button");
  nextBtn.className = "pageBtn";
  nextBtn.textContent = "→";
  nextBtn.disabled = currentPage === pageCount;
  nextBtn.onclick = () => {
    if (currentPage < pageCount) {
      currentPage++;
      render(currentPage);
      renderPagination();
    }
  };
  pagination.appendChild(nextBtn);
}

// function filter
function applyFilter() {
  const keyword = searchInput.value.toLowerCase().trim();
  const status = statusSelect.value;

  filteredProducts = productLocal.filter((item) => {
    // filter theo tên
    const matchName = item.product_name.toLowerCase().includes(keyword);

    // filter theo trạng thái
    let matchStatus = true;
    if (status === "on") matchStatus = item.status === "ACTIVE";
    if (status === "off") matchStatus = item.status === "INACTIVE";

    return matchName && matchStatus;
  });

  currentPage = 1; // reset về trang 1
  render(currentPage);
  renderPagination();
}

// sort function
function sortCategories(type) {
  const map = {
    name_asc: (a, b) => a.product_name.localeCompare(b.product_name),
    name_desc: (a, b) => b.product_name.localeCompare(a.product_name),
    code_asc: (a, b) => a.product_code.localeCompare(b.product_code),
    code_desc: (a, b) => b.product_code.localeCompare(a.product_code),
    price_asc: (a, b) => a.price - b.price,
    price_desc: (a, b) => b.price - a.price,
  };

  filteredProducts.sort(map[type]);

  currentPage = 1;
  render(currentPage);
  renderPagination();
}

// main progran
render(currentPage);
renderPagination();

searchInput.addEventListener("input", applyFilter);
statusSelect.addEventListener("change", applyFilter);

sortCodeMenu.addEventListener("click", (e) => {
  const type = e.target.dataset.sort;
  if (type) sortCategories(type);
});

sortNameMenu.addEventListener("click", (e) => {
  const type = e.target.dataset.sort;
  if (type) sortCategories(type);
});

sortPriceMenu.addEventListener("click", (e) => {
  const type = e.target.dataset.sort;
  if (type) sortCategories(type);
});
