let users = JSON.parse(localStorage.getItem(`users`)) || [];

let form = document.getElementById(`form`);

let errorEmail = document.querySelector(`.error-email`);
let errorPassword = document.querySelector(`.error-password`);
let errorConfirmPassword = document.querySelector(`.error-confirm-password`);

form.addEventListener("submit",function(e){
    e.preventDefault();
    if(validateData(form)){
        const newUser = {
            id: Math.floor(Math.random()*10000),
            email: form.email.value,
            password: form.password.value,
        };
        users.push(newUser);
        localStorage.setItem(`users`, JSON.stringify(users));
        alert(`đăng ký thành công`);
        form.email.value = ``;
        form.password.value = ``;
        form.confirmPassword.value = ``;
    }
});


function validateData(form){
    let check = true;
    // validate email
    if(form.email.value === ``){
        errorEmail.innerText = `Email trống`;
        check = false;
    } else if(!validEmail(form.email.value)){
        errorEmail.innerText = `Email không hợp lệ`;
        check = false;
    } else {
        errorEmail.innerText = ``;
    }

    // validate password 
    if(form.password.value === ``){
        errorPassword.innerText = `password trống`;
        check = false;
    } else if(!validPassword(form.password.value)){
        errorPassword.innerText = `password không hợp lệ`;
        check = false;
    } else {
        errorPassword.innerText = ``;
    }

    // validate confirm password
    if(form.confirmPassword.value === ``){
        errorConfirmPassword.innerText = `xác nhận mật khẩu trống`;
        check = false;
    } else if(form.password.value !== form.confirmPassword.value){
        errorConfirmPassword.innerText = `Xác nhận mật khẩu không trùng khớp`;
        check = false;
    } else {
        errorConfirmPassword.innerText = ``;
    }

    return check;
}

function validEmail(email){
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
}

function validPassword(password) {
  return /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
}

console.log("js loaded");