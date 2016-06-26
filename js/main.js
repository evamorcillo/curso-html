document.querySelector(".botonmenu").addEventListener("click", function(){
    document.querySelector(".menu").classList.add("visible");
});

document.querySelector(".cerrar").addEventListener("click", function(){
    document.querySelector(".menu").classList.remove("visible");
})