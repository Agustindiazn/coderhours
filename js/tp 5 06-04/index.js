let divContainer = document.getElementById('container')
divContainer.innerHTML = "<h2>Contenedor mayor</h2>"
divContainer.innerHTML += "<div id='parrafo'></div > "

let parrafo = document.getElementById('parrafo')
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

parrafo.innerHTML = "<p>Listado de numeros</p>"
numbers.forEach(number => {

    let li = document.createElement('li')
    li.innerHTML = number
    parrafo.appendChild(li)
});

let objectUser = {
    nombre: prompt('Nombre'),
    apellido: prompt('Apellido'),
    edad: parseInt(prompt('edad'))
}

divContainer.innerHTML += '<div id="user"></div>'

let containerUser = document.getElementById('user')
let p = document.createElement('p')
p.innerHTML = `Bienvenido ${objectUser.nombre} - ${objectUser.apellido} -  ${objectUser.edad} ${ objectUser.edad < 2 ? 'año' : 'años'}`

if (objectUser.edad >= 18) {
    p.innerHTML += ' Mayor de edad'
}
containerUser.appendChild(p)