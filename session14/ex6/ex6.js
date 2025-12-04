const bookManager = {
    books : [],

    // 1. Thêm sách mới
    addBook: function(){
        let id = prompt(`Nhập ID sách`);
        let name = prompt(`Nhập tên sách`);
        let author = prompt(`Nhập tên tác giả sách`);
        let pulicYear = prompt(`Nhập năm xuất bản`);

        book = {
            ID: id,
            Name: name,
            Author: author,
            PublicYear: pulicYear
        };

        this.books.push(book);
        console.log("✔ Thêm sách thành công!");
    },
    // 2. Hiển thị danh sách sách
    showBook: function(){
        console.log("----- DANH SÁCH CÁC SÁCH -----");
        if(this.books.length===0){
            console.log(`Danh sách trống`);
            return;
        }
        let i = 1;
        this.books.forEach(bk=>{
            console.log(`STT: ${i}`);
            console.log(`ID: ${bk.ID}`);
            console.log(`Tên sách: ${bk.Name}`);
            console.log(`Tên tác giả: ${bk.Author}`);
            console.log(`Năm xuất bản: ${bk.PublicYear}`);
            console.log(`----------------------`);
            i++;
        });
    },
    // 3. Tìm kiếm sách theo tên 
    searchBook: function(){
        let findBookName = prompt(`Nhập tên sách bạn cần tìm`);
        const indexf = this.books.findIndex(bk=> bk.Name === findBookName); 
        if (indexf!==-1){
            console.log("----- ĐÃ TÌM THẤY SÁCH -----");
            console.log(`ID: ${this.books[indexf].ID}`);
            console.log(`Tên sách: ${this.books[indexf].Name}`);
            console.log(`Tên tác giả: ${this.books[indexf].Author}`);
            console.log(`Năm xuất bản: ${this.books[indexf].PublicYear}`);
        }
        else console.log("❌ Không tìm thấy sách này!");
    },
    // 4. Xóa sách theo ID
    deleteBook: function(){
        let findBookID = prompt(`Nhập ID sách bạn cần xóa`);
        const indexID = this.books.findIndex(bk=> bk.ID === findBookID); 
        if(indexID!==-1){
            this.books.splice(indexID,1);
            console.log(`✔ Xóa sách thành công!`);
        }
        else console.log("❌ Không tìm thấy sách với ID này!");
    },
    // 5. menu và thoát chương trình
    menu: function(){
        let ctrlWhile = true;
        while (ctrlWhile) {
            let option = +prompt(`CHỌN CHỨC NĂNG: \n1) Thêm sách mới \n2) Hiển thị danh sách sách \n3) Tìm kiếm sách theo tên \n4) Xóa sách theo ID \n5) Thoát chương trình`);
            switch(option){
                case 1:
                    this.addBook();
                    break;
                case 2:
                    this.showBook();
                    break;
                case 3:
                    this.searchBook();
                    break;
                case 4:
                    this.deleteBook();
                    break;
                case 5:
                    ctrlWhile = false;
                    console.log(`Đã thoát chương trình.`);
                    break;
                default:
                    console.log("❌ Lựa chọn không hợp lệ!");
                    break;
            }
        }
    }
};
bookManager.menu();