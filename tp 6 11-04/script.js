let counter = 0
const changePosition = (id) => {

    if (counter < 10) {
        id.style.margin = `${getRandomInt(0, 280)}px 0px 0px ${getRandomInt(0, 280)}px`
    } else if (counter === 10) {
        id.value += ' listo'
    }
    counter++

}

let buttonRegister = document.getElementById('register')
buttonRegister.onmouseover = () => {
    changePosition(buttonRegister)
}

let form = document.getElementById('form')
form.addEventListener('submit', validForm)

function validForm(e) {

    const { name, email, password, passwordConfirm } = e.target

    name.value.trim() === "" ? msgAlert('nameMessage', 'El nombre esta vacio', e, 'error') : msgAlert('nameMessage', 'Nobre correcto', e, 'success')
    email.value.trim() === "" ? msgAlert('emailMessage', 'Error en el email', e, 'error') : msgAlert('emailMessage', 'Email correcto', e, 'success')
    password.value.trim() === "" ? msgAlert('passwordMessage', 'contraseña vacia', e, 'error') : msgAlert('passwordMessage', 'Contraseña correcta', e, 'success')
    password.value.trim() !== passwordConfirm.value.trim() ? msgAlert('passwordConfirmMessage', 'contraseña no coincide', e, 'error') : msgAlert('passwordConfirmMessage', 'Contraseñas correctas', e, 'success')

    // Para el proyecto final hago el login con el local storage y una tienda o la lista de los user que se registren, guardandolo en la session
    e.preventDefault()

}
function msgAlert(container, msg, e, status) {

    status === 'error' ? e.preventDefault() : null

    let msgContainer = document.getElementById(container)

    status === 'error' ? msgContainer.classList.remove('success') : msgContainer.classList.add(status)
    status === 'success' ? msgContainer.classList.remove('error') : msgContainer.classList.add(status)

    msgContainer.innerHTML = ''
    msgContainer.innerHTML = msg
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
