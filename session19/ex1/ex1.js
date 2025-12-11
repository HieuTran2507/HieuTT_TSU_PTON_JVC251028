let email = document.getElementById("email");
let password = document.getElementById("password");
let confirm_password = document.getElementById("confirm_password");
let btn_register = document.querySelector(".btn_register");

btn_register.addEventListener("click", function(){
    if(email.value === "" || password.value === "" || confirm_password.value === ""){
        alert("vui lòng nhập đủ thông tin");
        return;
    }else{
        localStorage.email = email.value;
        while(password.value !== confirm_password.value){
            alert("xác nhận mật khẩu không đúng vui lòng nhập lại");
            password.value = "";
            confirm_password.value = "";
            return;
        }
        if(password.value === confirm_password.value){
            localStorage.password = password.value;
            localStorage.confirm_password = confirm_password.value;
        }
    }
    alert("đăng ký thành công");
    password.value = "";
    email.value = "";
    confirm_password.value = "";
});