let showPassword = document.querySelector('.show-password');
let inputPassword = document.querySelector('#password');

// show password and hide password
showPassword.onclick = function(){
    if(inputPassword.getAttribute('type')==='password'){
        inputPassword.setAttribute('type','text');
    }else{
        inputPassword.setAttribute('type','password');
    }
};

let users = JSON.parse(localStorage.getItem('users')) || [];

let form = document.getElementById('form');
let errorEmail = document.querySelector('.error-email');
let errorPassword = document.querySelector('.error-password');
form.onsubmit = function(e){
    e.preventDefault();
    if(validateData(form)){
        if(checkEmailAndPassword(form.email.value, form.password.value)){
            alert('Login successful');  
        }else{
            alert('Email or password is incorrect');
        }   
    }
};
function checkEmailAndPassword(email, password){
    return users.some(el => el.email === email && el.password === password);
}
function validateData(form){
    let check = true;
    // validate email
    if(form.email.value === ''){    
        // case email is empty
        errorEmail.innerText = 'Email cannot be empty';
        check = false;
    }else if(!validEmail(form.email.value)){
        // validate email pattern (regex)
        errorEmail.innerText = 'Email is not valid';
        check = false;
    }else{
        errorEmail.innerText = '';
    }   
    // validate password
    if(form.password.value === ''){    
        // case password is empty
        errorPassword.innerText = 'Password cannot be empty';
        check = false;
    }else if(!validPassword(form.password.value)){
        // validate password pattern (regex)
        errorPassword.innerText = 'Password is not valid';
        check = false;
    }else{
        errorPassword.innerText = '';
    }   
    return check;
};
function validEmail(email) {
  // sử dụng regex -> regular expression
  return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
}

function validPassword(password) {
  return /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
}


