const APIURL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1',
    IMG_PATH = "https://image.tmdb.org/t/p/w1280",
    SEARCH_URL = 'https://api.themoviedb.org/3/search/movie?api_key=04c35731a5ee918f014970082a0088b1&query="',
    container = document.querySelector('.container'),
    form = document.querySelector('form')



const getMovies = async(URL = APIURL) => {

    const res = await fetch(URL),
        {results} = await res.json();

    showMovies(results);
}

getMovies();

function showMovies(movies){

    container.innerHTML = '';

    movies.forEach(movie => {
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = 
        `
            <div class="card">
                <div class="card-img">
                    <img src=${IMG_PATH + movie.poster_path} alt="card-img">

                </div>
                <div class="card-details">
                    <div class="title">${movie.title}</div>
                    <p class="rating">${movie.vote_average}</p>
                </div>
                <div class="card-overview">
                    <h4>Overview</h4>

                    <p class="overview-text">
                        ${movie.overview}
                    </p>
                </div>
            </div>
        `
        container.appendChild(div)
    })
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const search = SEARCH_URL + e.target.children[0].value
    if(e.target.children[0].value !== '')getMovies(search);

    e.target.children[0].value = '';
})
