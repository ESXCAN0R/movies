import { buscarPeliculas,traeTrailer } from "./controllers/controllers.js"

let posters = document.getElementById("posters");

let boton = document.getElementById("boton");
boton.addEventListener("click", clickBuscar);

function clickBuscar(){
    
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
        });
        posters.innerHTML += html
        let contenedores = document.querySelectorAll(".contenedor");
        let video = document.getElementById("video");
        let youtube  = document.getElementById("youtube")
        contenedores.forEach((contenedor) => {
            contenedor.addEventListener("mouseover",function(event) {
                let mouseX = event.clientX;
                let mouseY = event.clientY;
                video.style.left = mouseX+"px"
                video.style.top = mouseY+"px"
                video.style.display = "block";
                traeTrailer().then((res)=>{
                    console.log(res);
                    youtube.setAttribute("src",`https://www.youtube.com/embed/${res.results[1].key}?autoplay=1&mute=0`);
                })
            })

            contenedor.addEventListener("mouseout",function() {
                video.style.display = "none";
            })

            
        })

    })
    .catch((error)=>{
        alert("No se encontraron Movies")
    })
}

