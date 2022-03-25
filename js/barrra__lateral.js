var obj = document.getElementById("mostrar__lateral");
var obj2 =document.getElementById("ocultar__lateral");


obj.addEventListener("click",function(){
    document.getElementById("lateral").classList.add("lateral__active");
});

obj2.addEventListener("click",function(){
    document.getElementById("lateral").classList.remove("lateral__active");

});