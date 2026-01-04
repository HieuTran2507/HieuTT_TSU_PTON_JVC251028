const formLogin = document.getElementById("formLogin");
const email = document.getElementById("email");
const password = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");

// error elements
const emailErr = document.getElementById("emailErr");
const passwordErr = document.getElementById("passwordErr");
const errAlert = document.getElementById("errAlert");

// empty validate function
function emptyValidate(chkvar, err) {
  if (!chkvar.value) {
    err.style.display = "block";
  } else {
    err.style.display = "none";
  }
}

formLogin.addEventListener("submit", function (e) {
  e.preventDefault();

  // validate data
  emptyValidate(email, emailErr);
  emptyValidate(password, passwordErr);

  // get data from local storage
  const userLocal = JSON.parse(localStorage.getItem("users")) || [];

  // find data in local storage
  const findUser = userLocal.find(
    (user) =>
      user.userEmail === email.value && user.userPassword === password.value
  );
  if (!findUser) {
    errAlert.style.display = "block";
  } else {
    errAlert.style.display = "none";
    window.location.href = "dashboard.html";

    // save login user
    localStorage.setItem("userLogin", JSON.stringify(findUser));
  }
});
