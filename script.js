class BookmarkManager {
  constructor() {
    this.bookmarks = this.loadBookmarks();
    this.initEventListeners();
    this.renderBookmarks();
  }

  initEventListeners() {
    const addBtn = document.getElementById("addBookmarkBtn");
    const modal = document.getElementById("modal");
    const closeBtn = document.querySelector(".close");
    const saveBtn = document.getElementById("saveBtn");

    addBtn.addEventListener("click", () => this.openModal());
    closeBtn.addEventListener("click", () => this.closeModal());
    saveBtn.addEventListener("click", () => this.saveBookmark());

    window.addEventListener("click", (e) => {
      if (e.target === modal) this.closeModal();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") this.closeModal();
    });
  }

  openModal() {
    document.getElementById("modal").style.display = "block";
    document.getElementById("websiteName").focus();
  }

  closeModal() {
    document.getElementById("modal").style.display = "none";
    this.clearForm();
  }

  clearForm() {
    document.getElementById("websiteName").value = "";
    document.getElementById("websiteURL").value = "";
  }

  saveBookmark() {
    const name = document.getElementById("websiteName").value.trim();
    const url = document.getElementById("websiteURL").value.trim();

    if (!name || !url) {
      alert("Vui lòng nhập đầy đủ thông tin!");
      return;
    }

    if (!this.isValidURL(url)) {
      alert("URL không hợp lệ!");
      return;
    }

    const bookmark = {
      id: Date.now(),
      name: name,
      url: this.formatURL(url),
    };

    this.bookmarks.push(bookmark);
    this.saveToLocalStorage();
    this.renderBookmarks();
    this.closeModal();
  }

  isValidURL(string) {
    try {
      new URL(this.formatURL(string));
      return true;
    } catch (_) {
      return false;
    }
  }

  formatURL(url) {
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      return "https://" + url;
    }
    return url;
  }

  deleteBookmark(id) {
    if (confirm("Bạn có chắc chắn muốn xóa bookmark này?")) {
      this.bookmarks = this.bookmarks.filter((bookmark) => bookmark.id !== id);
      this.saveToLocalStorage();
      this.renderBookmarks();
    }
  }

  renderBookmarks() {
    const container = document.getElementById("bookmarksList");

    if (this.bookmarks.length === 0) {
      container.innerHTML =
        '<p style="text-align: center; color: white; font-size: 1.2rem;">Chưa có bookmark nào. Hãy thêm bookmark đầu tiên!</p>';
      return;
    }

    container.innerHTML = this.bookmarks
      .map(
        (bookmark) => `
            <div class="bookmark-item">
                <button class="delete-btn" onclick="bookmarkManager.deleteBookmark(${
                  bookmark.id
                })">×</button>
                <h3>${this.escapeHtml(bookmark.name)}</h3>
                <a href="${bookmark.url}" target="_blank">${bookmark.url}</a>
            </div>
        `
      )
      .join("");
  }

  escapeHtml(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
  }

  saveToLocalStorage() {
    localStorage.setItem("bookmarks", JSON.stringify(this.bookmarks));
  }

  loadBookmarks() {
    const saved = localStorage.getItem("bookmarks");
    return saved ? JSON.parse(saved) : [];
  }
}

// Khởi tạo ứng dụng
const bookmarkManager = new BookmarkManager();
