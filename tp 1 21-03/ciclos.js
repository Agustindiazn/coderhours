let userName
let pass
let passConfirm

userName = prompt('Ingresar nombre de usuario', " ");

do {

    pass = prompt('Crear contraseña')
    passConfirm = prompt('Escriba nuevamente la contraseña')
    if (pass !== passConfirm) {
        alert('Contraseña no coinciden')
    }
} while (pass !== passConfirm);


let action
do {
    action = parseInt(prompt('1- Suma \n 2- resta \n 3- Multiplicacion \n 4- Dividir \n 5- Ciclo de multiplicacion \n 6- Salir'))
    let numberFirst
    let numberSecond

    if (action !== 6) {

        do {
            numberFirst = parseInt(prompt('Ingresar un numero entero'))
            if (!isNaN(numberFirst) && numberFirst % 1 !== 0) {
                alert('Ingresar numero entero valido')
            }
        } while (!isNaN(numberFirst) && numberFirst % 1 !== 0)
        do {
            numberSecond = parseInt(prompt('Ingresar un numero entero'))
            if (!isNaN(numberSecond) && numberSecond % 1 !== 0) {
                alert('Ingresar numero entero valido')
            }
        } while (!isNaN(numberSecond) && numberSecond % 1 !== 0)

    }
    switch (action) {
        case 1:
            alert(`La suma es:  ${numberFirst + numberSecond}`)
            break;
        case 2:
            alert(`La resta es: ${numberFirst - numberSecond}`)
            break;
        case 3:
            alert(`La multiplicacion es: ${numberFirst * numberSecond}`)
            break;
        case 4:
            alert(`La dividicion es: ${numberFirst / numberSecond}`)
            break;
        case 5:
            let totalFirst = 1;
            let totalSecond = 1;
            for (i = 1; i <= numberFirst; i++) {
                totalFirst = totalFirst * i;
            }
            for (i = 1; i <= numberSecond; i++) {
                totalSecond = totalSecond * i;
            }
            alert(`La repeticion es:\n Primero numero: ${totalFirst} \n Segundo numero: ${totalSecond}`)
            break;
        case 6:
            alert(`Adios ${userName}`)
            break;
    }
} while (action !== 6);
