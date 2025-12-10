const students = [
    {Name: "Huấn", Age: 18, Class: "A1"},
    {Name: "Cường", Age: 22, Class: "A1"},
]

let content = document.querySelector(".content");

function render(){
    content.innerHTML = "";
    for(let i in students){
        let div_item = document.createElement("div");
        div_item.className = "item";
        content.appendChild(div_item);
        // tên
        let div_name = document.createElement("div");
        div_name.className = "sub_item";
        div_name.innerHTML = `${students[i].Name}`;
        div_item.appendChild(div_name);

        // tuổi
        let div_age = document.createElement("div");
        div_age.className = "sub_item";
        div_age.innerHTML = `${students[i].Age}`;
        div_item.appendChild(div_age);

        // lớp
        let div_class = document.createElement("div");
        div_class.className = "sub_item";
        div_class.innerHTML = `${students[i].Class}`;
        div_item.appendChild(div_class);

        // chỉnh sửa
        let div_adjust = document.createElement("div");
        div_adjust.className = "sub_item_adjust";
        div_item.appendChild(div_adjust);

        let btn_adjust = document.createElement("button");
        btn_adjust.innerText = "Sửa";
        btn_adjust.className = "btn_adjust";
        div_adjust.appendChild(btn_adjust);

        let btn_delete = document.createElement("button");
        btn_delete.innerText = "Xóa";
        btn_delete.className = "btn_delete";
        div_adjust.appendChild(btn_delete);

        // xóa sinh viên
        btn_delete.addEventListener("click", function(){
            students.splice(i,1);
            render();
        });

        // sửa thông tin sinh viên
        btn_adjust.addEventListener("click", function(){
            let edit_name = prompt("thay đổi tên");
            students[i].Name = edit_name;
            let edit_age = +prompt("thay đổi tuổi");
            students[i].Age = edit_age;
            let edit_class = prompt("thay đổi lớp");
            students[i].Class = edit_class;
            render();
        });

        let search = document.getElementById("search");
        if(search.value === students[i].Name || Number(search.value) === students[i].Age || search.value === students[i].Class ){
            div_item.style.backgroundColor = "gray";
        }
        else div_item.style.backgroundColor = "";
        
        
    }
}
search.addEventListener("input", function(){
            render();
});

render();

// thêm sinh viên
const btn_add = document.querySelector(".btn_add");
let i_name = document.getElementById("name");
let i_age = document.getElementById("age");
let i_class = document.getElementById("class");
btn_add.addEventListener("click", function(){
    if(i_name.value==="" || i_age.value==="" || i_class.value===""){
        alert("Vui lòng nhập thông tin đầy đủ");
        return;
    }
    let student = {Name: i_name.value, Age: i_age.value, Class: i_class.value};
    students.push(student);

    i_age.value = i_class.value = i_name.value = "";
    render();
});


