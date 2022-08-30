let longitudArray = 0;

function capturaNumero() {
    let ingresoValor = document.getElementById("cantidad").value;
    console.log(ingresoValor);
    if (Number(ingresoValor) > 0 && Number.isInteger(Number(ingresoValor))) {
        longitudArray = Number(ingresoValor);
        console.log(typeof longitudArray);
        document.getElementById("cantidad").value = "Numero ingresado correctamente";
        document.getElementById("numeros").focus();
    } else {
        alert('Valor incorrecto') ? "" : location.reload();
    }
}

let arrayNumeros = new Array(longitudArray);
let contador = 0;

function cargoNumeros() {
    if (contador === longitudArray - 1) {
        arrayNumeros[longitudArray - 1] = Number(document.getElementById("numeros").value);
        document.getElementById("numeros").value = "Carga de Numeros exitosa";
        document.getElementById("mayor").focus();
        document.getElementById("numMayor").click();
        console.log(arrayNumeros);
    } else {
        arrayNumeros[contador] = Number(document.getElementById("numeros").value);
        document.getElementById("numeros").value = "";
        contador = contador + 1;
    }

    console.log(typeof arrayNumeros[contador])
}

function esMayor() {
    let i = 0;
    let mayor = arrayNumeros[i];
    for (i = 0; i < arrayNumeros.length; i++) {
        if (arrayNumeros[i + 1] > mayor) {
            mayor = arrayNumeros[i + 1];
        }
        document.getElementById("mayor").value = mayor;
    }
}

document.getElementById("cantidad")
    .addEventListener("keyup", function (event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            document.getElementById("guardaCantidad").click();
        }
    });

document.getElementById("numeros")
    .addEventListener("keyup", function (event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            document.getElementById("guardaNumero").click();
        }
    });

