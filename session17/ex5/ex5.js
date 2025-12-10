document.getElementById("btnSubmit").addEventListener("click", function(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    
    let u_name = "huanrose@gmail.com";
    let pass = "123456";

    if(username===u_name && password===pass) alert("đăng nhập thành công");
    else alert("đăng nhập thất bại");
});