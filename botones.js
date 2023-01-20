
var perfil = "Mi Nombre es"
var nombre = "Diego Fabian Torrez"
/**/
var mail = "Mi direccion email es"
var direccion = "diego9380@outlook.com"
/**/
var cumpleaños = "Mi cumpleaños es"
var fecha = "29/10/1993"
/**/
var ubicación = "Mi ubicación es"
var domicilio = "Mascardi 2148"
/**/
var telefono = "Mi telefono es"
var numero = "1148968357"
/**/
var contraseña = "Mi contraseña es"
var micontraseña = "Diego9380"

function btnPerfil(){
    document.getElementById("user_title").innerHTML = perfil;
    document.getElementById("user_value").innerHTML = nombre;
}

function btnMail(){
    document.getElementById("user_title").innerHTML = mail;
    document.getElementById("user_value").innerHTML = direccion;
}

function btnCumpleaños(){
    document.getElementById("user_title").innerHTML = cumpleaños;
    document.getElementById("user_value").innerHTML = fecha;
}

function btnUbicacion(){
    document.getElementById("user_title").innerHTML = ubicación;
    document.getElementById("user_value").innerHTML = domicilio;
}

function btnTelefono(){
    document.getElementById("user_title").innerHTML = telefono;
    document.getElementById("user_value").innerHTML = numero;
}

function btnContraseña(){
    document.getElementById("user_title").innerHTML = contraseña;
    document.getElementById("user_value").innerHTML = micontraseña;
}




