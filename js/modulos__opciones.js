var mod__ventas = document.getElementById("mod__ventas");
var submod__OrdenDeVenta = document.getElementById("submod__OrdenDeVenta");


mod__ventas.addEventListener("mouseenter",function(){
    // Submod__lista__ventas es la sublista (Nivel 2) que manejaremos
    var temp = document.getElementById("submod__lista__ventas");
    if(temp.classList.contains("lateral__submodulo__disable")){
        temp.classList.remove("lateral__submodulo__disable");
    }else{
        temp.classList.add("lateral__submodulo__disable");
    }
});
mod__ventas.addEventListener("mouseleave",function(){
    var temp = document.getElementById("submod__lista__ventas");
    if(temp.classList.contains("lateral__submodulo__disable")){
        temp.classList.remove("lateral__submodulo__disable");
    }else{
        temp.classList.add("lateral__submodulo__disable");
    }
});





submod__OrdenDeVenta.addEventListener("mouseenter",function(){
    // opciones__lista__OrdenDeVenta son las opciones de la sublista (Este es el nivel 3)
    var temp = document.getElementById("opciones__lista__OrdenDeVenta");
    if(temp.classList.contains("lateral__opciones__disable")){
        temp.classList.remove("lateral__opciones__disable");
    }else{
        temp.classList.add("lateral__opciones__disable");
    }
});

submod__OrdenDeVenta.addEventListener("mouseleave",function(){
    var temp = document.getElementById("opciones__lista__OrdenDeVenta");
    if(temp.classList.contains("lateral__opciones__disable")){
        temp.classList.remove("lateral__opciones__disable");
    }else{
        temp.classList.add("lateral__opciones__disable");
    }
});