JSON.parse(localStorage.getItem("Users")) ??
  localStorage.setItem(
    "Users",
    JSON.stringify([
      { name: "admin", email: "admin", password: "admin", online: false },
    ])
  );

let buttonRegister = document.getElementById("buttonRegister");
buttonRegister.onclick = () => {
  location.href = "../register/register.html";
};

let form = document.getElementById("form");
form.addEventListener("submit", validForm);

function validForm(e) {
  const { name, password } = e.target;

  name.value.trim() === ""
    ? msgAlert("nameMessage", "El nombre esta vacio", e, "error")
    : msgAlert("nameMessage", "Nobre correcto", e, "success");
  password.value.trim() === ""
    ? msgAlert("passwordMessage", "contraseña vacia", e, "error")
    : msgAlert("passwordMessage", "Contraseña correcta", e, "success");

  // Buscar si existe en el local
  let getUsers = JSON.parse(localStorage.getItem("Users"));

  // Si no existe mostrar un error y redirigir al register
  if (getUsers.find((e) => e.name === name.value.trim() && e.password === password.value.trim())) {
    // User online
    let users = getUsers.map((e) => {
      if (
        e.name === name.value.trim() &&
        e.password === password.value.trim()
      ) {
        e.online = true;
      }
      return e;
    });
    localStorage.setItem("Users", JSON.stringify(users));
  } else {
    // No existe
    msgAlert("nameMessage", "error al entrar", e, "error");
    msgAlert("passwordMessage", "error al entrar", e, "error");
  }
  // si existe redirigir al home
}
function msgAlert(container, msg, e, status) {
  status === "error" ? e.preventDefault() : null;

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