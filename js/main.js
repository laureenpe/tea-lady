function Customers(nombre, apellido, email, direccion, telefono, paquete) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.direccion = direccion;
    this.telefono = telefono;
    this.paquete = paquete;

}

var resultado = [];

function mostrarData() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var correo = document.getElementById("email").value;
    var direccion = document.getElementById("direccion").value;
    var telefono = document.getElementById("telefono").value;
    var paquete = document.getElementById("pack").value;
    resultado.push(new Customers(nombre, apellido, correo, direccion, telefono, paquete));
    //validacion
    resultado.forEach(function(element) {
        if (element.nombre == "" || element.apellido == "" || element.email == "" || element.direccion == "" || element.telefono == "" ||
            element.paquete == "") {
            console.log('no se encontró el elemento')
            console.log('Nombre: ' + element.nombre);
            console.log('Nombre: ' + element.apellido);
            console.log('Nombre: ' + element.correo);
            console.log('Nombre: ' + element.direccion);
            console.log('Nombre: ' + element.telefono);
            console.log('Nombre: ' + element.paquete);
            alert("You must fill the content");
            resultado.pop();
        } else if (paquete == null || paquete == 0) {
            alert("Select a pack");
            resultado.pop();
        } else {
            console.log('todo bien!');
            console.log('Nombre: ' + element.nombre);
            console.log('Nombre: ' + element.apellido);
            console.log('Nombre: ' + element.correo);
            console.log('Nombre: ' + element.direccion);
            console.log('Nombre: ' + element.telefono);
            console.log('Nombre: ' + element.paquete);
        }
    });

    /* print.innerHTML = ' <strong> Nombre: </strong> ' + nombre + "</br>" //imprimir
         +
         '<strong> Apellido: </strong>' + apellido + "</br>" +
         '<strong> Email: </strong>' + correo + "</br>" +
         '<strong> Dirección: </strong>' + direccion + "</br>" +
         '<strong> Teléfono: </strong>' + telefono + "</br>" +
         '<strong>Paquete escogido  </strong>' + paquete;*/
    imprimir();
}


function imprimir() {
    console.log('print!!!');
    var print = document.getElementById("clientes");

    for (var i = 0; i < resultado.length; i++) {
        print.innerHTML = ' <strong> Nombre: </strong> ' + resultado[i].nombre + "</br>" //imprimir
            +
            '<strong> Apellido: </strong>' + resultado[i].apellido + "</br>" +
            '<strong> Email: </strong>' + resultado[i].correo + "</br>" +
            '<strong> Dirección: </strong>' + resultado[i].direccion + "</br>" +
            '<strong> Teléfono: </strong>' + resultado[i].telefono + "</br>" +
            '<strong>Paquete escogido  </strong>' + resultado[i].paquete;
    }



}