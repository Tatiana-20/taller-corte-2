function validar() {
    var password = document.getElementById("password").value;
    var resultado = document.getElementById("resultado");

    if (password.length < 8) {
        resultado.innerHTML = "La contraseña debe tener al menos 8 caracteres.";
        return;
    }

    var contieneMayuscula = /[A-Z]/.test(password);
    var contieneNumero = /\d/.test(password);

    if (!contieneMayuscula || !contieneNumero) {
        resultado.innerHTML = "La contraseña debe contener al menos una letra mayúscula y un número.";
        return;
    }

    if (/\s/.test(password)) {
        resultado.innerHTML = "La contraseña no puede contener espacios en blanco.";
        return;
    }

    resultado.innerHTML = "La contraseña es válida.";
}
