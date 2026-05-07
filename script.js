let contactos = [];

function agregarContacto() {

    let nombre = document.getElementById("nombre").value;
    let telefono = document.getElementById("telefono").value;
    let correo = document.getElementById("correo").value;

    let mensaje = document.getElementById("mensaje");

    if(nombre === "" || telefono === "" || correo === ""){
        mensaje.innerText = "Todos los campos son obligatorios.";
        mensaje.style.color = "red";
        return;
    }

    if(!correo.includes("@")){
        mensaje.innerText = "Ingrese un correo válido.";
        mensaje.style.color = "red";
        return;
    }

    let contacto = {
        nombre: nombre,
        telefono: telefono,
        correo: correo
    };

    contactos.push(contacto);

    mostrarContactos();

    mensaje.innerText = "Contacto agregado correctamente.";
    mensaje.style.color = "green";

    document.getElementById("nombre").value = "";
    document.getElementById("telefono").value = "";
    document.getElementById("correo").value = "";
}

function mostrarContactos() {

    let lista = document.getElementById("listaContactos");

    lista.innerHTML = "";

    for(let i = 0; i < contactos.length; i++){

        lista.innerHTML += `
            <div class="contacto">

                <h3>${contactos[i].nombre}</h3>

                <p><strong>Teléfono:</strong> ${contactos[i].telefono}</p>

                <p><strong>Correo:</strong> ${contactos[i].correo}</p>

                <button class="btn-eliminar"
                onclick="eliminarContacto(${i})">

                    Eliminar

                </button>

            </div>
        `;
    }
}

function eliminarContacto(indice){

    contactos.splice(indice, 1);

    mostrarContactos();

    document.getElementById("mensaje").innerText =
    "Contacto eliminado correctamente.";
}