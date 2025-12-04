let ctrlWhile = true;
const studentManager = {
    students: [],

    // 1. them sinh vien
    addStudent: function(){
        let name = prompt(`Nhập tên sinh viên`);
        let age = prompt(`Nhập tuổi sinh viên`);
        let id = prompt(`Nhập ID sinh viên`);

        const student = {
            Name: name,
            Age: age,
            ID: id
        }
        this.students.push(student);
        console.log("✔ Thêm sinh viên thành công!");
    },
    // 2. hien thi danh sach sinh vien
    listStudent: function(){
        console.log("----- DANH SÁCH SINH VIÊN -----");
        if (this.students.length === 0) {
            console.log("Danh sách trống.");
            return;
        }
        let i = 1;
        this.students.forEach(sv => {
            console.log(i);
            console.log(`Tên: ${sv.Name}`);
            console.log(`Tuổi: ${sv.Age}`);
            console.log(`ID: ${sv.ID}`);
            console.log(`------------------`);
            i++;
        });
    },
    // 3. xoa sinh vien theo ID
    deleteStudent: function(){
        let deleteID = prompt(` Nhập ID sinh viên cần xóa `);
        const index = this.students.findIndex(sv => sv.ID === deleteID);
        if(index!==-1){
            this.students.splice(index,1);
            console.log(`✔ Xóa sinh viên thành công!`);
        }
        else console.log("❌ Không tìm thấy sinh viên với ID này!");
    },
    //4. menu
    menu: function(){
        while(ctrlWhile){
            let option = Number(prompt("CHỌN CHỨC NĂNG:\n1. Thêm sinh viên \n2. Hiển thị \n3. Xóa sinh viên \n4. Thoát"));
            switch (option){
                case 1:
                    this.addStudent();
                    break;
                case 2:
                    this.listStudent();
                    break;
                case 3:
                    this.deleteStudent();
                    break;
                case 4:
                    ctrlWhile = false;
                    console.log("Đã thoát chương trình.");
                    break;
                default:
                    console.log("❌ Lựa chọn không hợp lệ!");
                    break;
            }
                
        }
    }
};
studentManager.menu();