const btnCalcular = document.getElementById('calcular')

btnCalcular.onclick = () => {
    // Obtener los numeros
    const numOne = document.getElementById('numOne').value ?? 0
    const numTwo = document.getElementById('numTwo').value ?? 0
    // Que operacion
    const operacion = document.getElementById('operacion').value
    // Realizar la operacion
    Calcular(numOne, numTwo, operacion)
    // Mostrar en pantalla
}

function Calcular(numOne, numTwo, operacion) {
    let rta
    operacion === 'Suma' ? rta = parseInt(numOne) + parseInt(numTwo) :
        operacion === 'Resta' ? rta = parseInt(numOne) - parseInt(numTwo) :
            operacion === 'Multiplicacion' ? rta = parseInt(numOne) * parseInt(numTwo) :
                operacion === 'Division' ? rta = parseInt(numOne) / parseInt(numTwo) : null

    // if (operacion === 'Suma') {
    //     rta = parseInt(numOne) + parseInt(numTwo)
    // } else if (operacion === 'Resta') {
    //     rta = parseInt(numOne) - parseInt(numTwo)
    // } else if (operacion === 'Multiplicacion') {
    //     rta = parseInt(numOne) * parseInt(numTwo)
    // } else if (operacion === 'Division') {
    //     rta = parseInt(numOne) / parseInt(numTwo)
    // }
    // Actualizar div con la rta
    mostrarRta(operacion, rta)
}

// Crear div en la pagina una sola ve
const divRta = document.createElement('div')
divRta.setAttribute('id', 'mostrarRta')
document.body.appendChild(divRta)

function mostrarRta(op, rta) {
    const divRta = document.getElementById('mostrarRta')
    divRta.innerHTML = `El resultado de la ${op} es: ${rta}`
}