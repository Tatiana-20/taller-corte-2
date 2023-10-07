function contarPalabrasRepetidas() {
    var texto = document.getElementById('inputTexto').value.toLowerCase();
    var palabras = texto.split(/\s|[,.;]+/).filter(Boolean);
    var contador = {};

    palabras.forEach(function(palabra) {
        contador[palabra] = (contador[palabra])? contador[palabra] + 1 : 1;
    });

    var resultado = document.getElementById('resultado');
    resultado.innerHTML = "<h2>Palabras Repetidas</h2>";

    for (var palabra in contador) {
        if (contador.hasOwnProperty(palabra) && contador[palabra] > 1) {
            resultado.innerHTML += "<p>" + palabra + ": " + contador[palabra] + " veces</p>";
        }
    }
}
