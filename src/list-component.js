import { auth, favoritesByUserRef } from '../src/firebase.js';

export function makeMovieCard(movie) {
    const html = /*html*/`
        <li>
            <span class="favorite-star">☆</span>
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
        const favoriteStar = dom.querySelector('.favorite-star');
        
        const userId = auth.currentUser.uid;
        const userFavoritesRef = favoritesByUserRef.child(userId);
        const userFavoriteMovieRef = userFavoritesRef.child(movie.id);

        favoriteStar.addEventListener('click', () => {
            userFavoriteMovieRef.set({
                id: movie.id,
                title: movie.title,
                poster_path: movie.poster_path,
                overview: movie.overview,
                release_date: movie.release_date
            });
        });
        movieList.appendChild(dom);
    });
}

function clearList() {
    while(movieList.children.length > 0) {
        movieList.lastElementChild.remove();
    }
}