// get elements
const formRegister = document.getElementById("formRegister");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const checkbox = document.getElementById("checkbox");
// get error elements
const firstnameErr = document.getElementById("firstnameErr");
const lastnameErr = document.getElementById("lastnameErr");
const emailErr = document.getElementById("emailErr");
const passwordErr = document.getElementById("passwordErr");
const confirmPasswordErr = document.getElementById("confirmPasswordErr");
const checkboxErr = document.getElementById("checkboxErr");
// local storage
const userLocal = JSON.parse(localStorage.getItem("users")) || [];

// empty validate function
function emptyValidate(chkvar, err) {
  if (!chkvar.value) {
    err.style.display = "block";
  } else {
    err.style.display = "none";
  }
}

// validate email function
function validateEmail(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

// submit event
formRegister.addEventListener("submit", function (e) {
  e.preventDefault();

  // validate data
  emptyValidate(firstname, firstnameErr);
  emptyValidate(lastname, lastnameErr);
  emptyValidate(email, emailErr);
  emptyValidate(password, passwordErr);
  emptyValidate(confirmPassword, confirmPasswordErr);

  // validate password
  if (password.value !== confirmPassword.value) {
    confirmPasswordErr.innerHTML = "Mật khẩu không khớp";
    confirmPasswordErr.style.display = "block";
  } else {
    confirmPasswordErr.innerHTML = "Xác nhận password trống";
  }

  if (password.value.length < 8 && password.value.length !== 0) {
    passwordErr.innerHTML = "Mật khẩu phải nhiều hơn 8 ký tự";
    passwordErr.style.display = "block";
  } else if (password.value.length === 0) {
    passwordErr.innerHTML = "Password trống";
  }

  // validate email
  if (!validateEmail(email.value) && email.value.length !== 0) {
    emailErr.innerHTML = "Email không hợp lệ";
    emailErr.style.display = "block";
  } else if (email.value.length === 0) {
    emailErr.innerHTML = "Email trống";
  }

  // validate checkbox
  if (!checkbox.checked) {
    checkboxErr.style.display = "block";
  } else checkboxErr.style.display = "none";

  // check and send data to local storage
  if (
    firstname.value &&
    lastname.value &&
    email.value &&
    password.value &&
    confirmPassword.value &&
    checkbox.checked &&
    validateEmail(email.value) &&
    password.value === confirmPassword.value &&
    password.value.length >= 8
  ) {
    const user = {
      userID: Math.ceil(Math.random() * 1000000),
      first_name: firstname.value,
      last_name: lastname.value,
      userEmail: email.value,
      userPassword: password.value,
    };

    userLocal.push(user);

    localStorage.setItem("users", JSON.stringify(userLocal));
    
    alert("Đăng ký thành công");

    window.location.href = "login.html";
  }
});
