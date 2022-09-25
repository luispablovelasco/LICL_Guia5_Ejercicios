function aviso(){
    alert("Bienvenido al mundo JavaSript");
}

function confirmacion(){
    //Los valores que puedde almacenar la variable confirmación 
    //son true o false
    let confirmacion = confirm("Desea salir de al sesión");
    /* para imprimir una variable en una cadena podemos 
    utilizar las comillas simples inversas y luego hacemos el llamado de la variable con ${aqui debera de escribir el nombre de la variable}
    */ 
   alert(`Valor seleccionado ${confirmacion}`);
}

function capturarDatos(){
    let nombre = prompt("¿Cual es us nombre?");
    //Notese que en campo del promt se mostrará 0 por defecto
    let edad = prompt("¿Cual es su edad?");

    alert(`Su nombre es ${nombre} y su edad ${edad}`);
}

function dibujarParrafo(){
    let parrafo = prompt("Escriba la información que desea visualizar en el parrafo");

    /* Utilizaremos la API DOM para acceder al elemento 
    <p id="idParrafo"></p> que hemos creado en nuestro documento HTML */

    const p = document.querySelector("#idParrafo");
    p.innerHTML = parrafo;
}

