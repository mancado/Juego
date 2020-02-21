var secciones = [];
var tiempo_splash = 2000;

window.onload = function(){
    inicializarReferencias();
    setTimeout(cambiarSplash,tiempo_splash);
}

function inicializarReferencias(){
    secciones[1] = document.getElementById("splash_pantalla");
    secciones[2] = document.getElementById("menu_pantalla");
    secciones[3] = document.getElementById("instrucciones_pantalla");
    secciones[4] = document.getElementById("juego_pantalla");
    secciones[5] = document.getElementById("perdiste_pantalla");
    secciones[6] = document.getElementById("pausa_pantalla");
    secciones[7] =document.getElementById("creditos_pantalla")
}

function cambiarSplash(){
    secciones[1].className = "splash oculto";
    secciones[2].className = "pantalla_menu";
}

function cambiarSeccion(id_seccion){

    for (var i in secciones) {
        secciones[i].classList.add("oculto");
    }

    secciones[id_seccion].classList.add("animated");
    secciones[id_seccion].classList.add("headShake");
    secciones[id_seccion].classList.remove("oculto");
}