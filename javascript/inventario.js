function ValidarInformacion() {
let codigo_producto = document.getElementById("codigo_producto").value;
let nombre_producto = document.getElementById("nombre_producto").value;
let precio_producto = document.getElementById("precio_producto").value;
let cantidad_producto = document.getElementById("cantidad_producto").value;
let marca_producto = document.getElementById("marca_producto").value;
let categoria_producto = document.getElementById("categoria_producto").value;
let unidad_medida = document.getElementById("unidad_medida").value;

  if (!codigo_producto || !nombre_producto || !precio_producto || !cantidad_producto || !marca_producto || !categoria_producto || !unidad_medida) {
        Swal.fire({
            title: "rellenar campos incompletos",
            text: "campos incompletos",
            icon: "question"
        });
    }
    else {
        console.log(
            `Informacion del Producto: \n
            ${codigo_producto} \n
            ${nombre_producto} \n
            ${precio_producto} \n
            ${cantidad_producto} \n
            ${categoria_producto} \n
            ${marca_producto} \n
            ${unidad_medida} \n`
        );
        if (!/^\d+$/.test(codigo_producto)) {
            console.log("El codigo del producto nodebe contener letras")
            Swal.fire("El codigo del producto no debe tener letras");
            return;
        }
        if (!/^[a-zA-Z]+$/.test(nombre_producto )) {
            console.log("El nombre del producto debe tener letras")
            Swal.fire({
                icon: "error",
                text: "El nombre del producto debe tener letras"
            })
            return;
        }
        if (!/^\d+$/.test(precio_producto)) {
            Swal.fire({
                title: "El precio unitario debe contener numeros",
                icon: "error"
            });
            return;
        }
        if (!/^\d+$/.test(cantidad_producto)) {
            Swal.fire({
                title: "La cantidad del producto debe contener numeros",
                icon: "error"
            });
            return;
        }

        if (!/^[a-zA-Z]+$/.test(marca_producto)) {
            console.log("La Marca del producto debe contener letras")
            Swal.fire("La Marca del producto debe tener letras");
            return;
        }
        if (!/^[a-zA-Z]+$/.test(unidad_medida)) {
            console.log("La unidad de medida no debe contener numeros")
            Swal.fire("La unidad de medida no debe contener numeros");
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
  