const API_KEY = "e4f9e30a"
const URL_PELICULAS = `https://www.omdbapi.com/?apikey=${API_KEY}`
const URL_TRAILERS = `https://api.themoviedb.org/3/movie/1858/videos?language=en-US`
export async function buscarPeliculas(nombre){
    let resultado = await fetch(URL_PELICULAS+`&s=${nombre}`)
    let objResultado = await resultado.json()
    return objResultado
}

export async function traeTrailer(){
    let options= {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNzM1MzNlOTllOTBkZGQzZTliYzJiMzVhNDg3NTE0NCIsInN1YiI6IjY0Y2M1ODE2NGZkMTQxMDBiMGYzNTY2MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MSUvOKzKCSILIUs8oZ7rjWTqGkGsDqHZDBeZPFcL_Wc'
        }
    }
    let resultado = await fetch(URL_TRAILERS,options);
    let objResultado = await resultado.json()
    return objResultado
}
