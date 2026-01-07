let productLocal = JSON.parse(localStorage.getItem("products")) || [];
let categoryLocal = JSON.parse(localStorage.getItem("categories")) || [];

const userLogin = document.getElementById("userLogin");
const avatar = document.getElementById("avatar");
const menu = document.getElementById("menu");
const logout = document.getElementById("logout");
const tblContent = document.getElementById("tbl-content");
let currentPage = 1;
const itemsPerPage = 5;
const pagination = document.getElementById("pagination");
let filteredProducts = [...productLocal];
const searchInput = document.getElementById("searchInput");
const statusSelect = document.getElementById("status");
const categorySelect = document.getElementById("category");
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
const btnAddProduct = document.getElementById("btnAddProduct");
const addProductCode = document.getElementById("addProductCode");
const addProductName = document.getElementById("addProductName");
const addProductCategory = document.getElementById("addProductCategory");
const addProductStock = document.getElementById("addProductStock");
const addProductPrice = document.getElementById("addProductPrice");
const addProductDiscount = document.getElementById("addProductDiscount");
const addProductPicture = document.getElementById("addProductPicture");
const addProductDescription = document.getElementById("addProductDescription");
const errProductCode = document.getElementById("errProductCode");
const errProductName = document.getElementById("errProductName");
const errProductCategory = document.getElementById("errProductCategory");
const errProductPrice = document.getElementById("errProductPrice");
const errProductPicture = document.getElementById("errProductPicture");
const errProductStock = document.getElementById("errProductStock");
let isEditMode = false;
let editingProductId = null;

const userLoginLocal = JSON.parse(localStorage.getItem("userLogin"));

// --------------- INSERT DATA -----------------------
let products = [
  // ===== QUẦN ÁO (1) =====
  { id: 1, product_code: "SP001", product_name: "Quần jeans nam", category_id: 1, stock: 50, price: 450000, discount: "10%", img: "https://example.com/image.jpg", description: "mô tả sản phẩm", status: "ACTIVE", created_at: "2021-01-01T00:00:00Z" },
  { id: 2, product_code: "SP002", product_name: "Áo thun cotton", category_id: 1, stock: 80, price: 250000, discount: "0%", img: "https://example.com/image.jpg", description: "mô tả sản phẩm", status: "ACTIVE", created_at: "2021-01-01T00:00:00Z" },
  { id: 3, product_code: "SP003", product_name: "Áo sơ mi trắng", category_id: 1, stock: 60, price: 350000, discount: "5%", img: "https://example.com/image.jpg", description: "mô tả sản phẩm", status: "INACTIVE", created_at: "2021-01-01T00:00:00Z" },
  { id: 4, product_code: "SP004", product_name: "Quần tây công sở", category_id: 1, stock: 40, price: 500000, discount: "0%", img: "https://example.com/image.jpg", description: "mô tả sản phẩm", status: "ACTIVE", created_at: "2021-01-01T00:00:00Z" },
  { id: 5, product_code: "SP005", product_name: "Áo khoác nhẹ", category_id: 1, stock: 30, price: 650000, discount: "10%", img: "https://example.com/image.jpg", description: "mô tả sản phẩm", status: "ACTIVE", created_at: "2021-01-01T00:00:00Z" },

  // ===== KÍNH MÁT (2) =====
  { id: 6, product_code: "SP006", product_name: "Kính mát nam", category_id: 2, stock: 30, price: 800000, discount: "5%", img: "https://example.com/image.jpg", description: "mô tả sản phẩm", status: "ACTIVE", created_at: "2021-01-01T00:00:00Z" },
  { id: 7, product_code: "SP007", product_name: "Kính mát nữ", category_id: 2, stock: 25, price: 850000, discount: "10%", img: "https://example.com/image.jpg", description: "mô tả sản phẩm", status: "ACTIVE", created_at: "2021-01-01T00:00:00Z" },
  { id: 8, product_code: "SP008", product_name: "Kính chống tia UV", category_id: 2, stock: 40, price: 600000, discount: "0%", img: "https://example.com/image.jpg", description: "mô tả sản phẩm", status: "INACTIVE", created_at: "2021-01-01T00:00:00Z" },
  { id: 9, product_code: "SP009", product_name: "Kính thời trang", category_id: 2, stock: 35, price: 700000, discount: "5%", img: "https://example.com/image.jpg", description: "mô tả sản phẩm", status: "ACTIVE", created_at: "2021-01-01T00:00:00Z" },
  { id: 10, product_code: "SP010", product_name: "Kính phân cực", category_id: 2, stock: 20, price: 950000, discount: "10%", img: "https://example.com/image.jpg", description: "mô tả sản phẩm", status: "ACTIVE", created_at: "2021-01-01T00:00:00Z" },

  // ===== GIÀY DÉP (3) =====
  { id: 11, product_code: "SP011", product_name: "Giày sneaker", category_id: 3, stock: 60, price: 1200000, discount: "5%", img: "https://example.com/image.jpg", description: "mô tả sản phẩm", status: "ACTIVE", created_at: "2021-01-01T00:00:00Z" },
  { id: 12, product_code: "SP012", product_name: "Giày da nam", category_id: 3, stock: 40, price: 1500000, discount: "0%", img: "https://example.com/image.jpg", description: "mô tả sản phẩm", status: "INACTIVE", created_at: "2021-01-01T00:00:00Z" },
  { id: 13, product_code: "SP013", product_name: "Dép sandal", category_id: 3, stock: 70, price: 300000, discount: "0%", img: "https://example.com/image.jpg", description: "mô tả sản phẩm", status: "ACTIVE", created_at: "2021-01-01T00:00:00Z" },
  { id: 14, product_code: "SP014", product_name: "Giày thể thao", category_id: 3, stock: 55, price: 1300000, discount: "10%", img: "https://example.com/image.jpg", description: "mô tả sản phẩm", status: "ACTIVE", created_at: "2021-01-01T00:00:00Z" },
  { id: 15, product_code: "SP015", product_name: "Giày lười", category_id: 3, stock: 45, price: 900000, discount: "5%", img: "https://example.com/image.jpg", description: "mô tả sản phẩm", status: "ACTIVE", created_at: "2021-01-01T00:00:00Z" },

  // ===== THỜI TRANG NAM (4) =====
  { id: 16, product_code: "SP016", product_name: "Áo polo nam", category_id: 4, stock: 70, price: 350000, discount: "0%", img: "https://example.com/image.jpg", description: "mô tả sản phẩm", status: "ACTIVE", created_at: "2021-01-01T00:00:00Z" },
  { id: 17, product_code: "SP017", product_name: "Quần short nam", category_id: 4, stock: 60, price: 300000, discount: "5%", img: "https://example.com/image.jpg", description: "mô tả sản phẩm", status: "ACTIVE", created_at: "2021-01-01T00:00:00Z" },
  { id: 18, product_code: "SP018", product_name: "Áo khoác nam", category_id: 4, stock: 35, price: 700000, discount: "10%", img: "https://example.com/image.jpg", description: "mô tả sản phẩm", status: "INACTIVE", created_at: "2021-01-01T00:00:00Z" },
  { id: 19, product_code: "SP019", product_name: "Vest nam", category_id: 4, stock: 20, price: 2500000, discount: "0%", img: "https://example.com/image.jpg", description: "mô tả sản phẩm", status: "ACTIVE", created_at: "2021-01-01T00:00:00Z" },
  { id: 20, product_code: "SP020", product_name: "Áo len nam", category_id: 4, stock: 30, price: 550000, discount: "5%", img: "https://example.com/image.jpg", description: "mô tả sản phẩm", status: "ACTIVE", created_at: "2021-01-01T00:00:00Z" },

  // ===== THỜI TRANG NỮ (5) =====
  { id: 21, product_code: "SP021", product_name: "Váy liền thân", category_id: 5, stock: 40, price: 600000, discount: "10%", img: "https://example.com/image.jpg", description: "mô tả sản phẩm", status: "ACTIVE", created_at: "2021-01-01T00:00:00Z" },
  { id: 22, product_code: "SP022", product_name: "Áo blouse nữ", category_id: 5, stock: 55, price: 350000, discount: "0%", img: "https://example.com/image.jpg", description: "mô tả sản phẩm", status: "ACTIVE", created_at: "2021-01-01T00:00:00Z" },
  { id: 23, product_code: "SP023", product_name: "Quần jean nữ", category_id: 5, stock: 50, price: 450000, discount: "5%", img: "https://example.com/image.jpg", description: "mô tả sản phẩm", status: "ACTIVE", created_at: "2021-01-01T00:00:00Z" },
  { id: 24, product_code: "SP024", product_name: "Áo khoác nữ", category_id: 5, stock: 30, price: 750000, discount: "10%", img: "https://example.com/image.jpg", description: "mô tả sản phẩm", status: "INACTIVE", created_at: "2021-01-01T00:00:00Z" },
  { id: 25, product_code: "SP025", product_name: "Chân váy", category_id: 5, stock: 45, price: 400000, discount: "0%", img: "https://example.com/image.jpg", description: "mô tả sản phẩm", status: "ACTIVE", created_at: "2021-01-01T00:00:00Z" },

  // ===== HOA QUẢ (6) =====
  { id: 26, product_code: "SP026", product_name: "Táo đỏ", category_id: 6, stock: 100, price: 40000, discount: "0%", img: "https://example.com/image.jpg", description: "mô tả sản phẩm", status: "ACTIVE", created_at: "2021-01-01T00:00:00Z" },
  { id: 27, product_code: "SP027", product_name: "Chuối", category_id: 6, stock: 120, price: 30000, discount: "0%", img: "https://example.com/image.jpg", description: "mô tả sản phẩm", status: "ACTIVE", created_at: "2021-01-01T00:00:00Z" },
  { id: 28, product_code: "SP028", product_name: "Cam sành", category_id: 6, stock: 90, price: 45000, discount: "5%", img: "https://example.com/image.jpg", description: "mô tả sản phẩm", status: "ACTIVE", created_at: "2021-01-01T00:00:00Z" },
  { id: 29, product_code: "SP029", product_name: "Nho xanh", category_id: 6, stock: 60, price: 80000, discount: "10%", img: "https://example.com/image.jpg", description: "mô tả sản phẩm", status: "INACTIVE", created_at: "2021-01-01T00:00:00Z" },
  { id: 30, product_code: "SP030", product_name: "Xoài", category_id: 6, stock: 70, price: 50000, discount: "0%", img: "https://example.com/image.jpg", description: "mô tả sản phẩm", status: "ACTIVE", created_at: "2021-01-01T00:00:00Z" },

  // ===== RAU (7) =====
  { id: 31, product_code: "SP031", product_name: "Rau muống", category_id: 7, stock: 150, price: 15000, discount: "0%", img: "https://example.com/image.jpg", description: "mô tả sản phẩm", status: "ACTIVE", created_at: "2021-01-01T00:00:00Z" },
  { id: 32, product_code: "SP032", product_name: "Cải ngọt", category_id: 7, stock: 140, price: 18000, discount: "0%", img: "https://example.com/image.jpg", description: "mô tả sản phẩm", status: "ACTIVE", created_at: "2021-01-01T00:00:00Z" },
  { id: 33, product_code: "SP033", product_name: "Xà lách", category_id: 7, stock: 100, price: 20000, discount: "0%", img: "https://example.com/image.jpg", description: "mô tả sản phẩm", status: "ACTIVE", created_at: "2021-01-01T00:00:00Z" },
  { id: 34, product_code: "SP034", product_name: "Cà chua", category_id: 7, stock: 120, price: 25000, discount: "5%", img: "https://example.com/image.jpg", description: "mô tả sản phẩm", status: "INACTIVE", created_at: "2021-01-01T00:00:00Z" },
  { id: 35, product_code: "SP035", product_name: "Dưa leo", category_id: 7, stock: 130, price: 22000, discount: "0%", img: "https://example.com/image.jpg", description: "mô tả sản phẩm", status: "ACTIVE", created_at: "2021-01-01T00:00:00Z" },

  // ===== ĐIỆN THOẠI (8) =====
  { id: 36, product_code: "SP036", product_name: "iPhone 13", category_id: 8, stock: 20, price: 18000000, discount: "5%", img: "https://example.com/image.jpg", description: "mô tả sản phẩm", status: "ACTIVE", created_at: "2021-01-01T00:00:00Z" },
  { id: 37, product_code: "SP037", product_name: "Samsung S22", category_id: 8, stock: 25, price: 17000000, discount: "5%", img: "https://example.com/image.jpg", description: "mô tả sản phẩm", status: "INACTIVE", created_at: "2021-01-01T00:00:00Z" },
  { id: 38, product_code: "SP038", product_name: "Oppo Reno 8", category_id: 8, stock: 30, price: 9000000, discount: "10%", img: "https://example.com/image.jpg", description: "mô tả sản phẩm", status: "ACTIVE", created_at: "2021-01-01T00:00:00Z" },
  { id: 39, product_code: "SP039", product_name: "Xiaomi 13", category_id: 8, stock: 35, price: 8500000, discount: "0%", img: "https://example.com/image.jpg", description: "mô tả sản phẩm", status: "ACTIVE", created_at: "2021-01-01T00:00:00Z" },
  { id: 40, product_code: "SP040", product_name: "Vivo Y20", category_id: 8, stock: 40, price: 5000000, discount: "0%", img: "https://example.com/image.jpg", description: "mô tả sản phẩm", status: "ACTIVE", created_at: "2021-01-01T00:00:00Z" },
];

if (!localStorage.getItem("products")) {
  localStorage.setItem("products", JSON.stringify(products));
}
// ------------------------------------------------


// --------------- FUNCTION -----------------------
// lấy số trang
function getPageCount() {
  return Math.ceil(filteredProducts.length / itemsPerPage);
}

// reset and close
function resetAndClose(){
  // reset modal
  isEditMode = false;
  editingProductId = null;
  addProductCode.value = "";
  addProductName.value = "";
  document.querySelector('input[name="status"][value="ACTIVE"]').checked = true;
  addProductCode.style.border = "1px solid #cccccc";
  addProductName.style.border = "1px solid #cccccc";
  addProductPrice.style.border = "1px solid #cccccc";
  addProductPicture.style.border = "1px solid #cccccc";
  addProductStock.style.border = "1px solid #cccccc";
  addProductCategory.style.border = "1px solid #cccccc";
  errProductCode.innerHTML = "Mã sản phẩm trống";
  errProductName.innerHTML = "Tên sản phẩm trống";
  errProductCode.style.display = "none";
  errProductName.style.display = "none";
  errProductPrice.style.display = "none";
  errProductPicture.style.display = "none";
  errProductStock.style.display = "none";
  errProductCategory.style.display = "none";
  addProductPrice.value = 10000000;
  addProductPicture.value = "";
  addProductStock.value = 1;
  addProductDiscount.value = 10;
  addProductCategory.value = "";
  addProductDescription.value = "";
  document.querySelector(".modal-header h2").innerText = "Thêm mới sản phẩm";
  btnAddProduct.innerText = "Thêm";
      
  // đóng modal
  productModal.style.display = "none";
}

// hiển thị giá kiểu VN
function formatPrice(price) {
  return new Intl.NumberFormat("vi-VN").format(price) + " đ";
}

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
  const category = categorySelect.value;

  filteredProducts = productLocal.filter((item) => {
    // filter theo tên
    const matchName = item.product_name.toLowerCase().includes(keyword);

    // filter theo trạng thái
    let matchStatus = true;
    if (status === "on") matchStatus = item.status === "ACTIVE";
    if (status === "off") matchStatus = item.status === "INACTIVE";

    // filter theo category
    let matchCategory = true;
    if (category !== "") {
      matchCategory = item.category_id === Number(category);
      console.log(category);
    }

    return matchName && matchStatus && matchCategory;
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

// empty validate function
function emptyValidate(chkvar, err, type){
  if (!chkvar) {
    err.style.display = "inline";
    if(type=="code") addProductCode.style.border = "1px solid red";
    if(type=="name") addProductName.style.border = "1px solid red";
    
  } else {
    err.style.display = "none";
    if(type=="code") addProductCode.style.border = "1px solid #cccccc";
    if(type=="name") addProductName.style.border = "1px solid #cccccc";
  }
}

// ------------------------------------------------


// --------------- MAIN -----------------------
render(currentPage);
renderPagination();

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

// render danh mục ngoài
categoryLocal.forEach(category => {
  const option = document.createElement("option");
  option.value = category.id;                
  option.textContent = category.category_name;

  categorySelect.appendChild(option);
});
// render danh mục modal
categoryLocal.forEach(category => {
  const option = document.createElement("option");
  option.value = category.id;                
  option.textContent = category.category_name;

  addProductCategory.appendChild(option);
});

// search
searchInput.addEventListener("input", applyFilter);

// sort status
statusSelect.addEventListener("change", applyFilter);

// sort category
categorySelect.addEventListener("change", applyFilter);

// xử lý đóng mở sort code
sortCode.addEventListener("click", function (e) {
  e.stopPropagation();
  sortCodeMenu.style.display =
    sortCodeMenu.style.display === "block" ? "none" : "block";
});
document.addEventListener("click", function () {
  sortCodeMenu.style.display = "none";
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

// sort code
sortCodeMenu.addEventListener("click", (e) => {
  const type = e.target.dataset.sort;
  if (type) sortCategories(type);
});

// sort name
sortNameMenu.addEventListener("click", (e) => {
  const type = e.target.dataset.sort;
  if (type) sortCategories(type);
});

// sort price
sortPriceMenu.addEventListener("click", (e) => {
  const type = e.target.dataset.sort;
  if (type) sortCategories(type);
});

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

// thêm mới sản phẩm
btnAddProduct.addEventListener("click", function(e){
  const code =  addProductCode.value.trim();
  const name = addProductName.value.trim();
  const category = addProductCategory.value;
  const status = document.querySelector(`input[name = "status"]:checked`)?.value;
  const stock = addProductStock.value;
  const price = addProductPrice.value;
  const discount = addProductDiscount.value;
  const picture = addProductPicture.value.trim();
  const description = addProductDescription.value.trim();

  // 1) validate rỗng
  emptyValidate(code, errProductCode, "code");
  emptyValidate(name, errProductName, "name");

  // 2) validate trùng mã sản phẩm
  let isCodeExist = false;
  if (code !== "") {
    isCodeExist = productLocal.some(
      (item) =>
        item.product_code.toLowerCase() === code.toLowerCase() &&
        (!isEditMode || item.id !== editingProductId)
    );

    if (isCodeExist) {
      errProductCode.innerHTML = "Mã sản phẩm trùng";
      errProductCode.style.display = "inline";
      addProductCode.style.border = "1px solid red";
    }
  }
  else errProductCode.innerHTML = "Mã sản phẩm trống";

  // 2) validate trùng tên sản phẩm
  let isNameExist = false;
  if (name !== "") {
    isNameExist = productLocal.some(
      (item) =>
        item.product_name.toLowerCase() === name.toLowerCase() &&
        (!isEditMode || item.id !== editingProductId)
    );

    if (isNameExist) {
      errProductName.innerHTML = "Mã sản phẩm trùng";
      errProductName.style.display = "inline";
      addProductName.style.border = "1px solid red";
    }
  }
  else errProductName.innerHTML = "Mã sản phẩm trống";

  // 4)  validate giá sản phẩm lớn hơn 0
  if(price <= 0){
    errProductPrice.style.display = "inline";
    addProductPrice.style.border = "1px solid red";
  }
  else{
    errProductPrice.style.display = "none";
    addProductPrice.style.border = "1px solid #cccccc";
  }
  
  // 5) validate hình ảnh định dạng JPG, PNG, WebP
  const imageRegex = /^\S+(\.(jpg|png|webp))$/i; 
  // ^        : bắt đầu chuỗi
  // \S+      : 1 hoặc nhiều ký tự KHÔNG phải khoảng trắng
  // \.       : dấu chấm
  // (jpg|png|webp)
  // $        : kết thúc chuỗi
  // i        : không phân biệt hoa thường

  if (!imageRegex.test(picture)) {
    errProductPicture.style.display = "inline";
    addProductPicture.style.border = "1px solid red";
  } else {
    errProductPicture.style.display = "none";
    addProductPicture.style.border = "1px solid #cccccc";
  }

    // 6) validate số lượng tồn kho lớn hơn 0
    if(stock <= 0){
      errProductStock.style.display = "inline";
      addProductStock.style.border = "1px solid red";
    }
    else{
      errProductStock.style.display = "none";
      addProductStock.style.border = "1px solid #cccccc";
    }

    // 7) discount = 0 nếu rỗng
    if(discount == "") addProductDiscount.value = 0;

    // 8) validate danh mục
    if(category == "")
    {
      errProductCategory.style.display = "inline";
      addProductCategory.style.border = "1px solid red";
    }
    else{
      errProductCategory.style.display = "none";
      addProductCategory.style.border = "1px solid #cccccc";
    }

    // 9) kiểm tra và lưu vào local 
    if(
      code != "" &&
      name != "" &&
      category != "" &&
      !isCodeExist &&
      !isNameExist &&
      price > 0 &&
      stock > 0 &&
      imageRegex.test(picture)
    )
    {
      if(isEditMode){
        // === edit ===
        const index = productLocal.findIndex((item) => item.id === editingProductId);

        productLocal[index].product_code = code;
        productLocal[index].product_name = name;
        productLocal[index].category_id = Number(category);
        productLocal[index].status = status;
        productLocal[index].stock = stock;
        productLocal[index].price = price;
        productLocal[index].discount = discount;
        productLocal[index].img = picture;
        productLocal[index].description = description;

        alert("Cập nhật sản phẩm thành công");

        // lưu local storage
        localStorage.setItem("products", JSON.stringify(productLocal));

        // reset và đóng modal
        resetAndClose();
      }
      else{
        // === add ===
        // tạo object mới
        const newProduct = {
          id: Math.ceil(Math.random() * 100000),
          product_code: code,
          product_name: name,
          category_id: Number(category),
          stock: Number(stock),
          price: Number(price),
          discount: discount,
          img: picture,
          description: description,
          status: status,
          created_at: new Date().toISOString()
        };

        // thêm vào local Storage
        productLocal.push(newProduct);

        // thông báo
        alert("thêm sản phẩm thành công");

        // lưu local storage
        localStorage.setItem("products", JSON.stringify(productLocal));

        // reset form và đóng modal
        resetAndClose();
      }

      // 10) Render lại dữ liệu
      filteredProducts = [...productLocal];
      const pageCount = Math.ceil(filteredProducts.length / itemsPerPage);
      if (currentPage > pageCount) currentPage = pageCount || 1;
      render(currentPage);
      renderPagination();
    }
});

// edit sản phẩm
tblContent.addEventListener("click", function(e){
  const editBtn = e.target.closest(".editItem");
  if(!editBtn) return;

  // 1) lấy dữ liệu bằng id
  const id = Number(editBtn.dataset.id);
  const product = productLocal.find((item) => item.id === id);
  if(!product) return;

  // 2) bật chế độ edit 
  isEditMode = true;
  editingProductId = id;

  // modal
  // 3) chỉnh sửa tiêu đề và nút
  document.querySelector(".modal-header h2").innerText = "Chỉnh sửa sản phẩm";
  btnAddProduct.innerText = "Cập nhật";

  // 4) đổ dữ liệu vào modal
  addProductCode.value = product.product_code;
  addProductName.value = product.product_name;
  addProductCategory.value = product.category_id;
  document.querySelector(
    `input[name="status"][value="${product.status}"]`
  ).checked = true;
  addProductStock.value = Number(product.stock);
  addProductPrice.value = Number(product.price);
  addProductDiscount.value = parseInt(product.discount);
  addProductPicture.value = product.img;
  addProductDescription.value = product.description;

  // 5) mở modal
  productModal.style.display = "flex";
});

// xóa sản phẩm
tblContent.addEventListener("click", function(e){
  const deleteBtn = e.target.closest(".deleteItem");
  if(!deleteBtn) return;

  const id = Number(deleteBtn.dataset.id);

  const isConfirm = confirm("Bạn có chắc muốn xóa danh mục này không?");
  if (!isConfirm) return;

  // 1) xóa khỏi mảng
  productLocal = productLocal.filter((item) => item.id !== id);

  // 2) lưu lại localStorage
  localStorage.setItem("products", JSON.stringify(productLocal));

  // 3) cập nhật filteredProducts
  filteredProducts = [...productLocal];

  // 4) xử lý trường hợp xóa item cuối trang
  const pageCount = Math.ceil(filteredProducts.length / itemsPerPage);
  if (currentPage > pageCount) currentPage = pageCount || 1;

  // 5) render lại
  render(currentPage);
  renderPagination();
});

// ------------------------------------------------


