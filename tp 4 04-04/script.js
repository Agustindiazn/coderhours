import { Numberos } from './arrayNumbers.js'

let numbers = new Numberos([])

numbers.rellenarArray();

// Menu
let action
do {
    action = parseInt(prompt('1- Listar mayor a menor \n 2- Listar de menor a mayor \n 3- Buscar un numero \n 4- Suma de todos los numeros\n 5- Promedio de todos los numeros\n 6- Concatenar otro array\n 7- Numeros repetidos\n 8- Buscar todos los numeros mayor a: \n 9- Mostrar todos los numeros \n10- Salir'))
    switch (action) {
        case 1:
            numbers.mayorMenor('mayor menor')
            break;
        case 2:
            numbers.mayorMenor('menor mayor')
            break;
        case 3:
            numbers.findNumber()
            break;
        case 4:
            numbers.sumAllNumbers()
            break;
        case 5:
            numbers.sacarPromedio()
            break;
        case 6:
            numbers.conectToArray()
            break;
        case 7:
            numbers.numberosRepetidos()
            break;
        case 8:
            numbers.mayorA()
            break;
        case 9:
            alert(numbers.array)
            break;
        case 10:
            alert('Adios')
            break;
        default:
            alert('Ingrese un numero del menu')
            break;
    }

} while (action !== 10)