document.addEventListener("DOMContentLoaded", function(){

//Accedemos la parrafo que nos permitira imprimir el resultado
const parrafo = document.querySelector("#idParrafo");
console.log(parrafo)

//Accedemos a cada boton por medio de la API DOM
const btnSumar = document.querySelector("#idBtnSumar");
const btnRestar = document.querySelector("#idBtnRestar");
const btnMultiplicar = document.querySelector("#idBtnMultiplicar");
const btnDividir = document.querySelector("#idBtnDividir");

//Agregamos el evento click a los botones, adicionalmente
//se le asigna la funcion que realizará la operación 
btnSumar.addEventListener("click", sumar);
btnRestar.addEventListener("click", restar);
btnMultiplicar.addEventListener("click", multiplicar);
btnDividir.addEventListener("click", dividir);

//Creamos la variable que tendrá el valor del resultaddo de la operación 
let resultado;

//Funcion de las operaciones
function sumar(){
    let num1 = prompt("ingrese el primer numero a sumar");
    let num2 = prompt("ingrese el segundo numero a sumar");
    resultado = num1 + num2;
    parrafo.innerHTML = `${num1} + ${num2} = ${resultado}`;
}

function restar(){
    let num1 = prompt("ingrese el primer numero a restar");
    let num2 = prompt("ingrese el segundo numero a restar");
    resultado = num1 - num2;
    parrafo.innerHTML = `${num1} - ${num2} = ${resultado}`;
}

function multiplicar(){
    let num1 = prompt("ingrese el primer numero a multiplicar");
    let num2 = prompt("ingrese el segundo numero a multiplicar");
    resultado = num1 * num2;
    parrafo.innerHTML = `${num1} x ${num2} = ${resultado}`;
}

function dividir(){
    let num1 = prompt("ingrese el primer numero a dividir");
    let num2 = prompt("ingrese el segundo numero a dividir");
    let mensaje;
    if (num2 != 0) {
        resultado = num1 / num2;
        mensaje = `${num1} / ${num2} = ${resultado}`;
    } else {
        mensaje = `El valor ${num1} / ${num2} no se puede dividir`;
    }
   parrafo.innerHTML = mensaje;
}
});