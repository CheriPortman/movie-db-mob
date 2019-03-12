import { auth } from './firebase.js';

export function makeHeader() {
    const html = /*html*/`
        <header>
            <img src="assets/alchemy-logo.png" alt="Alchemy Code Lab Logo">
            <h1 class="header-title">Favorite Movies</h1>
        </header>
    `;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

export function updateUser(user) {
    const avatar = user.photoURL || './assets/default-avatar.png';
    const html = /*html*/ `
        <div class="profile">
        <img src="${avatar}" alt="Avatar of ${user.displayName}">
            <span>${user.displayName}</span>
            <button>Sign Out</button>
        </div>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

const headerContainer = document.getElementById('header-container');

export default function loadHeader(options) {
    const dom = makeHeader();
    if(options && options.noAuth) {
        headerContainer.appendChild(dom);
        return;
    }
    const header = dom.querySelector('header');
    auth.onAuthStateChanged(user => {
        if(user) {
            const userDom = updateUser(user);
            const signOutButton = userDom.querySelector('button');
            signOutButton.addEventListener('click', () => {
                auth.signOut();
            });
            header.appendChild(userDom);
            headerContainer.appendChild(dom);
        } else {
            window.location = './auth.html';
        }
    });
}