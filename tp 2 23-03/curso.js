agregarImpuestos  = (valor, tax)=>{
    console.log(valor , tax, (valor * tax), (valor * tax)/100)
    valor = ((valor * tax) / 100) + valor;
    return valor
}
let valorCurso;
let impuestos;

var cuota1;
var cuota2;


valorCurso = parseInt(prompt('Ingresar valor del curso'))

if (valorCurso > 0) {
    impuestos = parseInt(prompt('Ingresar impuestos del curso'))

    let valorCursoImpuesto = agregarImpuestos(valorCurso, impuestos);
    generarCuotas(valorCursoImpuesto);

    alert(`Precio del curso:  ${valorCursoImpuesto.toFixed()} \n Cuotas: \n x1 ${valorCurso.toFixed()} (Transferencia) \n x2 ${cuota1.toFixed(2)} (${valorCursoImpuesto.toFixed()}) \n x3 ${cuota2.toFixed(2)} (${valorCursoImpuesto.toFixed()})`)

} else {
    alert('Error al ingresar valor del curso')
}

function generarCuotas (valor){
    for (let index = 0; index < 2; index++) {
        if(index == 0) cuota1 = valor / 2
        if(index == 1) cuota2 = valor / 3
    }
}