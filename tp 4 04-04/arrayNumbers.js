class Numberos {

    constructor(array) {
        this.array = array;
    }

    rellenarArray() {
        this.array = [];
        let arrayLength = 0;
        do {
            arrayLength = parseInt(prompt('Cuantos numero quiere agregar'))

            if (arrayLength > 0) {
                // Insertar numbero
                for (let index = 0; index < arrayLength; index++) {
                    let number = parseInt(prompt('Ingresar un numero'))
                    this.array.push(number);
                }
            } else {
                alert('Ingrese una cantidad mas que 0')
            }
        } while (arrayLength === 0)

        return this.array
    }

    mayorMenor(option) {
        let arrayReturn = this.array
        if (option == 'mayor menor') {
            alert(arrayReturn.sort((a, b) => {
                return b - a
            }))
        } else {
            alert(arrayReturn.sort())
        }
        return arrayReturn
    }

    findNumber() {
        let numberFind = parseInt(prompt('Que numbero quiere buscar'))

        let findNumber = this.array.find(e => e === numberFind)
        if (!findNumber) {
            alert('No se encontro el numero')
        } else {
            alert(`El numero: ${findNumber} se encontro `)
        }
    }

    sumAllNumbers() {
        let arraySum = this.array.reduce((previou, current) => previou + current, 0)
        alert(`La suma de todos los numeros es: ${this.array} = ${arraySum}`)
    }
    sacarPromedio() {
        let arrayProm = this.array.reduce((previou, current) => previou + current, 0) / this.array.length
        alert(`El promedio de ${this.array} es: ${arrayProm}`)
    }
    conectToArray() {
        this.array = this.array.concat(this.rellenarArray())
        alert(`Todos los numeros: ${this.array}`)
    }
    numberosRepetidos() {
        let iguales = [];
        for (let i = 0; i < this.array.length; i++) {
            for (let j = 0; j < this.array.length; j++) {
                if (this.array[i] === this.array[j] && i !== j) {
                    iguales.find(e => e === this.array[i]) ? null : iguales.push(this.array[i])
                }
            }
        }
        alert(`Los numeros que se repiten son ${iguales}`)
    }
    mayorA() {
        let numberFilter = parseInt(prompt('Que numbero quiere buscar'))
        let numbersFilter = this.array.filter(e => e > numberFilter)

        alert(`Los numeros mayores son: ${numbersFilter}`)
    }

}

export { Numberos }