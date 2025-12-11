const courses = [
    {
        id: 1,
        content: "Learn javascript session 1",
        dueDate: "2023-04-17",
        status: "pending",
        assignTo :"anh Bách" 
    },
    {
        id: 2,
        content: "Learn javascript session 2",
        dueDate: "2023-04-17",
        status: "pending",
        assignTo: "Lâm"
    },
    {
        id: 3,
        content: "Learn CSS session 1",
        dueDate: "2023-04-17",
        status: "pending",
        assignTo: "Hiếu CSS"
    }
];
function update_storage(){
    localStorage.courses_store = JSON.stringify(courses);
    console.log(JSON.parse(localStorage.courses_store));
}


// xử lý nội dung bảng
const content = document.querySelector(`.tbl_content`);
function render(){
    content.innerHTML = "";
    for(let i in courses){

        // cho id tự động cập nhật dựa trên chỉ số
        courses[i].id = Number(i)+1;

        // tạo thẻ điv item (1 hàng ngang chứa các item)
        let div_item = document.createElement("div");
        div_item.className = "item";
        content.appendChild(div_item);

        // tạo item đầu tiên number
        let div_number = document.createElement("div");
        div_number.className = "number_item";
        div_number.innerHTML = courses[i].id;
        div_item.appendChild(div_number);

        // tạo item thứ 2 content
        let div_content = document.createElement("div");
        div_content.className = "content_item";
        div_content.innerHTML = courses[i].content;
        div_item.appendChild(div_content);

        // tạo item thứ 3 due date
        let div_date = document.createElement("div");
        div_date.className = "date_item";
        div_date.innerHTML = courses[i].dueDate;
        div_item.appendChild(div_date);

        // tạo item thứ 4 status
        let div_status = document.createElement("div");
        div_status.className = "status_item";
        div_status.innerHTML = courses[i].status;
        div_item.appendChild(div_status);

        // tạo item thứ 5 assign to
        let div_assign = document.createElement("div");
        div_assign.className = "assign_item";
        div_assign.innerHTML = courses[i].assignTo;
        div_item.appendChild(div_assign);

        // tạo item thứ 6 action
        let div_action = document.createElement("div");
        div_action.className = "action_item";
        div_item.appendChild(div_action);

        // tạo nút sửa trong action
        let btn_edit = document.createElement("button");
        btn_edit.innerText = "Sửa";
        btn_edit.className = "btn_edit";
        div_action.appendChild(btn_edit);
        // chứ năng sửa
        btn_edit.addEventListener("click", function(){
            let edit_content = prompt("nhập content cần thay đổi");
            courses[i].content = edit_content;
            let edit_date = prompt("nhập ngày cần thay đổi");
            courses[i].dueDate = edit_date;
            let edit_status = prompt("nhập trạng cần thay đổi");
            courses[i].status = edit_status;
            let edit_assign = prompt("nhập username cần thay đổi");
            courses[i].assignTo = edit_assign;

            render();
            update_storage();
        });

        // tạo nút xóa trong action 
        let btn_delete = document.createElement("button");
        btn_delete.innerText = "Xóa";
        btn_delete.className = "btn_delete";
        div_action.appendChild(btn_delete);
        // chức năng xóa
        btn_delete.addEventListener("click", function(){
            courses.splice(i,1);
            render();
            update_storage();
        });
    }
}

render();
update_storage();

const btn_submit = document.querySelector(`.btn_submit`);
let input_content = document.getElementById("input_content");
let input_date = document.getElementById("input_date");
let input_status = document.getElementById("input_status");
let input_username = document.getElementById("input_username");
btn_submit.addEventListener("click", function(){
    if(
        input_content.value === "" ||
        input_date.value === "" ||
        input_status.value === "" ||
        input_username.value === ""
    ){
        alert("Vui lòng nhập đủ thông tin");
        return;
    }
    else{
        let newCourse = {
            id: courses.length + 1,
            content: input_content.value,
            dueDate: input_date.value,
            status: input_status.value,
            assignTo: input_username.value
        };
        courses.push(newCourse);
        input_content.value = input_date.value = input_status.value = input_username.value = "";
        render();
        update_storage();
        localStorage.courses_store = JSON.stringify(courses);
        
    }
});

