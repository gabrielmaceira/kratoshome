// para darle el focus al enlace de home en el navbar cuando cargue la página
$(document).ready(function () {
    $("#enlaceHome").focus();
});
// para darle el focus al enlace que se haya seleccionado
// inicio
$("#enlaceNosotros").click(function () {
    $(document).ready(function () {
        $("#enlaceNosotros").focus();
    });
});

$("#enlaceServicios").click(function () {
    $(document).ready(function () {
        $("#enlaceServicios").focus();
    });
});

$("#enlaceArticulos").click(function () {
    $(document).ready(function () {
        $("#enlaceArticulos").focus();
    });
});

$("#enlaceContacto").click(function () {
    $(document).ready(function () {
        $("#enlaceContacto").focus();
    });
});
// fin

// para cambiar el color del navbar al hacer scroll
$(window).scroll(function () {
    if ($("#menu").offset().top > 150) {
        $("#menu").addClass("navbar--azul");
    } else {
        $("#menu").removeClass("navbar--azul");
    }
});

// para cambiar el color del navbar al darle click al toggler responsivo
$(".navbar-toggler").click(function () { 
    $("#menu").css("background-color", "rgba(22, 41, 84, 0.9)");
    $("#navbarSupportedContent").toggle("fast");  
});

// para cerrar el toggler responsivo al seleccionar un enlace
$(".nav-link").click(function () { 
    $("#navbarSupportedContent").hide("fast");   
});

let ancho = $(window).width();
console.log(ancho);
if (ancho > 1500) {
    animacionesPantallasGrandes();    
} else {
    animacionesPantallasPequeñas();        
}