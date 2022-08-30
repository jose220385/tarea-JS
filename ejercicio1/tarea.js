
function capturaNumero() {
    let captureNumber = document.getElementById("distancia").value;
    let resultado = "";
    let sugerencia = "";

    if (captureNumber >= 0 && captureNumber <= 1000) {
        resultado = "Conviene ir a pie";
        sugerencia = "LLeva zapatillas buenas, toma mucha agua";
    } else if (captureNumber > 1000 && captureNumber <= 10000) {
        resultado = "Conviene ir en bicicleta";
        sugerencia = "Tene cuidado con los chorros de la zona, no pares en los semaforos";
    } else if (captureNumber > 10000 && captureNumber <= 30000) {
        resultado = "Conviene ir en colectivo";
        sugerencia = "acordate de cargar la sube que los uber estan caros"
    } else if (captureNumber > 30000 && captureNumber <= 100000) {
        resultado = "Conviene ir en auto";
        sugerencia = "Fijate la ruta de antemano, podes ahorrar combustible"
    } else if (captureNumber > 100000) {
        resultado = "Conviene ir en avion";
        sugerencia = "llega 3 hs antes al aeropuerto, hace check-in on line"
    } else {
        resultado = "distancia mal ingresada";
        sugerencia = "y... escribi bien!!!"
    }
    document.getElementById("resultado").value = resultado;
    document.getElementById("sugerencia").value = sugerencia;
}

document.getElementById("distancia")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("aceptar").click();
    }
});