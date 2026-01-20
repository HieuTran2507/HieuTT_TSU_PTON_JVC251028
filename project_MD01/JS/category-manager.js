let categoryLocal = JSON.parse(localStorage.getItem("categories")) || [];
let productLocal = JSON.parse(localStorage.getItem("products")) || [];

const tblContent = document.getElementById("tbl-content");
const userLogin = document.getElementById("userLogin");
const avatar = document.getElementById("avatar");
const menu = document.getElementById("menu");
const logout = document.getElementById("logout");
let currentPage = 1;
const itemsPerPage = 10;
const pagination = document.getElementById("pagination");
const userLoginLocal = JSON.parse(localStorage.getItem("userLogin"));
let filteredCategories = [...categoryLocal];
const searchInput = document.getElementById("searchInput");
const statusSelect = document.getElementById("status");
const sortName = document.getElementById("sortName");
const sortNameMenu = document.getElementById("sortNameMenu");
const sortCode = document.getElementById("sortCode");
const sortCodeMenu = document.getElementById("sortCodeMenu");
const addCategoryBtn = document.getElementById("addCategoryBtn");
const categoryModal = document.getElementById("categoryModal");
const btnCancel = document.getElementById("btnCancel");
const btnClose = document.getElementById("btnClose");
const btnAdd = document.getElementById("btnAdd");
const addCategoryName = document.getElementById("addCategoryName");
const addCategoryCode = document.getElementById("addCategoryCode");
const errCategoryName = document.getElementById("errCategoryName");
const errCategoryCode = document.getElementById("errCategoryCode");
const editItem = document.getElementById("editItem");
const deleteItem = document.getElementById("deleteItem");
let isEditMode = false;
let editingCategoryId = null;

// ------------ INSERT DATA ------------------------------------------------------------------------
let categories = [
  {
    id: 1,
    category_code: "DM001",
    category_name: "Quần áo",
    image: "https://example.com/image.jpg",
    status: "ACTIVE",
    created_at: "2021-01-01T00:00:00Z",
  },
  {
    id: 2,
    category_code: "DM002",
    category_name: "Kính mát",
    image: "https://example.com/image.jpg",
    status: "INACTIVE",
    created_at: "2021-01-01T00:00:00Z",
  },
  {
    id: 3,
    category_code: "DM003",
    category_name: "Giày dép",
    image: "https://example.com/image.jpg",
    status: "ACTIVE",
    created_at: "2021-01-01T00:00:00Z",
  },
  {
    id: 4,
    category_code: "DM004",
    category_name: "Thời trang nam",
    image: "https://example.com/image.jpg",
    status: "INACTIVE",
    created_at: "2021-01-01T00:00:00Z",
  },
  {
    id: 5,
    category_code: "DM005",
    category_name: "Thời trang nữ",
    image: "https://example.com/image.jpg",
    status: "INACTIVE",
    created_at: "2021-01-01T00:00:00Z",
  },
  {
    id: 6,
    category_code: "DM006",
    category_name: "Hoa quả",
    image: "https://example.com/image.jpg",
    status: "INACTIVE",
    created_at: "2021-01-01T00:00:00Z",
  },
  {
    id: 7,
    category_code: "DM007",
    category_name: "Rau",
    image: "https://example.com/image.jpg",
    status: "ACTIVE",
    created_at: "2021-01-01T00:00:00Z",
  },
  {
    id: 8,
    category_code: "DM008",
    category_name: "Điện thoại",
    image: "https://example.com/image.jpg",
    status: "INACTIVE",
    created_at: "2021-01-01T00:00:00Z",
  },
];

if (!localStorage.getItem("categories")) {
  localStorage.setItem("categories", JSON.stringify(categories));
}
// ------------------------------------------------------------------------------------------------

// ---------- FUNCTION ----------------------------------------------------------------------------
// lấy số trang
function getPageCount() {
  return Math.ceil(filteredCategories.length / itemsPerPage);
}

/**
 * @description: hàm hiển thị danh sách danh mục
 * @param {*} page số trang hiện tại 
 * @author hiếu (13/1/2026)
 */
function render(page) {
  tblContent.innerHTML = "";

  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;

  const data = filteredCategories.slice(start, end);

  for (let i in data) {
    const div_item = document.createElement("div");
    div_item.className = "row";
    tblContent.appendChild(div_item);

    const div_code = document.createElement("div");
    div_code.className = "item-nor item1";
    div_code.innerHTML = data[i].category_code;
    div_item.appendChild(div_code);

    const div_name = document.createElement("div");
    div_name.className = "item-nor item2";
    div_name.innerHTML = data[i].category_name;
    div_item.appendChild(div_name);

    if (data[i].status === "INACTIVE") {
      const div_status = document.createElement("div");
      div_status.className = "item-nor item3 inactive";
      div_status.innerHTML =
        '<span class = "inactive-box">● Ngừng hoạt động</span>';
      div_item.appendChild(div_status);
    } else if (data[i].status === "ACTIVE") {
      const div_status = document.createElement("div");
      div_status.className = "item-nor item3 active";
      div_status.innerHTML =
        '<span class = "active-box">● Đang hoạt động</span>';
      div_item.appendChild(div_status);
    }

    const div_function = document.createElement("div");
    div_function.className = "item-nor item4";
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

  filteredCategories = categoryLocal.filter((item) => {
    // filter theo tên
    const matchName = item.category_name.toLowerCase().includes(keyword);

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
    name_asc: (a, b) => a.category_name.localeCompare(b.category_name),
    name_desc: (a, b) => b.category_name.localeCompare(a.category_name),
    code_asc: (a, b) => a.category_code.localeCompare(b.category_code),
    code_desc: (a, b) => b.category_code.localeCompare(a.category_code),
  };

  filteredCategories.sort(map[type]);

  currentPage = 1;
  render(currentPage);
  renderPagination();
}

// empty validate function
function emptyValidate(chkvar, err, type) {
  if (!chkvar) {
    err.style.display = "inline";
    if(type=="code") addCategoryCode.style.border = "1px solid red";
    if(type=="name") addCategoryName.style.border = "1px solid red";
    
  } else {
    err.style.display = "none";
    if(type=="code") addCategoryCode.style.border = "1px solid #cccccc";
    if(type=="name") addCategoryName.style.border = "1px solid #cccccc";
  }
}

function resetAndClose(){
  // reset modal
    isEditMode = false;
    editingCategoryId = null;
    btnAdd.innerText = "Thêm";
    document.querySelector(".modal-header h2").innerText = "Thêm mới danh mục";
    addCategoryCode.value = "";
    addCategoryName.value = "";
    document.querySelector('input[name="status"][value="ACTIVE"]').checked = true;
    addCategoryCode.style.border = "1px solid #cccccc";
    addCategoryName.style.border = "1px solid #cccccc";
    errCategoryCode.innerHTML = "Mã danh mục trống";
    errCategoryName.innerHTML = "Tên danh mục trống";
    errCategoryCode.style.display = "none";
    errCategoryName.style.display = "none";
    // đóng modal
    categoryModal.style.display = "none";
}

// ------------------------------------------------------------------------------------------------

// ------------------ MAIN ------------------------------------------------------------------------

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

// SEARCH
searchInput.addEventListener("input", applyFilter);

// SORT STATUS
statusSelect.addEventListener("change", applyFilter);

// xử lý đóng mở sort name
sortName.addEventListener("click", function (e) {
  e.stopPropagation();
  sortNameMenu.style.display =
  sortNameMenu.style.display === "block" ? "none" : "block";
});
document.addEventListener("click", function () {
  sortNameMenu.style.display = "none";
});

// xử lý đóng mở sort code
sortCode.addEventListener("click", function (e) {
  e.stopPropagation();
  sortCodeMenu.style.display =
  sortCodeMenu.style.display === "block" ? "none" : "block";
});
document.addEventListener("click", function () {
  sortCodeMenu.style.display = "none";
});

// SORT NAME
sortNameMenu.addEventListener("click", (e) => {
  const type = e.target.dataset.sort;
  if (type) sortCategories(type);
});

// SORT CODE
sortCodeMenu.addEventListener("click", (e) => {
  const type = e.target.dataset.sort;
  if (type) sortCategories(type);
});

// xử lý đóng mở modal
addCategoryBtn.addEventListener("click", function(e){
  e.stopPropagation();
  categoryModal.style.display =
  categoryModal.style.display === "flex" ? "none" : "flex";
});
btnCancel.addEventListener("click", function () {
  resetAndClose();
});
btnClose.addEventListener("click", function () {
  resetAndClose();
});

// thêm danh mục mới
btnAdd.addEventListener("click", function(e){
  const code = addCategoryCode.value.trim();
  const name = addCategoryName.value.trim();
  const status = document.querySelector(`input[name = "status"]:checked`)?.value;

  // 1) validate rỗng
  emptyValidate(code, errCategoryCode, "code");
  emptyValidate(name, errCategoryName, "name");

  // 2) validate trùng mã
  let isCodeExist = false;
  if (code !== "") {
    isCodeExist = categoryLocal.some(
      (item) =>
        item.category_code.toLowerCase() === code.toLowerCase() &&
        (!isEditMode || item.id !== editingCategoryId)
    );

    if (isCodeExist) {
      errCategoryCode.innerHTML = "Mã danh mục trùng";
      errCategoryCode.style.display = "inline";
      addCategoryCode.style.border = "1px solid red";
    }
  }
  else errCategoryCode.innerHTML = "Mã danh mục trống";

  // 3) validate trùng tên
  let isNameExist = false;
  if (name !== "") {
    isNameExist = categoryLocal.some(
      (item) =>
        item.category_name.toLowerCase() === name.toLowerCase() &&
        (!isEditMode || item.id !== editingCategoryId)
    );

    if (isNameExist) {
      errCategoryName.innerHTML = "Tên danh mục trùng";
      errCategoryName.style.display = "inline";
      addCategoryName.style.border = "1px solid red";
    }
  }
  else errCategoryName.innerHTML = "Tên danh mục trống";

  // 4) kiểm tra và lưu vào local
  if(
    code !== "" &&
    name !== "" &&
    !isCodeExist && 
    !isNameExist
  )
  {
    if(isEditMode){
      // ===edit===
      const index = categoryLocal.findIndex((item) => item.id === editingCategoryId);

      categoryLocal[index].category_code = code;
      categoryLocal[index].category_name = name;
      categoryLocal[index].status = status;

      alert("Cập nhật danh mục thành công");

      // 5) lưu local storage
      localStorage.setItem("categories", JSON.stringify(categoryLocal));

      // 6) reset form và đóng modal
      resetAndClose();
    } else{
      
      // ===add===
      // tạo object mới
      const newCategory = {
        id: Math.ceil(Math.random() * 100000),
        category_code: code,
        category_name: name,
        image: "",
        status: status,
        created_at: new Date().toISOString(),
      }

      // thêm vào local storage
      categoryLocal.unshift(newCategory);

      // thông báo
      alert("thêm danh mục thành công");

      // 5) lưu local storage
      localStorage.setItem("categories", JSON.stringify(categoryLocal));

      // 6) reset form và đóng modal
      resetAndClose();
      
    }
    
    // 7) Render lại dữ liệu
    filteredCategories = [...categoryLocal];
    // lấy trang hiện tại
    const pageCount = Math.ceil(filteredCategories.length / itemsPerPage);
    if (currentPage > pageCount) currentPage = pageCount || 1;
    render(currentPage);
    renderPagination();
  }

});

// edit
tblContent.addEventListener("click", function(e){
  const editBtn = e.target.closest(".editItem");
  if (!editBtn) return;

  // 1) lấy dữ liệu bằng id
  const id = Number(editBtn.dataset.id);
  const category = categoryLocal.find((item) => item.id === id);
  if (!category) return;

  // 2) bật chế độ edit
  isEditMode = true;
  editingCategoryId = id;

  // modal
  // 3) chỉnh sửa tiêu đề và nút
  document.querySelector(".modal-header h2").innerText = "Chỉnh sửa danh mục";
  btnAdd.innerText = "Cập nhật";
  
  // 4) đổ dữ liệu vào modal
  addCategoryCode.value = category.category_code;
  addCategoryName.value = category.category_name;
  document.querySelector(
    `input[name="status"][value="${category.status}"]`
  ).checked = true;

  // 5) mở modal
  categoryModal.style.display = "flex";

});

// delete
tblContent.addEventListener("click", function (e) {
  const deleteBtn = e.target.closest(".deleteItem");
  if (!deleteBtn) return;

  const id = Number(deleteBtn.dataset.id);

  // 1) kiểm tra danh mục có sản phẩm hay không
  const hasProduct = productLocal.some(
    (product) => product.category_id === id
  );

  if (hasProduct) {
    alert("Không thể xóa danh mục vì vẫn còn sản phẩm thuộc danh mục này");
    return;
  }

  const isConfirm = confirm("Bạn có chắc muốn xóa danh mục này không?");
  if (!isConfirm) return;

  // 2) xóa khỏi mảng
  categoryLocal = categoryLocal.filter((item) => item.id !== id);

  // 3) lưu lại localStorage
  localStorage.setItem("categories", JSON.stringify(categoryLocal));

  // 4) cập nhật filteredCategories
  filteredCategories = [...categoryLocal];

  // lấy trang hiện tại
  const pageCount = Math.ceil(filteredCategories.length / itemsPerPage);
  if (currentPage > pageCount) currentPage = pageCount || 1;

  // 6) render lại
  render(currentPage);
  renderPagination();
});

// ------------------------------------------------------------------------------------------------