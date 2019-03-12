import { writeSearchToQuery } from './hash-query.js';

const searchForm = document.getElementById('form');
const searchBar = document.getElementById('search-bar');

searchForm.addEventListener('submit', event => {
    event.preventDefault();
    
    const search = searchBar.value;
    const existingQuery = window.location.hash.slice(1); // slice gets rid of leading '#'
    const newQuery = writeSearchToQuery(existingQuery, search);
    window.location.hash = newQuery;
});

export function updateSearchBar(searchTerm) {
    searchBar.value = searchTerm;
}