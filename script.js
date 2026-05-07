function agregarContacto(){

    let nombre = document.getElementById("nombre").value.trim();
    let telefono = document.getElementById("telefono").value.trim();
    let correo = document.getElementById("correo").value.trim();

    let mensaje = document.getElementById("mensaje");

    if(nombre === "" || telefono === "" || correo === ""){
        mensaje.innerText = "Todos los campos son obligatorios.";
        mensaje.style.color = "red";
        return;
    }
    if(telefono.length < 9){
        mensaje.innerText = "Número telefónico inválido.";
        mensaje.style.color = "red";
        return;
    }
    if(!correo.includes("@") || !correo.includes(".")){
        mensaje.innerText = "Correo inválido.";
        mensaje.style.color = "red";
        return;
    }
    let contacto = {nombre, telefono, correo};
    contactos.push(contacto);
    mostrarContactos();

    mensaje.innerText = "Contacto agregado correctamente.";
    mensaje.style.color = "green";

    document.getElementById("nombre").value="";
    document.getElementById("telefono").value="";
    document.getElementById("correo").value="";
}
function buscarContacto(){

    let texto = document.getElementById("buscar").value.toLowerCase();

    let tarjetas = document.querySelectorAll(".contacto");

    tarjetas.forEach(tarjeta=>{
        if(tarjeta.innerText.toLowerCase().includes(texto)){
            tarjeta.style.display="block";
        }else{
            tarjeta.style.display="none";
        }
    });
}
function eliminarContacto(indice){

    let confirmar = confirm("¿Desea eliminar este contacto?");

    if(!confirmar){
        return;
    }

    contactos.splice(indice,1);

    mostrarContactos();

    document.getElementById("mensaje").innerText =
    "Contacto eliminado correctamente.";

    document.getElementById("mensaje").style.color="green";
}