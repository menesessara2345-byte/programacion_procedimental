let nombre_completo = document.getElementById("nombre_completo").value;
let email = document.getElementById("email").value;
let numero_celular = document.getElementById("numero_celular").value;
let genero = document.getElementById("genero").value;
let fecha_nacimiento = document.getElementById("fecha_nacimiento").value;
let direccion = document.getElementById("direccion").value;
let password = document.getElementById("password").value;

function ValidarDatos() {
    if (nombre != '' || email != '') {
        if (nombre == /^[^\d]*$/) {
            console.log("los datos ingresados son incorrectos")
        }
        if (!Email.include('@')) {
            console.log("los datos ingresados son correctos")
        }
    }
    else {
        console.log("ingrese todos los datos")
    }

    if (numeroCelular != '' || fechaN != '') {
        if (numeroCelular.length >= 10) {
            console.log("los datos ingresados son incorrectos")
        }
        if (fechaN == getDate()) {
            console.log("no se aceptan fechas mayores a la actual")
        }
        else {
            console.log("ingrese todos los datos")
        }
    }

    if (direccion != '' || contraseña != '') {
        if (contraseña.length >= 10) {
            console.log("los datos ingresados son incorrectos")
        }
        else {
            console.log("ingrese todos los datos")
        }

    }
}