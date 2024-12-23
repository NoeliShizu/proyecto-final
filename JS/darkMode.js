const botonSlider = document.querySelector(".boton")

botonSlider.addEventListener("click", e=>{
    botonSlider.classList.toggle("active");
    document.body.classList.toggle("active");
})