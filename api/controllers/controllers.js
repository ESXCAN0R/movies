const API_KEY = "e4f9e30a"
const URL_PELICULAS = `https://www.omdbapi.com/?apikey=${API_KEY}`

export async function buscarPeliculas(nombre){
    let resultado = await fetch(URL_PELICULAS+`&s=${nombre}`)
    let objResultado = await resultado.json()
    return objResultado
}
