const API_TOKEN = "f517434f01e92d2ccab5346a8de76f20"

export function getFilmsFromApiWithSearchedText(text, page){
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text + '&page=' + page
    return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log(error))
}

export function getImageFromApi(name){
    return 'https://image.tmdb.org/t/p/w300' + name
}

export function getFilmDetailFromApi(id){
    const url = 'https://api.themoviedb.org/3/movie/' + id + '?api_key=' + API_TOKEN + '&language=fr'
    return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log(error))
}