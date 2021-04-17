const form = document.getElementById("form");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const tel = document.getElementById("tel");
const num = document.getElementById("number");
const password = document.getElementById("password");

form.addEventListener("submt", (e) => {
  e.preventDefault();

  CheckRequired();
  CheckLength(username, 3, 15);
  checkLength(password, 8, 25);
  checkEmail(email);
  CheckPasswordsMatch();
});
