document.addEventListener("DOMContentLoaded", function () {

    const parrafo = document.querySelector("#idParrafo");
    console.log(parrafo);

    const btnCelFah = document.querySelector("idBtnMCelFah");

    btnCelFah.addEventListener("click", celFah);
    
    let resultado;

    function celFah(){
        let num1 = promp("Ingrese el valor de los grados Celcius");

        resultado = ((num1 * 9)/5) + 32;
        parrafo.innerHTML = `${num1} celcius son ${resultado}fahrenheit`;
    }
});