import loadHeader from './header-component.js';
import { auth, favoritesByUserRef } from './firebase.js';
import convertObjToArray from './convert-obj-to-array.js';
import loadMovieList from './list-component.js';
loadHeader();

auth.onAuthStateChanged(user => {
    const userID = user.uid;
    const userFavoritesRef = favoritesByUserRef.child(userID);
    userFavoritesRef.on('value', snapshot => {
        const value = snapshot.val();
        const favoriteMovies = convertObjToArray(value);
        loadMovieList(favoriteMovies);
    });
});