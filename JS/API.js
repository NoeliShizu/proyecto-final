const botonSlider = document.querySelector(".boton");


document.addEventListener("DOMContentLoaded",e=>{
    cargarDarkModeDeLocalStorage()
    botonSlider.addEventListener("click", darkMode)
})

function ponerDarkMode(){
        botonSlider.classList.toggle("active");
        document.body.classList.toggle("active");
        guardarDarkModeLocalStorage(botonSlider.classList.contains("active"))}

function guardarDarkModeLocalStorage(estado){
        localStorage.setItem("darkMode", estado)
}

function cargarDarkModeDeLocalStorage(){
    const darkModeGuardado = localStorage.getItem("darkMode")== "true";
    if(darkModeGuardado){
        botonSlider.classList.add("active")
        document.body.classList.add("active")
    }
   
}
//const url = "https://api.thecatapi.com/v1/images";
//const api_key = "live_VgxPKLwbY9hWn6mV7K3hQWu8awLCiD8yW0cAr9Q7uf8HUohoHGuIXOZTwfH63fzB"
//let storedImages = []

//fetch (url,{headers: {
//    "x-api-key" = api_key
//}})
//.then((response)=> {return response.json();})



//fetch("https://api.thecatapi.com/v1/images/search?limit=10&api_key=live_VgxPKLwbY9hWn6mV7K3hQWu8awLCiD8yW0cAr9Q7uf8HUohoHGuIXOZTwfH63fzB").then((respuesta)=>respuesta.json()).then((datos)=>{
//    console.log(datos)
//}