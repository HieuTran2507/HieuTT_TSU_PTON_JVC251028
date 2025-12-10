let arr = [
    {title: 'xin việc ở google', status: true},
    {title: 'mua biệt thự', status: true},
    {title: 'cưới vợ', status: false},
    {title: 'mua xe hơi', status: false},
    {title: 'sinh con', status: false},
    {title: 'đi du lịch vòng quanh thế giới', status: false}
];

let content = document.querySelector('.content');

function render(){
    content.innerHTML = "";
    for (let i in arr)
    {
        // click để xác nhận làm hay chưa
        let div = document.createElement("div");
        div.addEventListener("click", function(){
            arr[i].status = !arr[i].status
            render();
        });
        // double click để xóa khỏi danh sách
        div.addEventListener("dblclick", function(){
            arr.splice(i,1);
            render();
        });
        // kiểm tra làm hay chưa để thay đổi giao diện
        if(arr[i].status===true){
            div.innerHTML = `✔ <span class = "done">${arr[i].title}</span>`;
            div.style.backgroundColor = "gray";
            div.style.color = "white";
        }
        else div.innerHTML = arr[i].title;
        // xen kẻ màu xám và trắng giữa các title
        div.className = (i % 2 === 0) ? "odd" : "even";
        content.appendChild(div);
    }
}

render();

const btn = document.getElementById(`btn`);
let input = document.getElementById(`input`);
btn.addEventListener("click",function(){
    // kiểm tra input
    if (input.value === "") {
        alert("Vui lòng nhập title");
        return;
    }
    let newobj = {title: input.value, status: false};
    arr.push(newobj);
    // làm mới lại content
    input.value = "";
    render();
});

