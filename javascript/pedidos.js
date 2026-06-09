let nombre = document.getElementById("nombre").value;
let direccion = document.getElementById("direccion").value;
let telefono = document.getElementById("telefono").value;
let email = document.getElementById("email").value;
let metodo_pago = document.getElementById("metodo_pago").value;
let pedido = document.getElementById("pedido").value;

function ValidarDatos() {
    if (direccion != '' || telefono != '') {
        if (telefono == /[a-zA-Z]/) {
            console.log("los datos ingresados son incorrectos")
        }
    }
    else {
        console.log("ingrese todos los datos")
    }

    if (Email != '' || MetodoDePago != '') {
        if (!Email.include('@')) {
            console.log("los datos ingresados son correctos")
        }
        if (MetodoDePago == /^[^\d]*$/) {
            console.log("los datos ingresados son incorrectos")
        }
        else {
            console.log("ingrese todos los datos")
        }
    }                                           

    if (pedido != '' || nombre != '') {
        if (pedido == /^[^\d]*$/) {
            console.log("los datos ingresados son incorrectos")
        }
        if (nombre == /^[^\d]*$/) {
            console.log("los datos ingresados son incorrectos")
        }
        else {
            console.log("ingrese todos los datos")
        }

        if (referencias != '') {
            if (referencias == /^[^\d]*$/) {
                console.log("los datos son incorrectos")
            }
            else {
                console.log("ingrese todos los datos ")
            }
        }
    }
}
