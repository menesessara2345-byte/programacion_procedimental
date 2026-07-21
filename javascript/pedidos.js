function ValidarInformacion() {
    let direccion = document.getElementById("direccion").value;
    let telefono = document.getElementById("telefono").value;
    let Email = document.getElementById("Email").value;
    let MetodoDePago = document.getElementById("MetodoDePago").value;
    let pedido = document.getElementById("pedido").value;
    let nombre = document.getElementById("nombre").value;

    if (!direccion || !telefono || !Email || !MetodoDePago || !pedido || !nombre) {
        Swal.fire({
            title: "rellenar datos incompletos",
            text: "datos incompletos",
            icon: "question"
        });
    }
    else {
        console.log(
            `Informacion del Producto: \n
            ${direccion} \n
            ${telefono} \n
            ${Email} \n
            ${MetodoDePago} \n
            ${pedido} \n
            ${nombre} \n`
        );

        if (!/^\d+$/.test(telefono)) {
            console.log("El telefono debe contener numeros")
            Swal.fire({
                icon: "error",
                text: "El telefono debe contener numeros"
            })
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Email)) {
            Swal.fire({
                title: "Ingrese un correo electrónico válido",
                icon: "error"
            });
            return;
        }
        if (!/^[a-zA-Z]+$/.test(MetodoDePago)) {
            Swal.fire({
                title: "El metodo de pago debe contener letras",
                icon: "error"
            });
            return;
        }
        if (!/^[a-zA-Z]+$/.test(pedido)) {
            Swal.fire({
                title: "El pedido debe contener letras",
                icon: "error"
            });
            return;
        }
        if (!/^[a-zA-Z]+$/.test(nombre)) {
            console.log("El nombre debe tener letras")
            Swal.fire({
                icon: "error",
                text: "El nombre debe tener letras"
            })
            return;
        }


        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Informacion Guardada Correctamente",
            showConfirmButton: false,
            timer: 1500
        });
    }
}

document.getElementById("btnGuardar").onclick = ValidarInformacion;                     
