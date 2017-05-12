/*function Customers(nombre,apellido,email,direccion,telefono,paquete){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.direccion = direccion;
    this.telefono = telefono;
}*/

resultado = [];
var print = document.getElementById("clientes");

function mostrarData(){
	var nombre = document.getElementById("nombre").value;
	var apellido = document.getElementById("apellido").value;
	var correo = document.getElementById("email").value;
    var direccion = document.getElementById("direccion").value;
    var telefono= document.getElementById("telefono").value;
    var paco = document.getElementById("pack").value;
	resultado.push( nombre, apellido, correo, direccion,telefono,paco);
	//document.getElementById("nombre").value = "";
	//document.getElementById("apellido").value = "";
	//document.getElementById("email").value = "";
    //document.getElementById("direccion").value = "";
    //document.getElementById("telefono").value = "";
    /*array.forEach(function(element) {
        element == ""
    }, this);*/
    print.innerHTML = ' <strong> Nombre: </strong> ' + nombre + "</br>" //imprimir
    + '<strong> Apellido: </strong>'  + apellido + "</br>"
    + '<strong> Email: </strong>'  +  correo + "</br>" + 
    '<strong> Dirección: </strong>'  + direccion + "</br>" +
    '<strong> Teléfono: </strong>' +  telefono + "</br>" +
    '<strong>Paquete escogido  </strong>' + paco;
	return resultado;
}

