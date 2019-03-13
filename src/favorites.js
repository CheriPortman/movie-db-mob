import loadHeader from './header-component.js';
import { auth, favoritesByUserRef } from './firebase.js';

loadHeader();

auth.onAuthStateChanged(user => {
    const userID = user.uid;
    const userFavoritesRef = favoritesByUserRef.child(userID);
    userFavoritesRef.on('value', snapshot => {
        const value = snapshot.val();
    });
});