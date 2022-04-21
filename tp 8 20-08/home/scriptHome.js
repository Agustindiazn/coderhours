JSON.parse(localStorage.getItem("Users")) ??
  localStorage.setItem(
    "Users",
    JSON.stringify([
      { name: "admin", email: "admin", password: "admin", online: false },
    ])
  );

let users = JSON.parse(localStorage.getItem("Users"));

const nameUser = getParameterByName("Name");
const password = getParameterByName("password");
if (users.find((user) => user.name === nameUser)) {
  // Verificiar si es  un usuario logeado
  msgWealcome(nameUser)

  // Mostrar todos los usuarios registrados y Futuro chat
  createChatAndUsers()
  createListUsers()


  const buttonClose = document.createElement("button");
  buttonClose.innerHTML = "Cerrar sesion";
  console.log(users)

  buttonClose.onclick = () => {
    singOut(password, users, nameUser)
  }


  document.body.appendChild(buttonClose);

} else {
  // si no existe una session es porq no se logeo nadie
  msgRegister()
}
function msgRegister() {
  const myH1 = document.createElement("h1");
  myH1.innerHTML = "Debes registrarse antes";

  const buttonRegister = document.createElement("button");
  buttonRegister.innerHTML = "Register";
  buttonRegister.onclick = () => {
    location.href = "../register/register.html";
  };
  document.body.appendChild(myH1);
  document.body.appendChild(buttonRegister);
}

function createListUsers() {

}
function msgWealcome(name) {
  const myH1 = document.createElement("h1");
  myH1.innerHTML = `Bienvenido ${name}`;
  document.body.appendChild(myH1);
}
function singOut(password, users, name) {
  // Cerrar sesion
  let usersOfline = users.map((e) => {
    if (e.name === name && e.password === password) {
      e.online = false;
    }
    return e;
  });

  localStorage.setItem("Users", JSON.stringify(usersOfline));

  location.href = "../login/login.html";
}

function createChatAndUsers() {

  const listUser = document.createElement("ul");
  document.body.appendChild(listUser);

  JSON.parse(localStorage.getItem("Users")).forEach((user) => {
    let myLi = document.createElement("li");
    myLi.innerHTML = `${user.name} - ${user.online ? "🟢" : "🔴"}`;
    listUser.appendChild(myLi);
  });
  const containerChatUsers = document.createElement("div")

  // Crear container para el chat y los usuarios
  containerChatUsers.classList.add('containerChatUsers')
  const containerChat = document.createElement("div")
  containerChat.classList.add('containerChat')
  containerChatUsers.appendChild(listUser);
  containerChatUsers.appendChild(containerChat);

  // Crear input para enviar mensajes
  const divInputMsg = document.createElement('div')
  divInputMsg.classList.add('divInputMsg')
  const inputMsg = document.createElement('input')
  inputMsg.classList.add('inputMsg')
  divInputMsg.appendChild(inputMsg)
  containerChat.appendChild(divInputMsg)


  document.body.appendChild(containerChatUsers);
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
