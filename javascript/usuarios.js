function ValidarInformacion() {
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let numeroCelular = document.getElementById("numeroCelular").value;
    let fechaNacimiento = document.getElementById("fechaN").value;
    let direccion = document.getElementById("direccion").value;
    let contrasena = document.getElementById("contraseña").value;

    if (
        !nombre || !email ||
        !numeroCelular || !fechaNacimiento ||
        !direccion || !contrasena
    ) {
        console.log(
            `Informacion del Usuario: \n
            ${nombre} \n ${email} \n
            ${numeroCelular} \n ${fechaNacimiento} \n
            ${direccion} \n ${contrasena}`
        );
        Swal.fire({
            title: "campos incompletos",
            text: "rellena los campos",
            icon: "question"
        });
    }
    else {
        console.log(
            `Informacion del Usuario: \n
            ${nombre} \n ${email} \n
            ${numeroCelular} \n ${fechaNacimiento} \n
            ${direccion} \n ${contrasena}`
        );
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Informacion Guardada Correctamente",
            showConfirmButton: false,
            timer: 1500
        });
    }
    if (!/^[a-zA-Z]+$/.test(nombre)) {
        console.log("El nombre debe tener letras")
        Swal.fire({
            icon: "error",
            text: "El nombre debe tener letras"
        })
        return;
    }
     if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        Swal.fire({
            title: "Ingrese un correo electrónico válido",
            icon: "error"
        });
        return;
    }
     if (!/^\d+$/.test(numeroCelular)) {
        Swal.fire({
            title: "El telefono debe contener numeros",
            icon: "error"
        });
        return;
    }
}

document.getElementById("btnGuardar").onclick = ValidarInformacion;