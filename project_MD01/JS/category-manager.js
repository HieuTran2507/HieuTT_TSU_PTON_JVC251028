let categoryLocal = JSON.parse(localStorage.getItem("categories")) || [];
const tblContent = document.getElementById("tbl-content");
const userLogin = document.getElementById("userLogin");
const avatar = document.getElementById("avatar");
const menu = document.getElementById("menu");
const logout = document.getElementById("logout");
let currentPage = 1;
const itemsPerPage = 4;
const pagination = document.getElementById("pagination");
const userLoginLocal = JSON.parse(localStorage.getItem("userLogin"));
let filteredCategories = [...categoryLocal];
const searchInput = document.getElementById("searchInput");
const statusSelect = document.getElementById("status");
const sortName = document.getElementById("sortName");
const sortNameMenu = document.getElementById("sortNameMenu");
const sortCode = document.getElementById("sortCode");
const sortCodeMenu = document.getElementById("sortCodeMenu");

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

// lấy số trang
function getPageCount() {
  return Math.ceil(filteredCategories.length / itemsPerPage);
}

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

//-----------------------------------------------
// content render
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
        <img src="../images/trash_bin.png" alt="" class="function-icon">
        <img src="../images/pencil.png" alt="" class="function-icon">
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

// main program
render(currentPage);
renderPagination();

searchInput.addEventListener("input", applyFilter);
statusSelect.addEventListener("change", applyFilter);

sortNameMenu.addEventListener("click", (e) => {
  const type = e.target.dataset.sort;
  if (type) sortCategories(type);
});

sortCodeMenu.addEventListener("click", (e) => {
  const type = e.target.dataset.sort;
  if (type) sortCategories(type);
});
