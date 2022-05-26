JSON.parse(localStorage.getItem("Users")) ??
  localStorage.setItem(
    "Users",
    JSON.stringify([
      { name: "admin", email: "admin", password: "admin", online: false },
    ])
  );

import User from "../models/user.js";
// import swal from 'sweetalert';

let buttonlogin = document.getElementById("buttonLogin");
buttonlogin.onclick = () => {
  location.href = "../login/login.html";
};

let form = document.getElementById("form");
form.addEventListener("submit", validForm);

function validForm(e) {
  const { name, email, password, passwordConfirm } = e.target;

  name.value.trim() === ""
    ? msgAlert("nameMessage", "El nombre esta vacio", e, "error")
    : msgAlert("nameMessage", "Nobre correcto", e, "success");
  email.value.trim() === ""
    ? msgAlert("emailMessage", "Error en el email", e, "error")
    : msgAlert("emailMessage", "Email correcto", e, "success");
  password.value.trim() === ""
    ? msgAlert("passwordMessage", "contraseña vacia", e, "error")
    : msgAlert("passwordMessage", "Contraseña correcta", e, "success");
  password.value.trim() !== passwordConfirm.value.trim()
    ? msgAlert("passwordConfirmMessage", "contraseña no coincide", e, "error")
    : msgAlert("passwordConfirmMessage", "Contraseñas correctas", e, "success");

  // Save localStorage
  if (
    name.value.trim() !== "" &&
    email.value.trim() !== "" &&
    password.value.trim() !== "" &&
    password.value.trim() === passwordConfirm.value.trim()
  ) {
    saveUser(name.value.trim(), email.value.trim(), password.value.trim(), e);

  }
}

function saveUser(name, email, password, e) {
  // Crear usuario
  let user = new User(name, email, password);

  // Buscar usuarios ya registrado
  let users = JSON.parse(localStorage.getItem("Users"));

  // Buscar si no esta repetido el nombre
  let userFind = false;
  users.find((user) => user.name === name)
    ? msgAlert("nameMessage", "El nombre ya esta en uso", e, "error")
    : (userFind = true);
  if (userFind) {
    // guardar el nuevo en el array de users
    users.push(user);
    // Actualizar localStorage
    localStorage.setItem("Users", JSON.stringify(users));
  }
}
function msgAlert(container, msg, e, status) {
  if (status === "error") {
    e.preventDefault()
    swal("Register error", msg, "error")
  }

  let msgContainer = document.getElementById(container);

  status === "error"
    ? msgContainer.classList.remove("success")
    : msgContainer.classList.add(status);
  status === "success"
    ? msgContainer.classList.remove("error")
    : msgContainer.classList.add(status);

  msgContainer.innerHTML = "";
  msgContainer.innerHTML = msg;
}

