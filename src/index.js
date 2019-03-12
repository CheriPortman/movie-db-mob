import './check-auth.js';
import loadHeader from './header-component.js';
import loadMovieList from './list-component.js';
import { updateSearchBar } from './search-component.js';
import { updatePagingInfo } from './paging-component.js';
import { readFromQuery } from './hash-query.js';
import makeSearchMovieUrl from './make-search-movie-url.js';
import { auth } from '../src/firebase.js';

loadHeader();

const prompt = document.getElementById('prompt');
const movieContainer = document.getElementById('movie-container');


window.addEventListener('hashchange', loadQuery); 

auth.onAuthStateChanged(() => {
    loadQuery();
});

function loadQuery() {
    const existingQuery = window.location.hash.slice(1);
    const queryOptions = readFromQuery(existingQuery);
    updateSearchBar(queryOptions.searchTerm);
    const url = makeSearchMovieUrl(queryOptions);
    if(!url) {
        prompt.classList.remove('hidden');
        movieContainer.classList.add('hidden');
        return;
    } else {
        prompt.classList.add('hidden');
        movieContainer.classList.remove('hidden');
    }
    
    fetch(url)
        .then(response => response.json())
        .then(result => {
            loadMovieList(result.results);
            const pagingInfo = {
                currentPage: result.page,
                totalPages: result.total_pages
            };
            updatePagingInfo(pagingInfo);
        });
}