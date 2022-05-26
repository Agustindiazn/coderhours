const rellenarArray = () => {
    let array = [];
    let arrayLength = 0;
    do {
        arrayLength = parseInt(prompt('Cuantos numero quiere agregar'))

        if (arrayLength > 0) {
            // Insertar numbero
            for (let index = 0; index < arrayLength; index++) {
                let number = parseInt(prompt('Ingresar un numero'))
                array.push(number);
            }
        } else {
            alert('Ingrese una cantidad mas que 0')
        }
    } while (arrayLength === 0)
    return array
}

let numbers = rellenarArray()

// Menu
let action
do {
    action = parseInt(prompt('1- Listar mayor a menor \n 2- Listar de menor a mayor \n 3- Buscar un numero \n 4- Suma de todos los numeros\n 5- Promedio de todos los numeros\n 6- Concatenar otro array\n 7- Numeros repetidos\n 8- Buscar todos los numeros mayor a: \n 9- Mostrar todos los numeros \n10- Salir'))
    switch (action) {
        case 1:
            let arrayMayorAMenor = numbers
            alert(arrayMayorAMenor.sort((a, b) => {
                return b - a
            }))
            break;
        case 2:
            let arrayMenorAMayor = numbers
            alert(arrayMenorAMayor.sort())
            break;

        case 3:
            let numberFind = parseInt(prompt('Que numbero quiere buscar'))

            let findNumber = numbers.find(e => e === numberFind)
            if (!findNumber) {
                alert('No se encontro el numero')
            } else {
                alert(`El numero: ${findNumber} se encontro `)
            }
            break;
        case 4:
            let arraySum = numbers.reduce((previou, current) => previou + current, 0)
            alert(`La suma de todos los numeros es: ${numbers} = ${arraySum}`)
            break;
        case 5:
            let arrayProm = numbers.reduce((previou, current) => previou + current, 0) / numbers.length
            alert(`El promedio de ${numbers} es: ${arrayProm}`)
            break;
        case 6:
            numbers = numbers.concat(rellenarArray())
            alert(`Todos los numeros: ${numbers}`)
            break;
        case 7:
            let iguales = [];
            for (let i = 0; i < numbers.length; i++) {
                for (let j = 0; j < numbers.length; j++) {
                    if (numbers[i] === numbers[j] && i !== j) {
                        iguales.find(e => e === numbers[i]) ? null : iguales.push(numbers[i])
                    }
                }
            }
            alert(`Los numeros que se repiten son ${iguales}`)
            break;
        case 8:
            let numberFilter = parseInt(prompt('Que numbero quiere buscar'))
            let numbersFilter = numbers.filter(e => e > numberFilter)

            alert(`Los numeros mayores son: ${numbersFilter}`)
            break;
        case 9:
            alert(numbers)
            break;
        case 10:
            alert('Adios')
            break;
        default:
            alert('Ingrese un numero del menu')
            break;
    }

} while (action !== 10)