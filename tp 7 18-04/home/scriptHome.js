import User from "../models/user.js";
JSON.parse(localStorage.getItem("Users")) ??
  localStorage.setItem(
    "Users",
    JSON.stringify([{ name: "admin", email: "admin", password: "admin" }])
  );
let users = JSON.parse(localStorage.getItem("Users"));

const name = getParameterByName("Name");
const password = getParameterByName("password");
if (users.find((user) => user.name === name)) {
  // Verificiar si es  un usuario logeado
  const myH1 = document.createElement("h1");
  myH1.innerHTML = `Bienvenido ${name}`;
  document.body.appendChild(myH1);

  // Mostrar todos los usuarios registrados
  const listUser = document.createElement("ul");
  document.body.appendChild(listUser);

  JSON.parse(localStorage.getItem("Users")).forEach((user) => {
    let myLi = document.createElement("li");
    myLi.innerHTML = `${user.name} - ${user.online ? "🟢" : "🔴"}`;
    listUser.appendChild(myLi);
  });

  const buttonClose = document.createElement("button");
  buttonClose.innerHTML = "Cerrar sesion";
  buttonClose.onclick = () => {
    // Cerrar sesion
    let usersOfline = users.map((e) => {
      if (e.name === name && e.password === password) {
        e.online = false;
      }
      return e;
    });

    localStorage.setItem("Users", JSON.stringify(usersOfline));

    location.href = "../login/login.html";
  };
  document.body.appendChild(buttonClose);


} else {
  // si no existe una session es porq no se logeo nadie
  const myH1 = document.createElement("h1");
  myH1.innerHTML = "Debes registrarse antes";

  const buttonRegister = document.createElement("button");
  // buttonRegister.id = "asd";
  buttonRegister.innerHTML = "Register";
  buttonRegister.onclick = () => {
    location.href = "../register/register.html";
  };
  document.body.appendChild(myH1);
  document.body.appendChild(buttonRegister);
}

/**
 * @param String name
 * @return String
 */
function getParameterByName(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
  return results === null
    ? ""
    : decodeURIComponent(results[1].replace(/\+/g, " "));
}
