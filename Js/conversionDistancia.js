document.addEventListener("DOMContentLoaded", function () {

    const parrafo = document.querySelector("#idParrafo");
    console.log(parrafo);

    const btnMetrosPies = document.querySelector("idBtnMetrosPies");
    const btnMetrosYardas = document.querySelector("idBtnMetrosYardas");
    const btnMetrosPulgadas = document.querySelector("idBtnMetrosPulgadas");

    btnMetrosPies.addEventListener("click", metrosPies);
    btnMetrosYardas.addEventListener("click", metrosYardas);
    btnMetrosPulgadas.addEventListener("click", metrosPulgadas);

    let resultado;

    function metrosPies(){
        let num1 = promp("Ingrese el valor de los metros");

        resultado = num1 * 3.281;
        parrafo.innerHTML = `${num1} metros son ${resultado}pies`;
    }

    function metrosYardas(){
        let num1 = promp("Ingrese el valor de los metros");

        resultado = num1 * 1.094;
        parrafo.innerHTML = `${num1} metros son ${resultado}yardas`;
    }

    function metrosPulgadas(){
        let num1 = promp("Ingrese el valor de los metros");

        resultado = num1 * 39.37;
        parrafo.innerHTML = `${num1} metros son ${resultado}pulgadas`;
    }
});
