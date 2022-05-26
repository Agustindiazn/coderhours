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
  swal("access denied", `Debes registrarse antes`, "error")

  const buttonRegister = document.createElement("button");
  buttonRegister.innerHTML = "Register";
  buttonRegister.onclick = () => {
    location.href = "../register/register.html";
  };
  document.body.appendChild(myH1);
  document.body.appendChild(buttonRegister);
}

function createListUsers() {
  const divContainUsers = document.createElement("div")
  divContainUsers.setAttribute('class', 'divContainUsers')
  const listUser = document.createElement("ul");
  document.body.appendChild(divContainUsers);
  divContainUsers.appendChild(listUser);



  JSON.parse(localStorage.getItem("Users")).forEach((user) => {
    let myLi = document.createElement("li");
    myLi.innerHTML = `${user.name} - ${user.online ? "🟢" : "🔴"}`;
    listUser.appendChild(myLi);
  });
}
function msgWealcome(name) {
  const myH1 = document.createElement("h1");
  myH1.innerHTML = `Bienvenido ${name}`;
  myH1.style.top = '0px'
  myH1.style.left = '0px'
  myH1.style.position = 'absolute'

  document.body.appendChild(myH1);

  swal("Login correct", `Bienvenido ${name}`, "success")

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
  swal({
    title: "Cerrar sesion ?",
    text: "",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
    .then((willDelete) => {
      if (willDelete) {
        swal("Adios!!", {
          icon: "success",
        });
        setTimeout(() => { location.href = "../login/login.html" }, 2000)
      } else {
        // swal("Your imaginary file is safe!");
      }
    });
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