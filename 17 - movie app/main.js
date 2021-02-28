const APIURL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1',
    IMG_PATH = "https://image.tmdb.org/t/p/w1280",
    container = document.querySelector('.container')

const getMovies = async() => {

    const res = await fetch(APIURL),
        {results} = await res.json();

    showMovies(results);
}

function showMovies(movies){
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

getMovies();