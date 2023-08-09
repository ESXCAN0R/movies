import { buscarPeliculas } from "./controllers/controllers.js"

let posters = document.getElementById("posters");

let boton = document.getElementById("boton");
boton.addEventListener("click", clickBuscar);

function clickBuscar(){
    posters.innerHTML = ""
    let nombre = document.getElementById("nombre").value;
    buscarPeliculas(nombre).then(function(objResultado){
        let arreglo_peliculas = objResultado.Search
        let html = ""
        arreglo_peliculas.forEach((elemento) => {
            html += `
                    <div class="contenedor">
                        <div class="year">${elemento.Title}<br><br>${elemento.Year}</div>
                        <img src="${elemento.Poster}">
                    </div>
                    `
            console.log(elemento.Poster)
        });
        posters.innerHTML += html
    })
    .catch((error)=>{
        alert("No se encontraron Movies")
    })
}
