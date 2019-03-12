export function makeMovieCard(movie) {
    const html = /*html*/`
        <li>
            <h2>${movie.title}</h2>
            <img src="https://image.tmdb.org/t/p/original${movie.poster_path}">
            <div>${getYear(movie.release_date)}</div>
        </li>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

export function getYear(date) {
    // Splits the date at the dashes and returns each number as a string in a new array
    const fullDate = date.split('-');
    return fullDate[0];
}
const movieList = document.getElementById('movie-list');

export default function loadMovieList(movies) {
    clearList();
    movies.forEach(movie => {
        const dom = makeMovieCard(movie);
        movieList.appendChild(dom);
    });
}

function clearList() {
    while(movieList.children.length > 0) {
        movieList.lastElementChild.remove();
    }
}